import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import blog1 from '../assets/blog1.jpeg';
import blog2 from '../assets/blog2.jpeg';
import blog3 from '../assets/blog3.jpeg';

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-500">Blog &gt; Marketing</p>
          <h1 className="text-4xl font-medium my-4">The Ultimate Guide to Crafting a Successful Content Marketing Strategy</h1>
          <div className="flex items-center mb-8">
            <img src="https://via.placeholder.com/50" alt="Author" className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="font-medium">Emily Thompson</p>
              <p className="text-gray-500">Web Developer</p>
            </div>
            <div className="flex ml-auto space-x-2">
              <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-500 hover:text-gray-700"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <img src={blog1} alt="Content Marketing Strategy" className="w-full h-auto rounded-lg mb-8" />
          <div className="prose max-w-none">
            <h2 className="text-2xl font-medium">Introduction</h2>
            <p>In today's digital landscape, a well-executed content marketing strategy is paramount for businesses to attract, engage, and retain customers. It goes beyond creating random blog posts or social media updates. Instead, a successful content marketing strategy requires careful planning, research, and a deep understanding of your target audience.</p>
            
            <h2 className="text-2xl font-medium">Defining Your Target Audience</h2>
            <p>Before embarking on your content journey, identify your ideal customer personas. Conduct surveys, analyze data, and delve into customer feedback to paint a clear picture of who you're trying to reach.</p>

            <h2 className="text-2xl font-medium">Keyword Research and SEO Optimization</h2>
            <p>The backbone of any content strategy is solid keyword research. Use tools like Google Keyword Planner to identify relevant keywords and incorporate them naturally into your content. Optimize your content for SEO to improve its visibility in search engine results.</p>

            <h2 className="text-2xl font-medium">Diversify Your Content Types</h2>
            <p>From blog posts and videos to infographics and podcasts, explore various content formats to cater to different preferences. Engaging multimedia content keeps your audience interested and encourages sharing.</p>

            <h2 className="text-2xl font-medium">Create a Content Calendar</h2>
            <p>Organize your content creation efforts with a well-structured content calendar. Plan topics, assign responsibilities, and set publication dates to maintain consistency.</p>

            <h2 className="text-2xl font-medium">Quality Over Quantity</h2>
            <p>While frequency matters, never compromise on quality. Provide valuable insights, practical tips, and thought-provoking content that resonates with your audience.</p>

            <h2 className="text-2xl font-medium">Promote on Social Media</h2>
            <p>Social media platforms are powerful amplifiers for your content. Share your posts on relevant channels, engage with your audience, and participate in discussions.</p>

            <h2 className="text-2xl font-medium">Measure and Analyze</h2>
            <p>Use analytics tools to monitor the performance of your content. Track metrics such as traffic, conversion rates, and engagement levels. This data will help you refine your strategy over time.</p>

            <h2 className="text-2xl font-medium">Conclusion</h2>
            <p>Crafting a content marketing strategy is an ongoing process. Stay updated with industry trends, listen to your audience, and adapt your approach as needed. By implementing these strategies, you can build a content marketing powerhouse that drives results and establishes your brand as an authority in your niche.</p>
          </div>
        </div>

        <div className="my-16">
          <h2 className="text-3xl font-medium text-center mb-8">Read more Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src={blog2} alt="Accessibility" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                <span>Design</span>
                <span>November 1, 2023 &bull; 4min</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Designing for Accessibility: Creating Inclusive Digital Experiences</h3>
              <p className="text-gray-600">Designing with accessibility in mind is not only ethically responsible but also a legal requirement in many jurisdictions. An inclusive design approach ensures that digital experiences are accessible to all individuals, regardless of their abilities...</p>
            </div>
            <Link to="/blog/design-principles" className="bg-white rounded-lg shadow-md p-6 block">
              <img src={blog3} alt="User Experience" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                <span>Design</span>
                <span>November 1, 2023 &bull; 9min</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Design Principles That Elevate User Experience to New Heights</h3>
              <p className="text-gray-600">Design plays a pivotal role in shaping user experiences, and adhering to fundamental design principles can set your work apart from the rest...</p>
            </Link>
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src={blog1} alt="Influencer Marketing" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                <span>Marketing</span>
                <span>November 1, 2023 &bull; 12min</span>
              </div>
              <h3 className="text-xl font-medium mb-2">The Power of Influencer Marketing in the Digital Age</h3>
              <p className="text-gray-600">Influencer marketing has emerged as a dominant force in the digital age, revolutionizing the way brands connect with their target audience...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
