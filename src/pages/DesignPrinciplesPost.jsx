import React from 'react';
import Navbar from '../components/Navbar';
import blog1 from '../assets/blog1.jpeg';
import blog2 from '../assets/blog2.jpeg';
import blog3 from '../assets/blog3.jpeg';

const DesignPrinciplesPost = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-500">Blog &gt; Design</p>
          <h1 className="text-4xl font-medium my-4">Design Principles That Elevate User Experience to New Heights</h1>
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
          <img src={blog3} alt="Design Principles" className="w-full h-auto rounded-lg mb-8" />
          <div className="prose max-w-none">
            <h2 className="text-2xl font-medium">Introduction</h2>
            <p>Design plays a pivotal role in shaping user experiences, and adhering to fundamental design principles can set your work apart from the rest. Here are key design principles to elevate your user experience (UX) to new heights.</p>
            
            <h2 className="text-2xl font-medium">Simplicity and Minimalism</h2>
            <p>Less is often more when it comes to design. Embrace simplicity and minimalism to declutter your interfaces, making it easier for users to navigate and focus on essential elements.</p>

            <h2 className="text-2xl font-medium">Consistency</h2>
            <p>Consistency is vital in establishing brand identity and ensuring seamless navigation. Use consistent color schemes, typography, and layout throughout your designs.</p>

            <h2 className="text-2xl font-medium">Visual Hierarchy</h2>
            <p>Guide users through your interface by creating a clear visual hierarchy. Use size, color, and contrast to draw attention to important elements and establish a natural flow.</p>

            <h2 className="text-2xl font-medium">Whitespace and Breathing Room</h2>
            <p>Allow designs to breathe by incorporating ample whitespace. Whitespace gives users a sense of spaciousness and helps them absorb information more comfortably.</p>

            <h2 className="text-2xl font-medium">Accessibility</h2>
            <p>Consider users with diverse abilities. Ensure your designs are accessible, with proper color contrast, readable typography, and keyboard navigation support.</p>

            <h2 className="text-2xl font-medium">User-Centric Approach</h2>
            <p>Always prioritize the needs of your users. Conduct user research, gather feedback, and iterate your designs to meet user expectations and preferences.</p>

            <h2 className="text-2xl font-medium">Emotional Design</h2>
            <p>Engage users emotionally by incorporating visual elements that evoke specific feelings. Emotional design can create a lasting connection with your audience.</p>

            <h2 className="text-2xl font-medium">Usability Testing</h2>
            <p>Test your designs with real users to identify pain points and areas for improvement. Usability testing provides invaluable insights for refining your designs.</p>

            <h2 className="text-2xl font-medium">Responsive Design</h2>
            <p>In the mobile-first era, responsive design is essential. Ensure your designs adapt seamlessly across various devices, providing a consistent experience for all users.</p>

            <h2 className="text-2xl font-medium">Conclusion</h2>
            <p>User experience is at the heart of successful design. By implementing these design principles, you can create interfaces that not only look aesthetically pleasing but also deliver a seamless and delightful experience to your users.</p>
          </div>
        </div>

        <div className="my-16">
          <h2 className="text-3xl font-medium text-center mb-8">Read more Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src={blog1} alt="Content Marketing" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                <span>Marketing</span>
                <span>November 1, 2023 &bull; 7min</span>
              </div>
              <h3 className="text-xl font-medium mb-2">The Ultimate Guide to Crafting a Successful Content Marketing Strategy</h3>
              <p className="text-gray-600">In today's digital landscape, a well-executed content marketing strategy is paramount for businesses to attract, engage, and retain customers...</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src={blog2} alt="Accessibility" className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                <span>Design</span>
                <span>November 1, 2023 &bull; 4min</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Designing for Accessibility: Creating Inclusive Digital Experiences</h3>
              <p className="text-gray-600">Designing with accessibility in mind is not only ethically responsible but also a legal requirement in many jurisdictions. An inclusive design approach ensures that digital experiences are accessible to all individuals, regardless of their abilities...</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src={blog3} alt="Influencer Marketing" className="w-full h-48 object-cover rounded-t-lg mb-4" />
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

export default DesignPrinciplesPost;
