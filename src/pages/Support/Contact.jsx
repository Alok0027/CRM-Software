import React from 'react';
import { MessageSquare, HelpCircle } from 'lucide-react';
import aboutus1 from '../../assets/aboutus1.jpg';
import FAQ from '../../components/FAQ';

const Contact = () => {
  return (
    <div className="bg-white font-sans">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-left max-w-2xl mb-12">
            <h2 className="text-5xl font-medium text-gray-800 mb-4">Drop a Message</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src={aboutus1}
                alt="Team discussion" 
                className="rounded-lg shadow-xl w-full h-[90%] object-cover"
              />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-2xl border border-gray-100">
              <form>
                <div className="mb-6">
                  <label htmlFor="fullName" className="block text-gray-700 text-sm font-medium mb-2"></label>
                  <input type="text" id="fullName" placeholder="Full Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2"></label>
                  <input type="email" id="email" placeholder="Email" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-medium mb-2"></label>
                  <input type="tel" id="phone" placeholder="Phone Number" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2"></label>
                  <textarea id="message" rows="5" placeholder="Your message..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-orange-500 text-white font-normal py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors shadow-md">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-500 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-5xl font-medium mb-4">Reach out directly</h2>
          <p className="max-w-3xl mx-auto mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orange-400/50 p-8 rounded-lg text-left">
              <MessageSquare className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-medium mb-3">Help & Support</h3>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
              <a href="mailto:support@flowuniversity.com" className="font-normal hover:underline">support@flowuniversity.com</a>
              <p className="mt-2">+1 23 45 678</p>
            </div>
            <div className="bg-orange-400/50 p-8 rounded-lg text-left">
              <HelpCircle className="w-10 h-10 mb-4" />
              <h3 className="text-2xl font-medium mb-3">FAQ & Help Center</h3>
              <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
              <a href="#" className="font-normal hover:underline">Visit the Help Center</a>
            </div>
          </div>
        </div>
      </section>
      <FAQ />

      <section className="bg-orange-500 py-20 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl p-12">
          <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-800">Let's get started today!</h2>
              <h3 className="text-3xl md:text-4xl font-medium text-gray-800 mb-4">Create your Account Now.</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              </p>
            </div>
            <div className="w-full md:w-auto flex justify-center md:justify-end mt-6 md:mt-0">
              <a href="#" className="bg-orange-500 text-white font-normal py-4 px-8 rounded-lg hover:bg-orange-600 transition-all shadow-md text-center whitespace-nowrap transform hover:scale-95">
                Get Started - Create your Account for Free!
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
