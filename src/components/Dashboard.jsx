import React from 'react'

function Dashboard() {
  return (
    <div className='flex flex-col py-12 px-14'>
       <h2>Dashboard</h2> 
       <div className='flex space-x-8'>
            <div className='w-2/5 h-[150px] border border-gray-500 rounded flex flex-col justify-center p-4'>
                <span>Halil İbrahim Dirik </span>
                <span>My Balance: 200000 YTL </span>
            </div>
            <div className='border-gray'></div>
       </div>
    </div>
  )
}

export default Dashboard