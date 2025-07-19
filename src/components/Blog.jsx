import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../assets/blog1.jpeg';
import blog2 from '../assets/blog2.jpeg';
import blog3 from '../assets/blog3.jpeg';

const blogPosts = [
  {
    image: blog1,
    category: 'Marketing',
    date: 'July 16, 2024',
    readTime: '7 min read',
    title: 'The Ultimate Guide to Crafting a Successful Content Marketing Strategy',
    excerpt: 'In today\'s digital landscape, a well-executed content marketing strategy is paramount for businesses to attract, engage, and retain customers...',
    path: '/blog',
  },
  {
    image: blog2,
    category: 'Marketing',
    date: 'July 16, 2024',
    readTime: '5 min read',
    title: 'The Power of Influencer Marketing in the Digital Age',
    excerpt: 'Influencer marketing has emerged as a dominant force in the digital age, revolutionizing the way brands connect with their target audience...',
    path: '/blog/influencer-marketing',
  },
  {
    image: blog3,
    category: 'Design',
    date: 'July 16, 2024',
    readTime: '9 min read',
    title: 'Design Principles That Elevate User Experience to New Heights',
    excerpt: 'Design plays a pivotal role in shaping user experiences, and adhering to fundamental design principles can set your work apart...',
    path: '/blog/design-principles',
  },
];

const Blog = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start mb-12 sm:mb-16">
          <div className="max-w-3xl mb-6 sm:mb-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-800 mb-4">Stay Informed with Our Blog</h2>
            <p className="text-gray-600">
              Discover valuable insights, tips, and industry news in our blog. We keep you up-to-date with the latest trends, best practices, and innovative ideas to help you succeed online. Dive into our blog and stay informed as you enhance your digital presence.
            </p>
          </div>
          <Link to="/blog-overview" className="bg-orange-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300 whitespace-nowrap">
            Read More
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <Link to={post.path} key={index} className="bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ring-2 ring-transparent hover:ring-orange-500 p-6 block">
              <div className="relative mb-4">
                <img src={post.image} alt={post.title} className="w-full h-56 object-cover rounded-lg" />
                <span className="absolute bottom-4 left-4 bg-white text-gray-800 text-sm font-medium px-3 py-1 rounded-full">{post.category}</span>
              </div>
              <div>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-3 min-h-[5rem]">{post.title}</h3>
                <p className="text-gray-600 text-sm min-h-[7rem]">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

