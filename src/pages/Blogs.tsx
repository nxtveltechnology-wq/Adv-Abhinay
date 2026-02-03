import { motion } from "framer-motion";
import { ArrowRight, Search, Tag, Calendar } from "lucide-react";
import blogsData from "../data/blogs.json";
import { useState } from "react";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blogsData.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/95" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h5 className="text-accent font-semibold tracking-[0.2em] uppercase mb-4">
              Insights & Updates
            </h5>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Legal Blog & News
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              Stay informed with the latest legal trends, expert insights, and
              significant court rulings.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search Bar */}
        <div className="mb-12 max-w-xl mx-auto relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search blogs by title or category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none shadow-sm transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-wider rounded-sm shadow-sm flex items-center gap-1">
                      <Tag className="h-3 w-3 text-accent" />
                      {blog.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 font-medium uppercase tracking-wide">
                    <Calendar className="h-3 w-3" />
                    {blog.date}
                  </div>

                  <h3 className="text-xl font-serif font-bold text-primary mb-4 leading-tight group-hover:text-accent transition-colors">
                    {blog.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <button className="text-primary font-bold text-sm tracking-wide uppercase flex items-center gap-2 group/btn hover:text-accent transition-colors">
                      Read Full Article
                      <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No blogs found matching your search.
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-4 text-accent hover:underline font-medium"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
