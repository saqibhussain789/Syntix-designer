import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development in 2024",
    description:
      "Web development is evolving rapidly. In this post, we explore the trends and technologies shaping the future of web development.",
    image: "https://via.placeholder.com/600x400", // Replace with actual image URL
    date: "December 1, 2024",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Top 10 JavaScript Frameworks You Should Know",
    description:
      "JavaScript frameworks are the backbone of modern web development. Here are the top 10 frameworks you should learn in 2024.",
    image: "https://via.placeholder.com/600x400", // Replace with actual image URL
    date: "November 25, 2024",
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "Why React is a Must for Front-End Developers",
    description:
      "React has become the most popular front-end library. In this post, we discuss why learning React is essential for every developer.",
    image: "https://via.placeholder.com/600x400", // Replace with actual image URL
    date: "November 10, 2024",
    author: "Richard Roe",
  },
  // Add more blog posts here
];

const BlogPage: React.FC = () => {
  return (
    <div className="blog-page bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-left mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">Latest Blog Posts</h1>
          <p className="text-lg sm:text-xl text-gray-500 mt-4">
            Stay updated with the latest trends, tips, and news in the web development industry.
          </p>
        </div>

        {/* Blog Post List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              {/* Featured Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div>
                {/* Post Title */}
                <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                  <a href={`/blog/${post.id}`} className="hover:text-yellow-400">
                    {post.title}
                  </a>
                </h3>
                {/* Post Date and Author */}
                <p className="text-gray-500 text-sm">
                  {post.date} - <span className="font-semibold">{post.author}</span>
                </p>
                {/* Post Description */}
                <p className="text-gray-600 text-lg mt-4">{post.description}</p>
                {/* Read More Link */}
                <div className="mt-6">
                  <a
                    href={`/blog/${post.id}`}
                    className="text-blue-900 hover:text-yellow-400 font-semibold"
                  >
                    Read More &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination (optional) */}
        <div className="flex justify-center mt-12">
          <button className="bg-blue-900 text-white py-3 px-8 text-lg font-semibold rounded-lg hover:bg-blue-800">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
