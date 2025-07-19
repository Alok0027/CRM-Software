import React from 'react';
import './animations.css';

const testimonials = [
  {
    quote: '"Zestful: A Perfect Blend of Form and Function"',
    text: '"Zestful\'s user-friendly dashboard made website management a breeze. The e-commerce integration simplified our online store, and the SEO tools significantly improved our search engine rankings. Zestful is the perfect mix of aesthetics and performance, and it\'s been a game-changer for our business."',
    author: 'David Mitchell',
    title: 'Founder, GourmetGoodies',
    avatar: 'https://i.pravatar.cc/150?img=32'
  },
  {
    quote: '"Zestful - The Support You Can Rely On"',
    text: '"What sets Zestful apart is their incredible 24/7 support. Whenever we had a question or needed assistance, their team was there to help promptly and professionally. Their continuous updates also keep our website up to date with the latest trends. Zestful is an invaluable partner in our online journey."',
    author: 'Emily Lee',
    title: 'Business Owner',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    quote: '"A Game-Changer for E-Commerce"',
    text: '"The seamless integration with our e-commerce platform has been a total game-changer. Our sales have increased, and managing inventory has never been easier. Highly recommend Zestful!"',
    author: 'Sarah Johnson',
    title: 'E-commerce Manager',
    avatar: 'https://i.pravatar.cc/150?img=5'
  },
  {
    quote: '"Incredible Design and Flexibility"',
    text: '"I was blown away by the design quality and the flexibility of the templates. I was able to create a stunning, professional-looking website in just a few hours with no prior experience."',
    author: 'Michael Chen',
    title: 'Freelance Designer',
    avatar: 'https://i.pravatar.cc/150?img=11'
  }
];



const Testimonials = () => {
  return (
    <section className="bg-orange-500 py-16 sm:py-24 px-6 sm:px-10 font-sans text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-4xl sm:text-5xl font-medium mb-4">200+ Happy Customers</h2>
          <p className="text-base sm:text-lg max-w-5xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>

        <div className="w-full overflow-hidden">
          <div className="flex animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="bg-orange-400 bg-opacity-75 p-6 sm:p-8 rounded-lg shadow-lg mx-4 flex-shrink-0 w-[90vw] max-w-sm sm:max-w-md md:max-w-lg">
                <h3 className="text-2xl font-medium mb-4">{testimonial.quote}</h3>
                <p className="text-white text-opacity-90 mb-6 min-h-[10rem] sm:min-h-[8rem]">{testimonial.text}</p>
                <div className="flex items-center mt-8">
                  <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-4 border-2 border-white" />
                  <div>
                    <p className="font-medium text-lg">{testimonial.author}</p>
                    <p className="text-white text-opacity-80">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
