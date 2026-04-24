import React from 'react'

const sidebar = () => {
  return (
    <aside className='flex flex-col w-full h-screen bg-neutral-800 backdrop-blur-lg p-10 rounded-[25px] top-10 sticky  items-center '>


      <div className='flex h-[25vh] w-auto bg-transparent rounded-full justify-center shadow-xl shadow-zinc-700'>

        <img className='border rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-2xl' src="https://res.cloudinary.com/dbugkyyly/image/upload/v1733544723/ymcjs4gfsoypruclye0r.jpg" alt="error" />

      </div>

      <h1 className='mt-10 font-bold text-pretty text-xl font-body'>SHIVANSH MISHRA</h1>

      <div className='flex items-center justify-center font-body border text-center rounded-xl bg-transparent h-10 w-40 mt-3 shadow-xl shadow-zinc-700 bg-neutral-900'>
        WEB DEVELOPER
      </div>

      <hr className="w-56 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-5 dark:bg-neutral-400"></hr>

      <div className='h-full w-full'>

        <div className='flex items-start '>
          <svg className="h-11 w-11 text-gray-200 bg-neutral-800 shadow-lg shadow-zinc-700 rounded-md p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
          </svg>
          <div >
            <h1 className='mt-2 mx-2 text-xs font-body text-gray-100'>Email</h1>
            <h1 className='mx-2 mb-2 font-body overflow-x-hidden'>m904157@gmail.com</h1>
          </div>
        </div>

        <div className='w-full flex items-center mt-3'>
          <svg className="h-11 w-11 text-gray-200 bg-neutral-800 rounded-md p-1 shadow-lg shadow-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <div >
            <h1 className='mt-2 mx-2 text-xs font-body text-gray-100'>Phone</h1>
            <h1 className='mx-2 mb-2 font-body'>9336XXXXX9</h1>
          </div>
        </div>

        <div className='w-full flex items-center mt-3'>
          <svg className="h-11 w-11 text-gray-200 bg-neutral-800 rounded-md p-1 shadow-lg shadow-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="5" width="16" height="16" rx="2" />  <line x1="16" y1="3" x2="16" y2="7" />  <line x1="8" y1="3" x2="8" y2="7" />  <line x1="4" y1="11" x2="20" y2="11" />  <line x1="11" y1="15" x2="12" y2="15" />  <line x1="12" y1="15" x2="12" y2="18" /></svg>
          <div >
            <h1 className='mt-2 mx-2 text-xs font-body text-gray-100'>Birthday</h1>
            <h1 className='mx-2 mb-2 font-body'>23/09/2004</h1>
          </div>
        </div>

        <div className='w-full flex items-center mt-3'>
          <svg className="h-11 w-11 text-gray-200 bg-neutral-800 rounded-md p-1 shadow-lg shadow-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="11" r="3" />  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" /></svg>
          <div >
            <h1 className='mt-2 mx-2 text-xs font-body text-gray-100'>Address</h1>
            <h1 className='mx-2 mb-2 font-body'>2/8 Matiyari Lucknow</h1>
          </div>
        </div>


      </div>

    </aside>
  )
}

export default sidebar