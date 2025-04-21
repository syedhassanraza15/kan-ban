'use client';

import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const analytics = () => {
  const data = [
    { name: 'Jan', uv: 800 },
    { name: 'Feb', uv: 300 },
    { name: 'Mar', uv: 200 },
    { name: 'April', uv: 278 },
    { name: 'May', uv: 189 },
    { name: 'June', uv: 239 },
    { name: 'July', uv: 349 },
    { name: 'Aug', uv: 349 },
    { name: 'Sept', uv: 349 },
    { name: 'Oct', uv: 349 },
    { name: 'Nov', uv: 349 },
    { name: 'Dec', uv: 800 },
  ];
  
  const metrics = [
    {
      title: 'Total Sales',
      value: '$120,000',
      change: '+10%',
      isPositive: true,
    },
    {
      title: 'Active Users',
      value: '1,200',
      change: '-8%',
      isPositive: false,
    },
    {
      title: 'Website visits',
      value: '500,000',
      change: '+15%',
      isPositive: true,
    },
    {
      title: 'Total Orders',
      value: '2,500',
      change: '+20%',
      isPositive: true,
    },
  ];

  // Sample data for charts
  const salesData = [
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 5000 },
    { month: 'Apr', sales: 4000 },
    { month: 'May', sales: 6000 },
    { month: 'Jun', sales: 7000 },
  ];

  const userData = [
    { month: 'Jan', users: 1200 },
    { month: 'Feb', users: 1100 },
    { month: 'Mar', users: 1300 },
    { month: 'Apr', users: 1250 },
    { month: 'May', users: 1400 },
    { month: 'Jun', users: 1500 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Analytics Dashboard</h1>

        {/* Overview Metrics Section */}
        <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-lg p-6 flex flex-col justify-between ${
                metric.isPositive ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'
              } transition-transform duration-200 ease-in-out transform hover:scale-105`}
            >
              <h2 className="text-xl font-semibold text-gray-800">{metric.title}</h2>
              <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              <p
                className={`text-sm font-semibold ${
                  metric.isPositive ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {metric.change}
              </p>
            </div>
          ))}
        </div>

        {/* Line Chart Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sales Over Time</h2>     
          <LineChart width={1000} height={400} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
          <p className="text-gray-600 mt-4">This chart shows the sales trend over the last 12 months.</p>
        </div>

        {/* Bar Chart Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Active Users Over Time</h2>
          <LineChart width={1000} height={400} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
          <p className="text-gray-600 mt-4">This chart shows the active user trend over the last 12 months.</p>
        </div>
      </div>
    </div>
  );
};

export default analytics;