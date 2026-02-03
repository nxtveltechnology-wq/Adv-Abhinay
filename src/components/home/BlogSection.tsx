import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "../SectionWrapper";
import blogsData from "../../data/blogs.json";

const BlogSection = () => {
  // Taking the first 3 blogs for the home page sections
  const recentBlogs = blogsData.slice(0, 3);

  return (
    <SectionWrapper background="light">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
          News, Tips and Legal Updates
        </h2>
        <div className="w-24 h-1 bg-accent mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recentBlogs.map((blog) => (
          <div
            key={blog.id}
            className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
          >
            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
              <div className="absolute inset-0 " />{" "}
              {/* Fallback loading state */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"; // Fallback image
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-md">
                  {blog.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="text-xs text-gray-500 font-medium mb-3 flex items-center gap-2">
                <span>{blog.date}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className="text-accent">{blog.category}</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-primary mb-3 line-clamp-2 leading-tight group-hover:text-accent transition-colors">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                {blog.excerpt}
              </p>

              <div className="mt-auto">
                <button className="flex items-center text-primary font-bold text-sm tracking-wide uppercase group/btn">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform text-accent" />
                </button>
              </div>
            </div>

            {/* Bottom Border Accent */}
            <div className="h-1 w-0 group-hover:w-full bg-accent transition-all duration-500 ease-out" />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors border-b-2 border-accent pb-1"
        >
          Explore All Blogs <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default BlogSection;
