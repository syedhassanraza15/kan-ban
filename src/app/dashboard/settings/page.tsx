import React from 'react'
import Link from 'next/link'

const settings = () => {
  return (
    <div className='min-h-screen bg-gray-100 pt-10'>
      <div className='max-w-7xl mx-auto bg-white rounded-lg shadow-2xl p-8'>
        <h1 className='text-4xl font-extrabold text-gray-900 mb-6'>Settings</h1>
        <p className='text-lg text-gray-700 mb-8 max-w-2xl'>Customize your account settings here. Choose an option from sidebar to begin.</p>

        <div className="flex space-x-12">
          <div className="w-1/6 p-4 rounded-lg">
            <h2 className='text-2xl font-semibold text-gray-800 flex justify-center'>Quick Links</h2>


            <ul className='space-y-4 mt-6'>
              <li>
                <Link className="flex items-center text-lg text-gray-800 hover:underline hover:font-semibold px-4" href="/dashboard/settings/account">
                  <span>Account</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center text-lg text-gray-800 hover:underline hover:font-semibold px-4" href="/dashboard/settings/notifications">
                  <span>Notifications</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center text-lg text-gray-800 hover:underline hover:font-semibold px-4" href="/dashboard/settings/profile">
                  <span>Profile</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default settings;