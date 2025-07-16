import React from "react";
import {
  Line,
  Bar,
  Pie
} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  return (
        <div className="bg-gray-100 min-h-screen px-6 py-4 text-gray-800">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-2 bg-white p-4 rounded-xl shadow">
          <p className="text-sm">Earnings</p>
          <h3 className="text-xl font-normal">$350.4</h3>
        </div>
        <div className="col-span-2 bg-white p-4 rounded-xl shadow">
          <p className="text-sm">Spend this month</p>
          <h3 className="text-xl font-normal">$642.39</h3>
        </div>
        <div className="col-span-2 bg-white p-4 rounded-xl shadow">
          <p className="text-sm">Sales</p>
          <h3 className="text-xl font-normal text-orange-500">$574.34</h3>
          <p className="text-xs text-green-500">+23% since last month</p>
        </div>
        <div className="col-span-2 bg-white p-4 rounded-xl shadow">
          <p className="text-sm">Your balance</p>
          <h3 className="text-xl font-medium">$1,000</h3>
        </div>
        <div className="col-span-2 bg-white p-4 rounded-xl shadow">
          <p className="text-sm">New Tasks</p>
          <h3 className="text-xl font-medium">154</h3>
        </div>
        <div className="col-span-2 bg-white p-4 rounded-xl shadow">
          <p className="text-sm">Total Projects</p>
          <h3 className="text-xl font-medium">2935</h3>
        </div>

        {/* Line Chart */}
        <div className="col-span-6 bg-white p-6 rounded-xl shadow h-60">
          <div className="flex justify-between items-center h-full gap-4">
            <div className="flex flex-col justify-between h-full">
              <div>
                <p className="text-md font-medium mb-1">This Month</p>
                <h3 className="text-2xl font-medium">$37.5K</h3>
                <p className="text-xs text-orange-500">+2.45% • On track</p>
              </div>
            </div>
            <div className="flex-1 h-full">
              <Line
                data={{
                  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                  datasets: [
                    {
                      label: 'Revenue',
                      data: [12000, 15000, 14000, 18000, 17500, 20000],
                      borderColor: '#FB923C',
                      backgroundColor: 'rgba(251, 146, 60, 0.2)',
                      tension: 0.4,
                      fill: true,
                    },
                    {
                      label: 'Projection',
                      data: [11000, 14500, 13500, 17000, 16000, 19500],
                      borderColor: '#F97316',
                      backgroundColor: 'rgba(249, 115, 22, 0.1)',
                      borderDash: [5, 5],
                      tension: 0.4,
                      fill: false,
                    }
                  ]
                }}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { display: false },
                  },
                  scales: {
                    x: {
                      display: true,
                      grid: { display: false },
                      ticks: {
                        color: '#9CA3AF',
                        font: { size: 12 }
                      }
                    },
                    y: {
                      display: false
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Weekly Revenue Bar Chart */}
        <div className="col-span-6 bg-white p-6 rounded-xl shadow h-60">
          <p className="text-md font-medium mb-2 text-orange-500">
            Weekly Revenue
          </p>
          <div className="mt-4 h-32">
            <Bar
              data={{
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                  label: 'Weekly Revenue',
                  data: [1200, 1900, 3000, 2200, 2800, 2400, 3200],
                  backgroundColor: '#3B82F6',
                  borderRadius: 6,
                  barThickness: 'flex',
                  maxBarThickness: 1000,
                }]
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                },
                scales: {
                  x: {
                    grid: { display: false },
                    ticks: {
                      color: '#9CA3AF',
                      font: { size: 12 }
                    },
                    barPercentage: 1,
                    categoryPercentage: 1,
                    offset: true,
                  },
                  y: {
                    display: false
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Check Table */}
        <div className="col-span-6 bg-white p-4 rounded-xl shadow">
          <h4 className="text-md font-medium mb-4">Check Table</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-lg">
              <thead className="text-left text-gray-500 bg-gray-50 rounded-lg">
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Progress</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Horizon UI PRO", "17.5%", "2,458", "24 Jan 2021"],
                  ["Horizon UI Free", "10.8%", "1,485", "12 Jun 2021"],
                  ["Weekly Update", "21.3%", "1,024", "5 Jan 2021"],
                  ["Venus 3D Asset", "31.5%", "858", "7 Mar 2021"],
                  ["Marketplace", "12.2%", "258", "17 Dec 2021"],
                ].map(([name, prog, qty, date]) => (
                  <tr key={name} className="border-t hover:bg-gray-50 text-sm text-gray-700">
                    <td className="px-4 py-2">{name}</td>
                    <td className="px-4 py-2">
                      <span className="inline-block bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full">
                        {prog}
                      </span>
                    </td>
                    <td className="px-4 py-2">{qty}</td>
                    <td className="px-4 py-2">{date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Daily Traffic */}
        <div className="col-span-3 bg-white p-4 rounded-xl shadow">
          <p className="text-md font-medium">Daily Traffic</p>
          <h3 className="text-2xl font-medium">2,579</h3>
          <p className="text-xs text-green-500">+2.45%</p>
          <div className="mt-4 h-28">
            <Bar
              data={{
                labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                datasets: [{
                  label: 'Traffic',
                  data: [400, 800, 600, 900, 750, 1050, 620],
                  backgroundColor: '#F97316',
                  borderRadius: 6,
                }]
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: { display: false },
                },
                scales: {
                  y: {
                    display: false,
                    grid: {
                      display: false,
                      drawBorder: false
                    }
                  },
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false
                    },
                    ticks: {
                      color: '#9CA3AF',
                      font: { size: 12 }
                    }
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Pie Chart */}
        <div className="col-span-3 bg-white p-4 rounded-xl shadow">
          <p className="text-md font-medium mb-4">Your Pie Chart</p>
          <div className="w-full h-32">
            <Pie
              data={{
                labels: ['Your Files', 'System'],
                datasets: [{
                  data: [63, 25],
                  backgroundColor: ['#FB923C', '#E5E7EB'],
                  borderColor: '#fff',
                  borderWidth: 2,
                }]
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'bottom',
                    labels: {
                      color: '#6B7280',
                    },
                  },
                },
              }}
            />
          </div>
          <div className="flex justify-between text-xs mt-2">
            <span>Your files 63%</span>
            <span>System 25%</span>
          </div>
        </div>

        {/* Complex Table */}
        <div className="col-span-6 bg-white p-4 rounded-xl shadow">
          <h4 className="text-md font-medium mb-4">Complex Table</h4>
          <table className="w-full text-sm border border-gray-200 rounded-lg">
            <thead className="text-left text-gray-500 bg-gray-50 rounded-lg">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Progress</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Horizon UI PRO", "Approved", "18 Apr 2021"],
                ["Horizon UI Free", "Disable", "18 Apr 2021"],
                ["Marketplace", "Error", "20 May 2021"],
                ["Weekly Update", "Approved", "12 May 2021"],
              ].map(([name, status, date], idx) => {
                let statusColor = '';
                if (status === "Approved") statusColor = 'bg-green-100 text-green-800';
                else if (status === "Disable") statusColor = 'bg-gray-100 text-gray-600';
                else if (status === "Error") statusColor = 'bg-red-100 text-red-800';
                return (
                  <tr key={idx} className="border-t hover:bg-gray-50 text-sm text-gray-700">
                    <td className="px-4 py-2">{name}</td>
                    <td className="px-4 py-2">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${statusColor}`}>
                        {status}
                      </span>
                    </td>
                    <td className="px-4 py-2">{date}</td>
                    <td className="px-4 py-2">
                      <div className="w-full bg-gray-200 h-2 rounded-full">
                        <div
                          className="bg-orange-400 h-2 rounded-full"
                          style={{ width: `${(idx + 1) * 20}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Tasks */}
        <div className="col-span-3 bg-white p-4 rounded-xl shadow">
          <h4 className="text-md font-medium mb-4">Tasks</h4>
          <ul className="text-sm">
            {[
              ["Dashboard Builder", true],
              ["Mobile App Design", true],
              ["Illustrations", false],
              ["Promotional LP", false],
            ].map(([task, done], i) => (
              <li key={i} className="flex items-center gap-2 mb-2">
                <input type="checkbox" checked={done} readOnly />
                {task}
              </li>
            ))}
          </ul>
        </div>

        {/* Calendar */}
        <div className="col-span-3 bg-white p-4 rounded-xl shadow">
          <h4 className="text-md font-medium mb-4">April 2021</h4>
          <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-600">
            {["M", "T", "W", "T", "F", "S", "S", ...Array(30).fill(0).map((_, i) => i + 1)].map((d, idx) => (
              <div
                key={idx}
                className={`p-1 rounded-full ${[27, 28, 29, 30].includes(d) ? "bg-orange-300 text-white" : ""}`}
              >
                {d}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;