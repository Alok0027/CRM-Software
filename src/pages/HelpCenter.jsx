import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/helpArticles';



const HelpCenter = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Returns & Refunds', 'Account & Registration', 'Billing & Payments', 'Frequently Asked Questions'];

  const filteredArticles = activeFilter === 'All' 
    ? articles 
    : articles.filter(article => article.category === activeFilter);

  return (
    <div className="bg-white font-sans mt-12">
      <header className="bg-orange-400 text-white py-20 px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-medium mb-4">Help Center</h1>
          <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo.</p>
          <div className="max-w-2xl mx-auto">
            <div className="flex">
              <input type="text" placeholder="Search..." className="w-full px-4 py-3 text-gray-800 rounded-l-lg focus:outline-none bg-amber-50" />
              <button className="bg-white text-orange-500 font-medium px-8 py-3 rounded-r-lg hover:bg-gray-100">Search</button>
            </div>
          </div>
        </div>
      </header>

      <main className="py-16 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-12 border-b">
            {filters.map(filter => (
              <button 
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 font-light text-lg ${activeFilter === filter ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500'}`}>
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((article, index) => (
              <Link to={`/help-center/${article.slug}`} key={index} className="block">
                <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                  <span className="text-orange-500 bg-orange-100 text-sm font-normal px-3 py-1 rounded-full mb-4 inline-block">{article.category}</span>
                  <h2 className="text-2xl font-medium text-gray-800 mb-2">{article.title}</h2>
                  <p className="text-gray-600">{article.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HelpCenter;
