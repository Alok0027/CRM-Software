import React from "react";
import { FiBarChart2, FiPieChart, FiCalendar, FiPlus, FiSearch, FiFilter } from "react-icons/fi";
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as ReTooltip
} from "recharts";

const pieData = [
  { name: "Social Media", value: 450 },
  { name: "Email", value: 300 },
  { name: "SEO", value: 200 },
  { name: "Ads", value: 150 },
];

const pieColors = ["#F97316", "#FB923C", "#FDBA74", "#FACC15"];

const barData = [
  { campaign: "Blast 1", leads: 120 },
  { campaign: "Blast 2", leads: 180 },
  { campaign: "Blast 3", leads: 150 },
  { campaign: "Blast 4", leads: 90 },
  { campaign: "Blast 5", leads: 60 },
];

const Marketing = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-medium text-gray-800">Marketing</h1>
        <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md shadow">
          <FiPlus /> New Campaign
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {[
          { title: "Total Campaigns", value: "28" },
          { title: "Active Campaigns", value: "12" },
          { title: "Leads Generated", value: "1,352" },
          { title: "Avg. ROI", value: "157%" },
        ].map((item, idx) => (
          <div key={idx} className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center shadow">
            <p className="text-sm text-gray-500">{item.title}</p>
            <p className="text-2xl font-medium text-orange-600">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Filters and Search */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <div className="relative">
            <FiSearch className="absolute top-2.5 left-2 text-gray-400" />
            <input
              type="text"
              placeholder="Search campaigns..."
              className="pl-8 pr-4 py-2 border border-gray-200 rounded-md bg-white text-gray-800"
            />
          </div>
          <button className="flex items-center gap-1 text-sm text-orange-500">
            <FiFilter /> Filter
          </button>
        </div>
        <p className="text-sm text-gray-500">Showing 1–10 of 28</p>
      </div>

      {/* Campaign Table */}
      <div className="overflow-auto rounded-lg border border-orange-100 bg-white shadow mb-10">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-orange-100 text-gray-700 font-medium">
            <tr>
              <th className="px-4 py-3">Campaign</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Leads</th>
              <th className="px-4 py-3">Cost</th>
              <th className="px-4 py-3">Revenue</th>
              <th className="px-4 py-3">Start - End</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, i) => (
              <tr key={i} className="border-t border-orange-100 hover:bg-orange-50">
                <td className="px-4 py-3 font-medium text-gray-800">Summer Blast #{i + 1}</td>
                <td className="px-4 py-3 text-gray-700">Email</td>
                <td className="px-4 py-3">
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">Running</span>
                </td>
                <td className="px-4 py-3 text-gray-700">230</td>
                <td className="px-4 py-3 text-gray-700">₹5,000</td>
                <td className="px-4 py-3 text-gray-700">₹18,500</td>
                <td className="px-4 py-3 text-gray-700">01 Jul - 30 Jul</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Charts and Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="bg-white shadow rounded-lg h-64 flex flex-col items-center justify-center p-4">
          <PieChart width={280} height={220}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#F97316"
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
              ))}
            </Pie>
            <ReTooltip />
          </PieChart>
          <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600 justify-center">
            {pieData.map((entry, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: pieColors[index] }}></div>
                <span>{entry.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bar Chart */}
        <div className="bg-white shadow rounded-lg h-64 flex flex-col items-center justify-center p-4">
          <BarChart width={300} height={220} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="campaign" />
            <YAxis />
            <ReTooltip />
            <Bar dataKey="leads" fill="#F97316" />
          </BarChart>
          <div className="mt-2 text-sm text-gray-600">Lead count per campaign</div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="mt-10">
        <h2 className="text-xl font-medium text-gray-800 mb-3 flex items-center gap-2">
          <FiCalendar /> Upcoming Campaigns
        </h2>
        <div className="bg-orange-50 border border-orange-200 rounded-md p-4 space-y-2">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex justify-between text-sm text-gray-700">
              <p>Campaign #{i + 1} – Social Media Push</p>
              <p className="text-orange-500">Starts: {`20 Jul 2025`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketing;