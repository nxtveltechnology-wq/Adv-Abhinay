import { useState, useEffect } from "react";
import blogsData from "../data/blogs.json";

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  link: string;
}

const CACHE_KEY_PREFIX = "news_cache_v2_";
const CACHE_DURATION_MS = 60 * 60 * 1000; // 1 hour

// Use blogs.json as ultimate fallback if network completely fails
const getFallbackData = (type: "vidhit" | "lexrera"): NewsArticle[] => {
  return blogsData.map((b) => ({
    id: b.id.toString(),
    title: b.title,
    excerpt: b.excerpt,
    image:
      type === "lexrera"
        ? "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800"
        : b.image,
    date: b.date,
    category: type === "vidhit" ? "Legal News" : "Real Estate News",
    link: "#",
  }));
};

export const useNews = (feedType: "vidhit" | "lexrera") => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchNews = async () => {
      setLoading(true);

      const feedUrl =
        feedType === "vidhit"
          ? "https://www.thehindu.com/news/national/feeder/default.rss" // National legal/general news with consistent images
          : "https://www.thehindubusinessline.com/news/real-estate/feeder/default.rss"; // Real Estate feed with images

      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
        feedUrl
      )}`;

      const cacheKey = `${CACHE_KEY_PREFIX}${feedType}`;
      const cached = localStorage.getItem(cacheKey);

      if (cached) {
        try {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_DURATION_MS) {
            if (isMounted) {
              setNews(data);
              setLoading(false);
            }
            return;
          }
        } catch (e) {
          // invalid cache, ignore
        }
      }

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch news data");

        const data = await response.json();

        if (data.status === "ok") {
          const formattedNews: NewsArticle[] = data.items.map(
            (item: any, index: number) => {
              // Extract image from description or enclosure
              let imageUrl = item.thumbnail || item.enclosure?.link;
              
              if (!imageUrl) {
                // Try to find any img tag in the description/content
                const content = item.content || item.description || "";
                const imgMatch = content.match(/<img[^>]+src="([^">]+)"/i);
                if (imgMatch) {
                  imageUrl = imgMatch[1];
                }
              }

              // Fallback images based on feed type if no image could be extracted
              if (!imageUrl || imageUrl.includes("blank.gif")) {
                imageUrl =
                  feedType === "vidhit"
                    ? "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"
                    : "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800";
              }

              // Extract text snippet from HTML
              const tempDiv = document.createElement("div");
              tempDiv.innerHTML = item.description || item.content || "";
              let textContent = tempDiv.textContent || tempDiv.innerText || "";
              
              // Clean up the text (removing "..." or extra spaces)
              textContent = textContent.replace(/\s+/g, " ").trim();
              const excerpt =
                textContent.length > 120
                  ? textContent.slice(0, 120) + "..."
                  : textContent;

              return {
                id: item.guid || `news-${feedType}-${index}`,
                title: item.title,
                excerpt: excerpt || "Click to read more details on this topic.",
                image: imageUrl,
                date: new Date(
                  item.pubDate.replace(/-/g, "/")
                ).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }),
                category: feedType === "vidhit" ? "Legal Update" : "RERA Update",
                link: item.link,
              };
            }
          );

          if (isMounted) {
            setNews(formattedNews);
            localStorage.setItem(
              cacheKey,
              JSON.stringify({
                data: formattedNews,
                timestamp: Date.now(),
              })
            );
          }
        } else {
          throw new Error(data.message || "Failed to parse feed");
        }
      } catch (err: any) {
        console.error("Error fetching news:", err);
        if (isMounted) {
          setError(err.message);
          setNews(getFallbackData(feedType));
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchNews();

    return () => {
      isMounted = false;
    };
  }, [feedType]);

  return { news, loading, error };
};
