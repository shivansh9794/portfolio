import React from 'react'

const resume = () => {
    return (
        <div className='w-full h-auto bg-neutral-800 backdrop-blur-lg p-10 rounded-b-[25px]  '>

            <h1 className='font-bold text-3xl font-body'>Resume</h1>

            <hr className="w-20 h-1 mt-2  mb-4 bg-gray-100 border-0 rounded md:mb-5 dark:bg-neutral-400"></hr>



            <div className='flex items-start mt-10 '>
                <svg className="h-11 w-11 text-gray-200 bg-neutral-800 shadow-lg shadow-zinc-700 rounded-md p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />  <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                </svg>
                <div >
                    <h1 className=' ml-2 mt-2 text-2xl font-extrabold font-body overflow-x-hidden'>Education</h1>
                </div>
            </div>

            <div className='flex mt-4 ml-4'>
                <li className='mt-2 text-gray-100 text-[30px]  '></li>
                <div>
                    <h1 className='mt-3 font-body font-semibold text-2xl'>Lucknow Public College of Professional Studies</h1>
                    <h1 className='font-body font-semibold mt-1'>2022-2025</h1>
                    <h1 className='font-body font-semibold mt-1'>Bachelor in Computer Applications</h1>
                </div>
            </div>

            <div className='flex mt-4 ml-4'>
                <li className='mt-2 text-gray-100 text-[30px]  '></li>
                <div>
                    <h1 className='mt-3 font-body font-semibold text-2xl'>S V M Inter College R S Ghat Barabanki</h1>
                    <h1 className='font-body font-semibold mt-1'>2020-2022</h1>
                    <h1 className='font-body font-semibold mt-1'>Completed My 10+2 in PCM</h1>
                </div>
            </div>



        </div>
    )
}

export default resume