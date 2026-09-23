// import React from 'react'

// const sidebar = () => {
//   return (
//     <aside className='flex flex-col w-full h-screen bg-neutral-800 backdrop-blur-lg p-10 rounded-[25px] top-10 sticky  items-center '>


//       <div className='flex h-[25vh] w-auto bg-transparent rounded-full justify-center shadow-xl shadow-zinc-700'>

//         <img className='border rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-2xl' src="https://res.cloudinary.com/dbugkyyly/image/upload/v1733544723/ymcjs4gfsoypruclye0r.jpg" alt="error" />

//       </div>

//       <h1 className='mt-10 font-bold text-pretty text-xl font-body'>SHIVANSH MISHRA</h1>

//       <div className='flex items-center justify-center font-body border text-center rounded-xl bg-transparent h-10 w-40 mt-3 shadow-xl shadow-zinc-700 bg-neutral-900'>
//         WEB DEVELOPER
//       </div>

//       <hr className="w-56 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-5 dark:bg-neutral-400"></hr>

//       <div className='h-full w-full'>

//         <div className='flex items-start '>
//           <svg className="h-11 w-11 text-gray-200 bg-neutral-800 shadow-lg shadow-zinc-700 rounded-md p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
//           </svg>
//           <div >
//             <h1 className='mt-2 mx-2 text-xs font-body text-gray-100'>Email</h1>
//             <h1 className='mx-2 mb-2 font-body overflow-x-hidden'>m904157@gmail.com</h1>
//           </div>
//         </div>

//         <div className='w-full flex items-center mt-3'>
//           <svg className="h-11 w-11 text-gray-200 bg-neutral-800 rounded-md p-1 shadow-lg shadow-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//           </svg>
//           <div >
//             <h1 className='mt-2 mx-2 text-xs font-body text-gray-100'>Phone</h1>
//             <h1 className='mx-2 mb-2 font-body'>9336XXXXX9</h1>
//           </div>
//         </div>

//         <div className='w-full flex items-center mt-3'>
//           <svg className="h-11 w-11 text-gray-200 bg-neutral-800 rounded-md p-1 shadow-lg shadow-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="5" width="16" height="16" rx="2" />  <line x1="16" y1="3" x2="16" y2="7" />  <line x1="8" y1="3" x2="8" y2="7" />  <line x1="4" y1="11" x2="20" y2="11" />  <line x1="11" y1="15" x2="12" y2="15" />  <line x1="12" y1="15" x2="12" y2="18" /></svg>
//           <div >
//             <h1 className='mt-2 mx-2 text-xs font-body text-gray-100'>Birthday</h1>
//             <h1 className='mx-2 mb-2 font-body'>23/09/2004</h1>
//           </div>
//         </div>

//         <div className='w-full flex items-center mt-3'>
//           <svg className="h-11 w-11 text-gray-200 bg-neutral-800 rounded-md p-1 shadow-lg shadow-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="11" r="3" />  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" /></svg>
//           <div >
//             <h1 className='mt-2 mx-2 text-xs font-body text-gray-100'>Address</h1>
//             <h1 className='mx-2 mb-2 font-body'>2/8 Matiyari Lucknow</h1>
//           </div>
//         </div>


//       </div>

//     </aside>
//   )
// }

// export default sidebar


"use client";

import React from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code2,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="sticky top-6 flex h-[calc(100vh-48px)] w-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/80 p-6 shadow-2xl backdrop-blur-xl">

      {/* Profile */}
      <div className="flex flex-col items-center text-center">

        <div className="group relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-70 blur transition duration-500 group-hover:opacity-100" />

          <img
            src="https://res.cloudinary.com/dbugkyyly/image/upload/v1790185431/Shivansh_Image_t6ibzt.png"
            alt="Shivansh Mishra"
            className="relative h-32 w-32 rounded-full border-4 border-zinc-900 object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <h1 className="mt-5 text-2xl font-bold tracking-tight text-white">
          Shivansh Mishra
        </h1>

        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
          <Code2 size={15} />
          Full Stack Developer
        </div>
      </div>

      {/* Divider */}
      <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Contact */}
      <div className="space-y-5">

        <div className="flex items-start gap-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <Mail size={18} className="text-cyan-400" />
          </div>

          <div className="min-w-0">
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Email
            </p>

            <a
              href="mailto:mshivansh549@gmail.com"
              className="mt-1 block truncate text-sm text-zinc-200 transition hover:text-cyan-400"
            >
              mshivansh549@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-3">
            <MapPin size={18} className="text-cyan-400" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-zinc-500">
              Location
            </p>

            <p className="mt-1 text-sm text-zinc-200">
              India
            </p>
          </div>
        </div>

      </div>

      {/* Social Links */}
      <div className="mt-auto">

        <div className="my-7 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Connect
        </p>

        <div className="flex gap-3">

          <a
            href="https://github.com/shivansh9794"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
            aria-label="GitHub"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-[19px] w-[19px] text-zinc-300 transition group-hover:text-white"
              aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.88-1.35-3.88-1.35-.53-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.69.41.35.78 1.04.78 2.1v3.11c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/shivansh-mishra-4a2241330/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-blue-400/10"
            aria-label="LinkedIn"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-[19px] w-[19px] text-zinc-300 transition group-hover:text-blue-400"
              aria-hidden="true"
            >
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.98h3.41v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.34 7.41a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM3.56 20.45h3.56V8.98H3.56v11.47ZM22.22 0H1.78C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0Z" />
            </svg>
          </a>

          <a
            href="mailto:mshivansh549@gmail.com"
            className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/10"
            aria-label="Email"
          >
            <Mail
              size={19}
              className="text-zinc-300 transition group-hover:text-cyan-400"
            />
          </a>

          <a
            href="https://github.com/shivansh9794?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/30 hover:bg-purple-400/10"
            aria-label="Repositories"
          >
            <ExternalLink
              size={18}
              className="text-zinc-300 transition group-hover:text-purple-400"
            />
          </a>

        </div>

        <p className="mt-5 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} Shivansh Mishra
        </p>

      </div>
    </aside>
  );
};

export default Sidebar;