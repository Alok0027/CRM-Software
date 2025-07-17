import React, { useState, useEffect } from 'react';

const LeadForm = ({ onSubmit, lead, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    source: '',
    status: 'New',
  });

  useEffect(() => {
    if (lead) {
      setFormData(lead);
    } else {
      setFormData({ name: '', email: '', phone: '', source: '', status: 'New' });
    }
  }, [lead]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm" />
      </div>
      <div>
        <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-1">Lead Source</label>
        <input type="text" name="source" id="source" value={formData.source} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm" />
      </div>
      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
        <select name="status" id="status" value={formData.status} onChange={handleChange} className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm bg-white">
          <option>New</option>
          <option>Contacted</option>
          <option>Qualified</option>
          <option>Failed</option>
        </select>
      </div>
      <div className="flex justify-end gap-4 pt-4">
        <button type="button" onClick={onCancel} className="px-8 py-2.5 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 font-bold transition-all duration-200">Cancel</button>
        <button type="submit" className="px-8 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-lg font-bold transition-all duration-200 shadow-md">{lead ? 'Update Lead' : 'Add Lead'}</button>
      </div>
    </form>
  );
};

export default LeadForm;
