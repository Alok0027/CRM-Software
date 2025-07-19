import React from 'react';
import { Search, BookOpen, User, Settings, CreditCard, LifeBuoy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ icon, title, description, link }) => (
  <Link to={link} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-orange-100 text-orange-600 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-medium text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <div className="mt-4 inline-flex items-center font-normal text-orange-600 hover:text-orange-800">
      Learn More <ArrowRight className="ml-1 h-4 w-4" />
    </div>
  </Link>
);

const HelpCenter = () => {
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);
  const [searched, setSearched] = React.useState(false);

  const mockArticles = [
    {
      id: 1,
      title: 'How to Import Contacts from a CSV File',
      description: 'A step-by-step guide on formatting your CSV file and importing your contacts into the CRM. This article covers common issues and best practices.',
      link: '/help/article/import-contacts-csv'
    },
    {
      id: 2,
      title: 'Connecting Your Google Contacts',
      description: 'Learn how to sync your Google Contacts automatically to keep your contact list up-to-date.',
      link: '/help/article/import-google-contacts'
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);
    if (query.toLowerCase().includes('import contacts')) {
      setResults(mockArticles);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="bg-gray-50 font-sans">

      <div className="bg-white text-black">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-normal leading-tight">How can we help you?</h1>
          <p className="mt-4 text-lg md:text-xl text-black max-w-2xl mx-auto">Search our knowledge base for articles, guides, and answers.</p>
          <div className="mt-8 max-w-2xl mx-auto">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input 
                type="search"
                placeholder="Search for answers... (e.g., 'how to import contacts')"
                className="w-full p-4 pl-12 rounded-full text-gray-800 shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300 transition-shadow"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-600 text-white px-6 py-2 rounded-full font-normal hover:bg-orange-700 transition-colors">Search</button>
            </form>
          </div>
        </div>
      </div>



      {searched && (
        <div className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-medium text-gray-800 mb-6">Search Results for "{query}"</h2>
            {results.length > 0 ? (
              <div className="space-y-6">
                {results.map((result) => (
                  <Link to={result.link} key={result.id} className="block p-6 border rounded-lg hover:bg-gray-50 transition-colors">
                    <h3 className="text-xl font-normal text-orange-600">{result.title}</h3>
                    <p className="mt-2 text-gray-600">{result.description}</p>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 border-2 border-dashed rounded-lg">
                <p className="text-gray-600 text-lg">No results found.</p>
                <p className="text-gray-500 mt-2">Try searching for another keyword or browse our categories below.</p>
              </div>
            )}
          </div>
        </div>
      )}


      <div className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900">Browse by Category</h2>
            <p className="mt-3 text-lg text-gray-600">Explore our resources to get the most out of our platform.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CategoryCard 
              icon={<BookOpen size={28}/>}
              title="Getting Started"
              description="New here? Find guides on setting up your account, importing data, and your first steps to success."
              link="/support/docs"
            />
            <CategoryCard 
              icon={<User size={28}/>}
              title="Account & Profile"
              description="Manage your profile, notification settings, security options, and personal preferences."
              link="/support/docs"
            />
            <CategoryCard 
              icon={<Settings size={28}/>}
              title="Using The CRM"
              description="Learn how to use our features, from managing contacts and deals to running reports."
              link="/support/docs"
            />
            <CategoryCard 
              icon={<CreditCard size={28}/>}
              title="Billing & Subscriptions"
              description="Everything you need to know about your subscription, invoices, and payment methods."
              link="/support/docs"
            />
            <CategoryCard 
              icon={<LifeBuoy size={28}/>}
              title="Troubleshooting"
              description="Running into an issue? Find solutions to common problems and get back on track quickly."
              link="/support/docs"
            />
            <CategoryCard 
              icon={<ArrowRight size={28}/>}
              title="Integrations"
              description="Connect our CRM with your favorite apps. Find guides for all supported integrations."
              link="/support/docs"
            />
          </div>
        </div>
      </div>


      <div className="bg-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <LifeBuoy className="mx-auto h-16 w-16 text-orange-500 mb-4" />
          <h2 className="text-3xl font-medium text-gray-900">Can't find what you're looking for?</h2>
          <p className="mt-3 text-lg text-gray-600 max-w-xl mx-auto">Our support team is always here to help. Get in touch and we'll get back to you as soon as possible.</p>
          <Link to="/support/contact">
            <button className="mt-8 bg-orange-600 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-105">
              Contact Support
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
