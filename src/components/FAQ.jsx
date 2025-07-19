import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Accordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-50 rounded-lg">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left text-gray-800 p-6"
      >
        <span className="text-lg font-medium">{question}</span>
        <motion.span
          className="ml-6 flex h-7 items-center text-orange-500"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
          </svg>
        </motion.span>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto'}}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const faqsList = [
    { question: 'What will my Project cost?', answer: 'The cost of your project will depend on the scope of work. We offer a variety of packages to fit your needs.' },
    { question: 'What will my Project cost?', answer: 'The cost of your project will depend on the scope of work. We offer a variety of packages to fit your needs.' },
    { question: 'What will my Project cost?', answer: 'The cost of your project will depend on the scope of work. We offer a variety of packages to fit your needs.' },
    { question: 'What will my Project cost?', answer: 'The cost of your project will depend on the scope of work. We offer a variety of packages to fit your needs.' },
    { question: 'What will my Project cost?', answer: 'The cost of your project will depend on the scope of work. We offer a variety of packages to fit your needs.' },
    { question: 'What will my Project cost?', answer: 'The cost of your project will depend on the scope of work. We offer a variety of packages to fit your needs.' },
];

const FAQ = () => {
  return (
    <section className="bg-white py-20 px-4 font-sans">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-medium text-gray-800 mb-4">Frequently Asked Questions</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {faqsList.map((faq, index) => (
            <Accordion key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
