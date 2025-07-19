import React, { useState } from 'react';
import { FiPlus, FiEdit3, FiPlay, FiPause, FiTrash2, FiMail, FiPhone, FiCalendar, FiUsers, FiSettings, FiChevronDown, FiChevronRight, FiClock, FiTarget, FiZap, FiArrowRight, FiArrowDown, FiCopy, FiDownload, FiFilter, FiTrendingUp, FiAlertTriangle, FiEye, FiTag, FiBarChart2, FiActivity, FiInfo } from 'react-icons/fi';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const Automation = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [activeTab, setActiveTab] = useState('workflows');
  const [expandedWorkflow, setExpandedWorkflow] = useState(null);
  const [timeFilter, setTimeFilter] = useState('7days');
  const [sortBy, setSortBy] = useState('newest');
  const [filterCategory, setFilterCategory] = useState('all');

  const workflows = [
    {
      id: 1,
      name: 'Lead Nurturing Sequence',
      status: 'active',
      trigger: 'Form Submission',
      contacts: 1247,
      conversion: '23.4%',
      steps: 5,
      description: 'Automated email sequence for new leads',
      category: 'nurturing',
      tags: ['Email', 'High-Intent Leads'],
      openRate: '68.2%',
      clickRate: '12.4%',
      bounceRate: '2.1%',
      unsubscribeRate: '0.8%',
      completionRate: '89.3%',
      lastActivity: '2 hours ago',
      errors: 0
    },
    {
      id: 2,
      name: 'Customer Onboarding',
      status: 'active',
      trigger: 'Deal Closed Won',
      contacts: 89,
      conversion: '67.8%',
      steps: 8,
      description: 'Welcome series for new customers',
      category: 'retention',
      tags: ['Email', 'SMS', 'New Customers'],
      openRate: '84.5%',
      clickRate: '34.2%',
      bounceRate: '1.2%',
      unsubscribeRate: '0.3%',
      completionRate: '92.1%',
      lastActivity: '1 hour ago',
      errors: 2
    },
    {
      id: 3,
      name: 'Re-engagement Campaign',
      status: 'paused',
      trigger: 'Last Activity > 30 days',
      contacts: 523,
      conversion: '12.1%',
      steps: 3,
      description: 'Win back inactive contacts',
      category: 'retention',
      tags: ['Email', 'Cold Leads'],
      openRate: '24.8%',
      clickRate: '4.2%',
      bounceRate: '8.1%',
      unsubscribeRate: '3.2%',
      completionRate: '76.4%',
      lastActivity: '3 days ago',
      errors: 12
    },
    {
      id: 4,
      name: 'Lead Rotation',
      status: 'active',
      trigger: 'Contact Enrollment',
      contacts: 342,
      conversion: '45.2%',
      steps: 2,
      description: 'Distribute leads among sales team',
      category: 'sales',
      tags: ['Task', 'Lead Assignment'],
      openRate: 'N/A',
      clickRate: 'N/A',
      bounceRate: 'N/A',
      unsubscribeRate: 'N/A',
      completionRate: '98.7%',
      lastActivity: '30 minutes ago',
      errors: 0
    }
  ];

  const templates = [
    { id: 1, name: 'Welcome Email', type: 'email', usage: 89, category: 'Welcome Series', preview: '👋 Welcome to our platform!' },
    { id: 2, name: 'Follow-up Call', type: 'task', usage: 67, category: 'Sales', preview: '📞 Schedule follow-up call' },
    { id: 3, name: 'Demo Booking', type: 'email', usage: 45, category: 'Sales', preview: '🎯 Book your personalized demo' },
    { id: 4, name: 'Proposal Follow-up', type: 'email', usage: 34, category: 'Sales', preview: '📋 Your proposal is ready' },
    { id: 5, name: 'Cart Abandonment', type: 'email', usage: 28, category: 'Cart Abandonment', preview: '🛒 Complete your purchase' },
    { id: 6, name: 'Upsell Offer', type: 'email', usage: 19, category: 'Upsell', preview: '⭐ Upgrade your experience' }
  ];

  const performanceData = [
    { date: 'Jan 1', opens: 1240, clicks: 340, conversions: 89 },
    { date: 'Jan 2', opens: 1180, clicks: 298, conversions: 76 },
    { date: 'Jan 3', opens: 1320, clicks: 387, conversions: 102 },
    { date: 'Jan 4', opens: 1450, clicks: 421, conversions: 118 },
    { date: 'Jan 5', opens: 1380, clicks: 395, conversions: 95 },
    { date: 'Jan 6', opens: 1520, clicks: 456, conversions: 134 },
    { date: 'Jan 7', opens: 1610, clicks: 498, conversions: 147 }
  ];

  const activityFeed = [
    { id: 1, type: 'workflow_created', message: 'Lead Nurturing Sequence created', time: '2 hours ago', user: 'John Doe' },
    { id: 2, type: 'contact_enrolled', message: '45 contacts enrolled in Customer Onboarding', time: '3 hours ago', user: 'System' },
    { id: 3, type: 'email_sent', message: '234 emails sent from Re-engagement Campaign', time: '4 hours ago', user: 'System' },
    { id: 4, type: 'workflow_paused', message: 'Re-engagement Campaign paused', time: '1 day ago', user: 'Jane Smith' },
    { id: 5, type: 'email_failed', message: '12 emails failed in Re-engagement Campaign', time: '1 day ago', user: 'System' }
  ];

  const topWorkflows = workflows.sort((a, b) => parseFloat(b.conversion) - parseFloat(a.conversion)).slice(0, 3);

  const PerformanceChart = () => (
    <div className="bg-white rounded-lg shadow-md border border-orange-100 p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-normal text-gray-800">Performance Over Time</h2>
          <p className="text-gray-600">Email opens, clicks, and conversions</p>
        </div>
        <div className="flex gap-2">
          <select 
            value={timeFilter} 
            onChange={(e) => setTimeFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="7days">Last 7 days</option>
            <option value="30days">This Month</option>
            <option value="custom">Custom Range</option>
          </select>
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="date" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip />
            <Line type="monotone" dataKey="opens" stroke="#FFB84C" strokeWidth={2} dot={{ fill: '#FFB84C', r: 4 }} />
            <Line type="monotone" dataKey="clicks" stroke="#FF8C42" strokeWidth={2} dot={{ fill: '#FF8C42', r: 4 }} />
            <Line type="monotone" dataKey="conversions" stroke="#FF7F3F" strokeWidth={2} dot={{ fill: '#FF7F3F', r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FFB84C]"></div>
          <span className="text-sm text-gray-600">Opens</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF8C42]"></div>
          <span className="text-sm text-gray-600">Clicks</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF7F3F]"></div>
          <span className="text-sm text-gray-600">Conversions</span>
        </div>
      </div>
    </div>
  );

  const TopWorkflowsPanel = () => (
    <div className="bg-white rounded-lg shadow-md border border-orange-100 p-6">
      <h3 className="text-lg font-normal text-gray-800 mb-4 flex items-center gap-2">
        <FiTrendingUp className="text-orange-600" />
        Top Performing Workflows
      </h3>
      <div className="space-y-4">
        {topWorkflows.map((workflow, index) => (
          <div key={workflow.id} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-medium ${
                index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : 'bg-orange-600'
              }`}>
                {index + 1}
              </div>
              <div>
                <p className="font-medium text-gray-800">{workflow.name}</p>
                <p className="text-sm text-gray-600">{workflow.contacts} contacts</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-normal text-orange-600">{workflow.conversion}</p>
              <p className="text-xs text-gray-500">conversion</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ActivityFeed = () => (
    <div className="bg-white rounded-lg shadow-md border border-orange-100 p-6">
      <h3 className="text-lg font-normal text-gray-800 mb-4 flex items-center gap-2">
        <FiActivity className="text-orange-600" />
        Recent Activity
      </h3>
      <div className="space-y-3 max-h-80 overflow-y-auto">
        {activityFeed.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              activity.type === 'workflow_created' ? 'bg-green-100 text-green-600' :
              activity.type === 'contact_enrolled' ? 'bg-blue-100 text-blue-600' :
              activity.type === 'email_sent' ? 'bg-orange-100 text-orange-600' :
              activity.type === 'workflow_paused' ? 'bg-yellow-100 text-yellow-600' :
              'bg-red-100 text-red-600'
            }`}>
              {activity.type === 'workflow_created' && <FiPlus className="w-4 h-4" />}
              {activity.type === 'contact_enrolled' && <FiUsers className="w-4 h-4" />}
              {activity.type === 'email_sent' && <FiMail className="w-4 h-4" />}
              {activity.type === 'workflow_paused' && <FiPause className="w-4 h-4" />}
              {activity.type === 'email_failed' && <FiAlertTriangle className="w-4 h-4" />}
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-800">{activity.message}</p>
              <p className="text-xs text-gray-500">{activity.time} • {activity.user}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const SmartSuggestions = () => (
    <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200 p-6 mb-8">
      <h3 className="text-lg font-normal text-gray-800 mb-3 flex items-center gap-2">
        💡 Smart Suggestions
      </h3>
      <div className="space-y-3">
        <div className="bg-white rounded-lg p-4 border border-orange-100">
          <p className="text-sm text-gray-700">
            <strong>Re-engagement Campaign</strong> has a 12.1% conversion rate. Try adding a discount in step 2 to increase effectiveness.
          </p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-orange-100">
          <p className="text-sm text-gray-700">
            <strong>Lead Nurturing Sequence</strong> shows high engagement. Consider creating a similar workflow for different segments.
          </p>
        </div>
      </div>
    </div>
  );

  const WorkflowCard = ({ workflow }) => (
    <div className="bg-white rounded-lg shadow-md border border-orange-100 p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-normal text-gray-800 mb-1">{workflow.name}</h3>
          <p className="text-sm text-gray-600">{workflow.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            workflow.status === 'active' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-yellow-100 text-yellow-700'
          }`}>
            {workflow.status === 'active' ? 'Active' : 'Paused'}
          </span>
          {workflow.errors > 0 && (
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 flex items-center gap-1">
              <FiAlertTriangle className="w-3 h-3" />
              {workflow.errors} errors
            </span>
          )}
          <div className="flex gap-1">
            {workflow.tags.map((tag, index) => (
              <span key={index} className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-600">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div className="text-center">
          <div className="text-lg font-normal text-orange-600">{workflow.contacts}</div>
          <div className="text-xs text-gray-500">Contacts</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-normal text-orange-600">{workflow.conversion}</div>
          <div className="text-xs text-gray-500">Conversion</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-normal text-orange-600">{workflow.steps}</div>
          <div className="text-xs text-gray-500">Steps</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-normal text-orange-600">{workflow.completionRate}</div>
          <div className="text-xs text-gray-500">Completion</div>
        </div>
      </div>
      
      {/* Expandable Performance Metrics */}
      {expandedWorkflow === workflow.id && (
        <div className="mb-4 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-medium text-gray-800 mb-3">Performance Breakdown</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
            <div className="text-center">
              <div className="font-normal text-blue-600">{workflow.openRate}</div>
              <div className="text-xs text-gray-500">Open Rate</div>
            </div>
            <div className="text-center">
              <div className="font-normal text-green-600">{workflow.clickRate}</div>
              <div className="text-xs text-gray-500">Click Rate</div>
            </div>
            <div className="text-center">
              <div className="font-normal text-red-600">{workflow.bounceRate}</div>
              <div className="text-xs text-gray-500">Bounce Rate</div>
            </div>
            <div className="text-center">
              <div className="font-normal text-yellow-600">{workflow.unsubscribeRate}</div>
              <div className="text-xs text-gray-500">Unsubscribe</div>
            </div>
            <div className="text-center">
              <div className="font-normal text-purple-600">{workflow.lastActivity}</div>
              <div className="text-xs text-gray-500">Last Activity</div>
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">Segment: {workflow.tags.join(', ')}</span>
          </div>
        </div>
      )}
      
      <div className="flex justify-between items-center pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FiZap className="w-4 h-4" />
          <span>Trigger: {workflow.trigger}</span>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setExpandedWorkflow(expandedWorkflow === workflow.id ? null : workflow.id)}
            className="p-2 hover:bg-blue-50 rounded text-blue-600 flex items-center gap-1"
            title="View Performance"
          >
            <FiBarChart2 className="w-4 h-4" />
            <span className="text-xs">Details</span>
          </button>
          <button className="p-2 hover:bg-green-50 rounded text-green-600" title="Duplicate Workflow">
            <FiCopy className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-purple-50 rounded text-purple-600" title="Export Report">
            <FiDownload className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setSelectedWorkflow(workflow)}
            className="p-2 hover:bg-orange-50 rounded text-orange-600" 
            title="Test Workflow"
          >
            <FiPlay className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-orange-50 rounded text-orange-600">
            <FiEdit3 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  const WorkflowBuilder = ({ workflow }) => (
    <div className="bg-white rounded-lg shadow-md border border-orange-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-normal text-gray-800">{workflow.name}</h2>
          <p className="text-gray-600">Workflow Builder</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 flex items-center gap-2">
            <FiPlay className="w-4 h-4" /> Test Workflow
          </button>
          <button className="px-4 py-2 border border-orange-500 text-orange-600 rounded-md hover:bg-orange-50 flex items-center gap-2">
            <FiSettings className="w-4 h-4" /> Settings
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Trigger */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <FiTarget className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1 bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h4 className="font-medium text-blue-800">Contact enrollment trigger</h4>
            <p className="text-sm text-blue-600">has filled out {workflow.trigger} on Any page</p>
          </div>
        </div>

        <div className="flex justify-center">
          <FiArrowDown className="w-6 h-6 text-gray-400" />
        </div>

        {/* Email Step */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <FiMail className="w-6 h-6 text-orange-600" />
          </div>
          <div className="flex-1 bg-orange-50 rounded-lg p-4 border border-orange-200">
            <h4 className="font-medium text-orange-800">1. Automated email</h4>
            <p className="text-sm text-orange-600">Send now</p>
            <div className="mt-2">
              <p className="text-sm font-medium">Subject: Welcome to our platform!</p>
              <p className="text-xs text-gray-600">Template: Welcome Email</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <FiArrowDown className="w-6 h-6 text-gray-400" />
        </div>

        {/* Delay */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
            <FiClock className="w-6 h-6 text-gray-600" />
          </div>
          <div className="flex-1 bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="font-medium text-gray-800">Wait 1 business day</h4>
            <p className="text-sm text-gray-600">Delay before next action</p>
          </div>
        </div>

        <div className="flex justify-center">
          <FiArrowDown className="w-6 h-6 text-gray-400" />
        </div>

        {/* Task Step */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <FiPhone className="w-6 h-6 text-green-600" />
          </div>
          <div className="flex-1 bg-green-50 rounded-lg p-4 border border-green-200">
            <h4 className="font-medium text-green-800">2. Create task</h4>
            <p className="text-sm text-green-600">Follow-up call</p>
            <div className="mt-2">
              <p className="text-sm font-medium">Assigned to: Sales Team</p>
              <p className="text-xs text-gray-600">Priority: High</p>
            </div>
          </div>
        </div>

        {/* Add Step Button */}
        <div className="flex justify-center">
          <button className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center hover:bg-orange-200 transition-colors">
            <FiPlus className="w-6 h-6 text-orange-600" />
          </button>
        </div>
      </div>
    </div>
  );

  const CreateWorkflowModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-normal text-gray-800">Create New Workflow</h2>
            <button onClick={() => setShowCreateModal(false)} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 border-2 border-orange-200 rounded-lg hover:border-orange-400 cursor-pointer transition-colors">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                <FiMail className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-medium text-gray-800 mb-1">Email Sequence</h3>
              <p className="text-sm text-gray-600">Send automated emails to nurture leads</p>
            </div>
            
            <div className="p-4 border-2 border-gray-200 rounded-lg hover:border-orange-400 cursor-pointer transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <FiUsers className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-medium text-gray-800 mb-1">Lead Assignment</h3>
              <p className="text-sm text-gray-600">Automatically assign leads to team members</p>
            </div>
            
            <div className="p-4 border-2 border-gray-200 rounded-lg hover:border-orange-400 cursor-pointer transition-colors">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <FiCalendar className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-medium text-gray-800 mb-1">Task Creation</h3>
              <p className="text-sm text-gray-600">Create follow-up tasks automatically</p>
            </div>
            
            <div className="p-4 border-2 border-gray-200 rounded-lg hover:border-orange-400 cursor-pointer transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <FiZap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-medium text-gray-800 mb-1">Custom Workflow</h3>
              <p className="text-sm text-gray-600">Build a custom automation from scratch</p>
            </div>
          </div>
          
          <div className="flex justify-end gap-3">
            <button onClick={() => setShowCreateModal(false)} className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50">
              Cancel
            </button>
            <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-medium text-gray-800 mb-2">Marketing Automation</h1>
            <p className="text-gray-600">Create and manage automated workflows to nurture leads and engage customers</p>
          </div>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-md transition-colors"
          >
            <FiPlus className="w-5 h-5" />
            Create Workflow
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md border border-orange-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Active Workflows</p>
                <p className="text-2xl font-medium text-orange-600">12</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <FiZap className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md border border-orange-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Contacts Enrolled</p>
                <p className="text-2xl font-medium text-orange-600">2,341</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <FiUsers className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md border border-orange-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Emails Sent</p>
                <p className="text-2xl font-medium text-orange-600">8,947</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <FiMail className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md border border-orange-100 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Conversion Rate</p>
                <p className="text-2xl font-medium text-orange-600">34.2%</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <FiTarget className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('workflows')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'workflows'
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Workflows
              </button>
              <button
                onClick={() => setActiveTab('templates')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'templates'
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Templates
              </button>
            </nav>
          </div>
        </div>

        {/* Performance Chart */}
        <PerformanceChart />
        
        {/* Smart Suggestions */}
        <SmartSuggestions />
        
        {/* Filters and Sorting */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-4">
            <select 
              value={filterCategory} 
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="all">All Categories</option>
              <option value="nurturing">Nurturing</option>
              <option value="retention">Retention</option>
              <option value="sales">Sales</option>
            </select>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="newest">Newest First</option>
              <option value="conversion">Highest Conversion</option>
              <option value="contacts">Most Contacts</option>
              <option value="activity">Recent Activity</option>
            </select>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'workflows' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              {selectedWorkflow ? (
                <div>
                  <button 
                    onClick={() => setSelectedWorkflow(null)}
                    className="flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-4"
                  >
                    ← Back to Workflows
                  </button>
                  <WorkflowBuilder workflow={selectedWorkflow} />
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6">
                  {workflows
                    .filter(w => filterCategory === 'all' || w.category === filterCategory)
                    .sort((a, b) => {
                      if (sortBy === 'conversion') return parseFloat(b.conversion) - parseFloat(a.conversion);
                      if (sortBy === 'contacts') return b.contacts - a.contacts;
                      if (sortBy === 'activity') return new Date(b.lastActivity) - new Date(a.lastActivity);
                      return b.id - a.id; // newest first
                    })
                    .map(workflow => (
                      <WorkflowCard key={workflow.id} workflow={workflow} />
                    ))}
                </div>
              )}
            </div>
            
            {/* Right Sidebar */}
            <div className="space-y-6">
              <TopWorkflowsPanel />
              <ActivityFeed />
            </div>
          </div>
        )}

        {activeTab === 'templates' && (
          <div className="bg-white rounded-lg shadow-md border border-orange-100 p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-normal text-gray-800">Template Library</h2>
                <p className="text-gray-600">Reusable templates for your automation workflows</p>
              </div>
              <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
                <FiPlus className="w-4 h-4" />
                New Template
              </button>
            </div>
            
            {/* Template Categories */}
            <div className="mb-6">
              <div className="flex gap-2 mb-4">
                {['All', 'Welcome Series', 'Sales', 'Cart Abandonment', 'Upsell'].map(category => (
                  <button key={category} className="px-3 py-1 text-sm border border-gray-300 rounded-full hover:border-orange-300 hover:bg-orange-50">
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {templates.map(template => (
                <div key={template.id} className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors hover:shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      template.type === 'email' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {template.type === 'email' ? <FiMail className="w-5 h-5" /> : <FiPhone className="w-5 h-5" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{template.name}</h3>
                      <p className="text-xs text-gray-500">{template.category}</p>
                    </div>
                  </div>
                  
                  <div className="mb-3 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700">{template.preview}</p>
                  </div>
                  
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-600">Used in {template.usage} workflows</span>
                    <div className="flex gap-1">
                      {template.usage > 50 && <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Popular</span>}
                      {template.usage < 20 && <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">New</span>}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <button className="flex-1 text-xs px-3 py-2 bg-orange-100 text-orange-700 rounded hover:bg-orange-200 flex items-center justify-center gap-1">
                      <FiEdit3 className="w-3 h-3" />
                      Edit
                    </button>
                    <button className="flex-1 text-xs px-3 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 flex items-center justify-center gap-1">
                      <FiEye className="w-3 h-3" />
                      Preview
                    </button>
                    <button className="text-xs px-3 py-2 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 flex items-center justify-center">
                      <FiCopy className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Create Workflow Modal */}
      {showCreateModal && <CreateWorkflowModal />}
    </div>
  );
};

export default Automation;