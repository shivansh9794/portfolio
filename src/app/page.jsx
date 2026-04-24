import React from 'react'

const page = () => {

  return (
    <div className='w-full h-auto bg-neutral-800 backdrop-blur-lg p-10 rounded-b-[25px]  '>
      <div>

        <h1 className='font-bold text-3xl font-body'>About me</h1>

        <hr className="w-16 h-1 mt-2  mb-4 bg-gray-100 border-0 rounded md:mb-5 dark:bg-neutral-400"></hr>


        <p className='m-5 mb-10 font-sans text-lg text-pretty text-neutral-400'>I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.</p>

        <h1 className='font-bold text-3xl font-body'>What i'm Doing </h1>

        <div className='gap-10 flex grid-cols-3 justify-center mt-5 max-sm:flex max-sm:flex-col'>

          <div className='flex items-center justify-center h-56 w-80 col-span-1 text-white border-none bg-transparent   p-3 rounded-b-2xl shadow-2xl shadow-zinc-700 my-4 sm:col-span-3 '>
            <h1 className='font-bold text-2xl font-mono text-neutral-400'>Website Development Using HTML,CSS,JS</h1>
          </div>

          <div className='flex items-center justify-center h-56 w-80 col-span-1 text-white border-none bg-transparent backdrop:blur-md p-3 rounded-b-2xl shadow-xl shadow-zinc-700 my-4'>
            <h1 className='font-bold font-mono text-2xl text-neutral-400'>Website Development Using MERN Stack</h1>
          </div>

          <div className='flex items-center justify-center h-56 w-80 col-span-1 text-white border-none bg-transparent backdrop:blur-md p-3 rounded-b-2xl shadow-xl shadow-zinc-700 my-4'>
            <h1 className='font-bold font-mono text-2xl text-neutral-400'>Java application Development</h1>
          </div>
        </div>

        <div >
          <h1 className='font-bold text-3xl mt-5 mb-10 font-body'>Language</h1>

          <div className='flex h-auto w-full max-sm:grid max-sm:grid-cols-1'>
            <div className='border flex border-none rounded-xl h-[70px] bg-transparent items-center justify-center shadow-lg shadow-zinc-700 mx-5 font-bold font-mono text-neutral-400 text-2xl w-44 max-sm:w-full '>Java</div>

            <h1 className='border flex border-none rounded-xl h-[70px] bg-transparent items-center justify-center shadow-lg shadow-zinc-700 mx-5 font-bold font-mono text-neutral-400 text-2xl w-44 max-sm:w-full '>JavaScript</h1>

            <h1 className='border flex border-none rounded-xl h-[70px] bg-transparent items-center justify-center shadow-lg shadow-zinc-700 mx-5 font-bold font-mono text-neutral-400 text-2xl w-44 max-sm:w-full '>C Language</h1>

            <h1 className='border flex border-none rounded-xl h-[70px] bg-transparent items-center justify-center shadow-lg shadow-zinc-700 mx-5 font-bold font-mono text-neutral-400 text-2xl w-44 max-sm:w-full '>PHP</h1>

          </div>

        </div>

        <div>
          <h1 className='font-bold text-3xl mt-11 mb-10 font-body'>Frameworks</h1>

          <div className='flex h-auto w-full max-sm:grid max-sm:grid-cols-1'>
            <div className='border flex border-none rounded-xl h-[70px] bg-transparent items-center justify-center shadow-lg shadow-zinc-700 mx-5 font-bold font-mono text-neutral-400 text-2xl w-44 max-sm:w-full '>NEXT Js</div>

            <h1 className='border flex border-none rounded-xl h-[70px] bg-transparent items-center justify-center shadow-lg shadow-zinc-700 mx-5 font-bold font-mono text-neutral-400 text-2xl w-44 max-sm:w-full '>Express Js</h1>

            <h1 className='border flex border-none rounded-xl h-[70px] bg-transparent items-center justify-center shadow-lg shadow-zinc-700 mx-5 font-bold font-mono text-neutral-400 text-2xl w-44 max-sm:w-full '>Tailwind CSS</h1>

            <h1 className='border flex border-none rounded-xl h-[70px] bg-transparent items-center justify-center shadow-lg shadow-zinc-700 mx-5 font-bold font-mono text-neutral-400 text-2xl w-44 max-sm:w-full '>Bootstrap </h1>

          </div>

        </div>
      </div>

    </div>
  )
}

export default page