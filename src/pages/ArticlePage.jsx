import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles, otherArticles } from '../data/helpArticles';

const ArticlePage = () => {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return <div>Article not found</div>;
  }

  const renderContent = (item, index) => {
    switch (item.type) {
      case 'paragraph':
        return <p key={index} className="mb-6 text-gray-700">{item.text}</p>;
      case 'step':
        return (
          <div key={index} className="mb-6">
            <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.text}</p>
          </div>
        );
      case 'tips':
        return (
          <div key={index} className="mt-8">
            <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {item.items.map((tip, i) => <li key={i}>{tip}</li>)}
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white font-sans">
      <header className="bg-orange-400 text-white py-20 px-10 mt-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-medium mb-4">{article.title}</h1>
          <p className="text-lg">{article.subtitle}</p>
        </div>
      </header>

      <main className="py-16 px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-medium text-gray-800 mb-6">{article.content[0]?.text}</h2>
            {article.content.slice(1).map(renderContent)}
          </div>

          <aside className="w-full md:w-1/3">
            <div className="sticky top-24">
              <h3 className="text-2xl font-medium text-gray-800 mb-6">Need additional Help?</h3>
              <div className="space-y-6">
                {otherArticles.map(other => (
                  <Link to={`/help-center/${other.slug}`} key={other.slug} className="block bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-orange-500 bg-orange-100 text-sm font-normal px-3 py-1 rounded-full mb-4 inline-block">{other.category}</span>
                    <h4 className="text-xl font-medium text-gray-800 mb-2">{other.title}</h4>
                    <p className="text-gray-600">{other.description}</p>
                  </Link>
                ))}
              </div>
              <div className="mt-8 text-center">
                  <p className='text-gray-600 mb-4'>Couldn't find what you're looking for? Contact our Support Team!</p>
                  <Link to="/support/contact">
                    <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors">Support</button>
                  </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ArticlePage;
