// 'use client'
// import React, { useEffect } from 'react'
// import '../components/navbar.css'
// import { usePathname } from 'next/navigation'


// const Navbar = () => {

//   const pathname = usePathname();

//   const wht = () => {
//     console.log(pathname);
//     if (pathname == '/') {
//       document.getElementById('home').style.color = 'white';
//     }
//     else if (pathname == '/renpsume') {
//       document.getElementById('resume').style.color = 'white';
//     }
//     else if (pathname == '/Certificates') {
//       document.getElementById('Certificates').style.color = 'white'
//     }
//     else if (pathname == '/projects') {
//       document.getElementById('projects').style.color = 'white'
//     }
//   }

//   useEffect(() => {
//     wht();
//   }, []);


//   return (
//     <nav className='nav max-sm:w-full' >
//       <div className='main max-sm:w-auto max-sm:p-5'>
//         <a href='../' id='home'>Home</a>
//         <a href="../resume" id='resume'>Resume</a>
//         <a href="../Certificates" id='Certificates'>Certificates</a>
//         <a href="../projects" id='projects'>Projects</a>
//       </div>
//     </nav>
//   )
// }

// export default Navbar



"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import "./navbar.css";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Certificates", href: "/Certificates" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 mb-5 rounded-2xl border border-white/10 bg-zinc-950/80 p-2 shadow-xl backdrop-blur-xl">

      <div className="flex items-center justify-between px-3 py-2">

        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-white"
        >
          <span className="text-cyan-400">&lt;</span>
          Shivansh
          <span className="text-cyan-400">/&gt;</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">

          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-white/10 text-cyan-400"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          <a
            href="/resume"
            className="ml-2 flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-400"
          >
            <Download size={16} />
            Resume
          </a>

        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 bg-white/5 p-2 text-zinc-300 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* Mobile navigation */}
      {open && (
        <div className="border-t border-white/10 px-2 pb-2 pt-3 md:hidden">

          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`mb-1 block rounded-xl px-4 py-3 text-sm font-medium ${
                  active
                    ? "bg-white/10 text-cyan-400"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

        </div>
      )}

    </nav>
  );
};

export default Navbar;