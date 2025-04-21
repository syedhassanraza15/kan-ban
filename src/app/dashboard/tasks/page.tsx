import React from 'react'

const tasks = () => {
    const tasks=[
        {
            id: 1,
            title: 'Finish project report',
            description: 'Complete the final report for the project and submit it by the end of the week.',
            status: 'In-Progress',
            dueDate: '2025-05-15',
        },
        {
            id: 2,
            title: 'Task 2',
            description: 'Description for task 2',
            status: 'Pending',
            dueDate: '2025-05-16',
        },
        {
            id: 3,
            title: 'Task 3',
            description: 'Description for task 3',
            status: 'Completed',
            dueDate: '2025-04-20',

        }
    ]
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8'>
        <div className='max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8'>
            <h1 className='text-3xl font-bold text-gray-800 mb-8'>Tasks</h1>

            {/* tasks list section */}
            <section className='space-y-6'>
                {tasks.map((task) => (
                    <div key={task.id} className='bg-white shadow-md rounded-lg p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between' style={task.status === 'Completed' ? { borderColor: '#3cb371' , borderWidth: '1px' } : task.status === 'In-Progress' ? { borderColor: '#ffa500' , borderWidth: '1px' } : { borderColor: '#6a5acd' , borderWidth: '1px' }}>
                        <div className='flex-1'>
                            <h2 className='text-xl font-semibold text-gray-800'>{task.title}</h2>
                            <p className='text-gray-600 mt-2'>{task.description}</p>
                            <p className='text-gray-500 mt-1'>Due Date: {task.dueDate}</p>
                        </div> 
                        <span className={`mt-4 sm:mt-0 inline-block px-4 py-4 rounded-full text-sm font-semibold ${task.status === 'Completed' ? 'bg-green-100 text-green-800' : task.status === 'In-Progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-purple-100 text-purple-800'}`}>
                            {task.status}   
                        </span>
                        {/* buttons */}
                        <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200 ml-8'>Edit</button>

                        {task.status !== 'Completed' && (
                            <button className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200 ml-2'>Mark as Complete</button>
                        )}

                        <button className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 ml-2'>Delete</button>
                    </div>
                ))}

                
            </section>
        </div>
    </div>
  )
}

export default tasks;