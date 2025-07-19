import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../assets/blog1.jpeg';
import blog2 from '../assets/blog2.jpeg';
import blog3 from '../assets/blog3.jpeg';

const allPosts = [
  {
    title: 'The Art of Influencer Marketing in the Digital Age',
    category: 'Marketing',
    date: 'November 1, 2023',
    readTime: '12min',
    description: 'Influencer marketing has emerged as a dominant force in the digital age, revolutionizing the way brands connect with their target audience...',
    image: blog1,
    path: '/blog/influencer-marketing',
  },
  {
    title: 'The Art of Debugging: Tips and Techniques for Efficient Code',
    category: 'Development',
    date: 'November 1, 2023',
    readTime: '3min',
    description: 'Debugging is an essential skill for developers to identify and resolve issues in their code. It involves the systematic process of locating and fixing bugs to ensure the smooth functionality of a software application...',
    image: blog2,
    path: '/blog/design-principles', // Placeholder path
  },
  {
    title: 'The Future of Web Development: Trends and Technologies to Watch',
    category: 'Development',
    date: 'November 1, 2023',
    readTime: '4min',
    description: 'Web development is a rapidly evolving field, and staying ahead of the latest trends and technologies is essential to create innovative and user-centric web experiences...',
    image: blog3,
    path: '/blog/design-principles', // Placeholder path
  },
  {
    title: 'The Ultimate Guide to Crafting a Successful Content Marketing',
    category: 'Marketing',
    date: 'November 1, 2023',
    readTime: '7min',
    description: 'In today\'s digital landscape, a well-executed content marketing strategy is paramount for businesses to attract, engage, and retain customers...',
    image: blog1,
    path: '/blog/content-marketing',
  },
  {
    title: 'Designing for Accessibility: Creating Inclusive Digital Experiences',
    category: 'Design',
    date: 'November 1, 2023',
    readTime: '4min',
    description: 'Designing with accessibility in mind is not only ethically responsible but also a legal requirement in many jurisdictions. An inclusive design approach ensures that digital experiences are accessible to all individuals, regardless of their abilities...',
    image: blog2,
    path: '/blog/designing-for-accessibility',
  },
  {
    title: 'Design Principles That Elevate User Experience to New Heights',
    category: 'Design',
    date: 'November 1, 2023',
    readTime: '9min',
    description: 'Effective design principles are the cornerstone of exceptional user experiences. This post explores key principles that can elevate your designs and create more intuitive and engaging digital products...',
    image: blog3,
    path: '/blog/design-principles-elevate-ux',
  },
  // Add more blog posts here
];

const BlogOverviewPage = () => {
  const [filter, setFilter] = useState('All');

  // Separate featured posts from regular posts
  const featuredPosts = [
    allPosts.find(p => p.category === 'Marketing'),
    allPosts.find(p => p.category === 'Design')
  ].filter(Boolean); // Ensure no undefined entries if a category is missing

  const featuredPostTitles = featuredPosts.map(p => p.title);
  const regularPosts = allPosts.filter(p => !featuredPostTitles.includes(p.title));

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredPosts = filter === 'All' ? regularPosts : regularPosts.filter(post => post.category === filter);

  return (
    <div className="bg-white mt-10">
      <header className="bg-orange-500 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-medium text-white">Blog</h1>
          <p className="text-white mt-4 max-w-2xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {featuredPosts.map((post, index) => (
            <Link to={post.path} key={`featured-${index}`} className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ring-2 ring-transparent hover:ring-orange-500 overflow-hidden group">
              <div className="relative">
                <img src={post.image} alt={post.title} className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute bottom-4 left-4 bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-full shadow-lg">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span>{post.date} &middot; {post.readTime}</span>
                </div>
                <h3 className="text-2xl font-medium text-gray-800 mb-3 h-24">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center space-x-4 mb-12">
          {['All', 'Marketing', 'Development', 'Design'].map(category => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                filter === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}>
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span className="font-normal text-orange-500">{post.category}</span>
                  <span>{post.date} &middot; {post.readTime}</span>
                </div>
                <h3 className="text-xl font-normal mb-2 h-16">{post.title}</h3>
                <p className="text-gray-600 mb-4 h-24 overflow-hidden">{post.description}</p>
                <Link to={post.path} className="text-orange-500 font-normal hover:underline">Read More &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogOverviewPage;
