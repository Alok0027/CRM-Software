import React from 'react';

const ApiReference = () => {
  return (
    <div className="bg-white font-sans">
      <header className="bg-orange-400 text-white py-20 px-10 mt-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-medium mb-4">API Reference</h1>
          <p className="text-lg">
            Complete API documentation for developers. Integrate our CRM platform 
            with your applications using our RESTful API.
          </p>
        </div>
      </header>

      <main className="py-16 px-10">
        <div className="max-w-4xl mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-6">Authentication</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                All API requests require authentication using API keys. Include your API key 
                in the Authorization header of your requests.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <code className="text-sm">
                  Authorization: Bearer YOUR_API_KEY
                </code>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-6">Endpoints</h2>
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-600">GET /api/contacts</h3>
                <p className="text-gray-600 mb-3">Retrieve all contacts</p>
                <div className="bg-gray-100 p-3 rounded">
                  <code className="text-sm">curl -H "Authorization: Bearer YOUR_API_KEY" https://api.yourcrm.com/contacts</code>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">POST /api/contacts</h3>
                <p className="text-gray-600 mb-3">Create a new contact</p>
                <div className="bg-gray-100 p-3 rounded">
                  <code className="text-sm">{`curl -X POST -H "Authorization: Bearer YOUR_API_KEY" -d '{"name":"John Doe","email":"john@example.com"}' https://api.yourcrm.com/contacts`}</code>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-600">GET /api/deals</h3>
                <p className="text-gray-600 mb-3">Retrieve all deals</p>
                <div className="bg-gray-100 p-3 rounded">
                  <code className="text-sm">curl -H "Authorization: Bearer YOUR_API_KEY" https://api.yourcrm.com/deals</code>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-orange-600">PUT /api/deals/:id</h3>
                <p className="text-gray-600 mb-3">Update a deal</p>
                <div className="bg-gray-100 p-3 rounded">
                  <code className="text-sm">{`curl -X PUT -H "Authorization: Bearer YOUR_API_KEY" -d '{"status":"closed"}' https://api.yourcrm.com/deals/123`}</code>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-medium text-gray-800 mb-6">Rate Limits</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                API requests are limited to 1000 requests per hour per API key. 
                Rate limit information is included in response headers.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>X-RateLimit-Limit: 1000</li>
                <li>X-RateLimit-Remaining: 999</li>
                <li>X-RateLimit-Reset: 1640995200</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ApiReference;
