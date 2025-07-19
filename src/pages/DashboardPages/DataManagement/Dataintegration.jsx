import React, { useState } from 'react';
import { FiPlus, FiRefreshCw, FiSettings, FiCheck, FiX, FiAlertTriangle, FiExternalLink, FiToggleLeft, FiToggleRight, FiClock, FiDatabase, FiMail, FiShoppingCart, FiFileText, FiGlobe } from 'react-icons/fi';

const DataIntegration = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const integrations = [
    {
      id: 1,
      name: 'Gmail',
      type: 'Email',
      status: 'synced',
      syncType: 'Two-way',
      lastSync: '2 minutes ago',
      recordsCount: 1247,
      icon: '📧',
      color: 'bg-red-100 text-red-600',
      category: 'marketing'
    },
    {
      id: 2,
      name: 'Google Sheets',
      type: 'Spreadsheet',
      status: 'synced',
      syncType: 'One-way',
      lastSync: '15 minutes ago',
      recordsCount: 523,
      icon: '📊',
      color: 'bg-green-100 text-green-600',
      category: 'databases'
    },
    {
      id: 3,
      name: 'HubSpot',
      type: 'CRM',
      status: 'needs_auth',
      syncType: 'Two-way',
      lastSync: '2 days ago',
      recordsCount: 0,
      icon: '🔶',
      color: 'bg-orange-100 text-orange-600',
      category: 'sales'
    },
    {
      id: 4,
      name: 'Shopify',
      type: 'E-commerce',
      status: 'disconnected',
      syncType: 'One-way',
      lastSync: 'Never',
      recordsCount: 0,
      icon: '🛍️',
      color: 'bg-purple-100 text-purple-600',
      category: 'sales'
    },
    {
      id: 5,
      name: 'MySQL Database',
      type: 'Database',
      status: 'synced',
      syncType: 'Two-way',
      lastSync: '1 hour ago',
      recordsCount: 2341,
      icon: '🗄️',
      color: 'bg-blue-100 text-blue-600',
      category: 'databases'
    },
    {
      id: 6,
      name: 'Webhook API',
      type: 'API',
      status: 'error',
      syncType: 'One-way',
      lastSync: '3 hours ago',
      recordsCount: 89,
      icon: '🔗',
      color: 'bg-gray-100 text-gray-600',
      category: 'apis'
    }
  ];

  const availableIntegrations = [
    { name: 'Notion', icon: '📝', category: 'databases', description: 'Sync your Notion databases' },
    { name: 'Slack', icon: '💬', category: 'marketing', description: 'Connect team communications' },
    { name: 'Stripe', icon: '💳', category: 'sales', description: 'Import payment and customer data' },
    { name: 'Mailchimp', icon: '🐵', category: 'marketing', description: 'Sync email marketing lists' },
    { name: 'Salesforce', icon: '☁️', category: 'sales', description: 'Connect your Salesforce CRM' },
    { name: 'PostgreSQL', icon: '🐘', category: 'databases', description: 'Connect PostgreSQL database' },
    { name: 'REST API', icon: '🌐', category: 'apis', description: 'Custom REST API integration' },
    { name: 'Zapier', icon: '⚡', category: 'apis', description: 'Connect 1000+ apps via Zapier' }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'synced':
        return <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center gap-1"><FiCheck className="w-3 h-3" /> Synced</span>;
      case 'disconnected':
        return <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium flex items-center gap-1"><FiX className="w-3 h-3" /> Disconnected</span>;
      case 'needs_auth':
        return <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium flex items-center gap-1"><FiAlertTriangle className="w-3 h-3" /> Needs Auth</span>;
      case 'error':
        return <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium flex items-center gap-1"><FiAlertTriangle className="w-3 h-3" /> Error</span>;
      default:
        return <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Unknown</span>;
    }
  };

  const IntegrationCard = ({ integration }) => (
    <div className="bg-white rounded-lg shadow-md border border-orange-100 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-lg ${integration.color} flex items-center justify-center text-2xl`}>
            {integration.icon}
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{integration.name}</h3>
            <p className="text-sm text-gray-600">{integration.type}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {getStatusBadge(integration.status)}
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <FiSettings className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-gray-500 mb-1">Sync Type</p>
          <p className="text-sm font-medium text-gray-800">{integration.syncType}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Records</p>
          <p className="text-sm font-medium text-gray-800">{integration.recordsCount.toLocaleString()}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FiClock className="w-4 h-4" />
          <span>Last sync: {integration.lastSync}</span>
        </div>
        <div className="flex gap-2">
          {integration.status === 'synced' && (
            <button className="p-2 hover:bg-orange-50 rounded-lg text-orange-600" title="Manual Sync">
              <FiRefreshCw className="w-4 h-4" />
            </button>
          )}
          <button className="p-2 hover:bg-blue-50 rounded-lg text-blue-600" title="View Details">
            <FiExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  const AddIntegrationModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Add New Integration</h2>
              <p className="text-gray-600">Connect your favorite tools and databases</p>
            </div>
            <button onClick={() => setShowAddModal(false)} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
        </div>
        
        <div className="p-6">
          {/* Category Filters */}
          <div className="mb-6">
            <div className="flex gap-2 mb-4">
              {['all', 'marketing', 'sales', 'databases', 'apis'].map(category => (
                <button 
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Available Integrations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableIntegrations
              .filter(integration => selectedCategory === 'all' || integration.category === selectedCategory)
              .map((integration, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors hover:shadow-md cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                      {integration.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{integration.name}</h3>
                      <p className="text-xs text-gray-500 capitalize">{integration.category}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{integration.description}</p>
                  <button className="w-full px-3 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 text-sm font-medium">
                    Connect
                  </button>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );

  const filteredIntegrations = integrations.filter(integration => 
    selectedCategory === 'all' || integration.category === selectedCategory
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Data Integration</h1>
            <p className="text-gray-600">Connect and sync data from your favorite tools, CRMs, apps, and databases</p>
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md transition-colors"
          >
            <FiPlus className="w-5 h-5" />
            Add Integration
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md border border-orange-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Connected Sources</p>
                <p className="text-2xl font-bold text-orange-600">{integrations.filter(i => i.status === 'synced').length}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <FiDatabase className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md border border-orange-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Records</p>
                <p className="text-2xl font-bold text-orange-600">{integrations.reduce((sum, i) => sum + i.recordsCount, 0).toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FiFileText className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md border border-orange-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Active Syncs</p>
                <p className="text-2xl font-bold text-orange-600">{integrations.filter(i => i.status === 'synced').length}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <FiRefreshCw className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md border border-orange-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Needs Attention</p>
                <p className="text-2xl font-bold text-orange-600">{integrations.filter(i => i.status === 'needs_auth' || i.status === 'error').length}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <FiAlertTriangle className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex gap-2">
            {['all', 'marketing', 'sales', 'databases', 'apis'].map(category => (
              <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIntegrations.map(integration => (
            <IntegrationCard key={integration.id} integration={integration} />
          ))}
        </div>

        {/* Empty State */}
        {filteredIntegrations.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiDatabase className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">No integrations found</h3>
            <p className="text-gray-600 mb-4">Try selecting a different category or add a new integration.</p>
            <button 
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
            >
              Add Integration
            </button>
          </div>
        )}
      </div>

      {/* Add Integration Modal */}
      {showAddModal && <AddIntegrationModal />}
    </div>
  );
};

export default DataIntegration;