import React from 'react'
import CancelButton from '@/app/components/CancelButton';


const notification = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className='max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-8'>Notifications</h1>

        {/* Notifications settings section */}
        <div className="mb-8"></div>
        <h2 className='text-xl font-semibold text-gray-400 mb-4'>Notification Preferences</h2>

        <div className="space-y-4 mt-6">
          {/* Email Notifications */}
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-600">
              Email Notifications
            </label>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Check to Activate</span>
              <input type="checkbox" className="w-4 h-4" />
            </div>
          </div>

          {/* SMS Notifications */}
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-600">
              SMS Notifications
            </label>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Check to Activate</span>
              <input type="checkbox" className="w-4 h-4" />
            </div>
          </div>

          {/* Push Notifications */}
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-600">
              Push Notifications
            </label>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Check to Activate</span>
              <input type="checkbox" className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className='flex justify-end mt-10'>
          {/* <button className="mt-6 bg-gray-300 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-200 mr-4" onClick={() => window.location.href = '/dashboard/settings'}>Cancel</button> */}
          <CancelButton />
          <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">Save Changes</button>
        </div>
      </div>
    </div>
  )
}

export default notification;