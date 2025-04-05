import React from 'react'

const Home = () => {
  return (
    <div className=' max-w-xs mx-auto mt-20 p-4 border rounded shadow'>
      <h2 className=' text-xl mb-4'>Welcome to the Job Portal</h2>
      <p className=' mb-4'>Find your dream job or post a job listing.</p>
      <ul className=' list-disc pl-5'>
        <li>Click on the link above to register or login</li>
        <li>After login you will rederect to the dashboard</li>
        <li>You can search the job and apply for thrm</li>
      </ul>
    </div>
  )
}

export default Home