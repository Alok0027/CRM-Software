import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, MessageSquare, HelpCircle, User, Briefcase } from 'lucide-react';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const ContactCard = ({ icon, title, description, buttonText, href }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white border border-gray-200/80 rounded-2xl p-8 text-center flex flex-col items-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
  >
    <div className="h-16 w-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6 ring-8 ring-orange-50">
      {icon}
    </div>
    <h3 className="text-2xl font-medium text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-500 mb-6 flex-grow">{description}</p>
    <a href={href} className="mt-auto inline-flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded-full hover:bg-orange-500 transition-all duration-300 transform hover:scale-105 shadow-md">
      {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
    </a>
  </motion.div>
);

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-orange-200/80 via-orange-200/80 to-orange-200/80 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 md:py-28">
        {/* Animated Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <h1 className="text-3xl md:text-6xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-orange-600 to-orange-600">
            Let's Connect
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">Have a question, a project idea, or just want to say hello? We'd love to hear from you.</p>
        </motion.div>

        {/* Interactive Contact Channels */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 mb-24"
        >
          <ContactCard 
            icon={<MessageSquare size={28}/>} 
            title="Chat with Sales"
            description="Discuss your needs with our sales team to find the perfect solution."
            buttonText="Start a Chat"
            href="#"
          />
          <ContactCard 
            icon={<HelpCircle size={28}/>} 
            title="Get Support"
            description="Get help with technical issues or questions about our platform."
            buttonText="Visit Help Center"
            href="#"
          />
          <ContactCard 
            icon={<MapPin size={28}/>} 
            title="Visit Our Office"
            description="We're located in the heart of the tech city. Schedule a visit with us."
            buttonText="Get Directions"
            href="#map"
          />
        </motion.div>

        {/* Form and Map Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Light Theme Form */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            className="bg-white border border-gray-200/80 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <h2 className="text-3xl font-medium text-gray-900 mb-8">Send Us a Message</h2>
            <form action="#" method="POST" className="space-y-6">
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input type="text" placeholder="Your Name" className="w-full pl-12 pr-4 py-3 bg-gray-100 border-2 border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input type="email" placeholder="Your Email" required className="w-full pl-12 pr-4 py-3 bg-gray-100 border-2 border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all" />
              </div>
              <div className="relative">
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select className="w-full pl-12 pr-4 py-3 bg-gray-100 border-2 border-gray-100 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all">
                  <option>Regarding</option>
                  <option>Partnership</option>
                  <option>Careers</option>
                </select>
              </div>
              <div className="relative">
                <textarea placeholder="Your Message..." rows="5" className="w-full pl-12 pr-4 py-3 bg-gray-100 border-2 border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"></textarea>
              </div>
              <button type="submit" className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-orange-600 to-orange-700 py-4 text-white font-medium shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                <span className="absolute -left-full top-0 h-full w-1/2 -skew-x-12 transform bg-white/20 transition-all duration-500 group-hover:left-full"></span>
                <span className="relative">Submit</span>
              </button>
            </form>
          </motion.div>

          {/* Light Themed Map */}
          <motion.div 
            id="map"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
            className="h-[550px] lg:h-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.621241581161!2d77.0877779150781!3d28.430872682500003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d22633a8f5c33%3A0x3f0d5a3d1a1e4b1!2sCyber%20Hub!5e0!3m2!1sen!2sin!4v1673887433321!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
