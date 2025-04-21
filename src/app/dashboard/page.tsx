import React from 'react'
import Link from 'next/link';

const dashboard = () => {
  return (
    // first commit
    <div className='min-h-screen bg-gradient-to-br from-gray-200 via-gray-400 to-gray-600 p-8'>
        
        <div className='max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8'>
            <div className='flex flex-col'>
                <h1 className='text-4xl font-extrabold text-gray-900 mb-4 sm:mb-0'>Dashboard</h1>
                <p className="text-lg text-gray-600 mt-3">Welcome Back! Here you can manage your tasks, view analytics and make adjustments</p>
            </div>
            {/* dashboard grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* task card */}
                <Link className='bg-blue-100 hover:bg-blue-200 p-6 rounded-xl
                 shadow-md hover:shadow-xl transition-all duration-200 ease-in-out 
                 transform hover:scale-105' href="/dashboard/tasks">
                    <div className='flex items-center justify-between'>
                        <h2 className='text-xl font-semibold text-blue-800'>Tasks</h2>
                        <span className='text-blue-500 text-2xl'>&#128203;</span>
                    </div>
                    <p className='text-gray-700 mt-2'>View, organize and manage your daily tasks.</p>
                </Link>

                {/* analytics card */}
                <Link className='bg-green-100 hover:bg-green-200 p-6 rounded-xl
                 shadow-md hover:shadow-xl transition-all duration-200 ease-in-out 
                 transform hover:scale-105' href="/dashboard/analytics">
                    <div className='flex items-center justify-between'>
                        <h2 className='text-xl font-semibold text-blue-800'>Analytics</h2>
                        <span className='text-blue-500 text-2xl'>📊</span>
                    </div>
                    <p className='text-gray-700 mt-2'>Gain insights into your performance and trends.</p>
                </Link>
                

                {/* settings card */}
                <Link className='bg-purple-100 hover:bg-purple-200 p-6 rounded-xl
                 shadow-md hover:shadow-xl transition-all duration-200 ease-in-out 
                 transform hover:scale-105' href="/dashboard/settings">
                    <div className='flex items-center justify-between'>
                        <h2 className='text-xl font-semibold text-blue-800'>Settings</h2>
                        <span className='text-blue-500 text-2xl'>⚙️</span>
                    </div>
                    <p className='text-gray-700 mt-2'>Customize settings according to your needs.</p>
                </Link>


                {/* Users card */}
                <Link className='bg-yellow-100 hover:bg-yellow-200 p-6 rounded-xl
                 shadow-md hover:shadow-xl transition-all duration-200 ease-in-out 
                 transform hover:scale-105' href="/dashboard/users">
                    <div className='flex items-center justify-between'>
                        <h2 className='text-xl font-semibold text-blue-800'>Users</h2>
                        <span className='text-blue-500 text-2xl'>👥</span>
                    </div>
                    <p className='text-gray-700 mt-2'>View and Manage your user base.</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default dashboard;