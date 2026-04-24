'use client'
import React, { useEffect } from 'react'
import '../components/navbar.css'
import { usePathname } from 'next/navigation'


const Navbar = () => {

  const pathname = usePathname();

  const wht = () => {
    console.log(pathname);
    if (pathname == '/') {
      document.getElementById('home').style.color = 'white';
    }
    else if (pathname == '/renpsume') {
      document.getElementById('resume').style.color = 'white';
    }
    else if (pathname == '/Certificates') {
      document.getElementById('Certificates').style.color = 'white'
    }
    else if (pathname == '/projects') {
      document.getElementById('projects').style.color = 'white'
    }
  }

  useEffect(() => {
    wht();
  }, []);


  return (
    <nav className='nav max-sm:w-full' >
      <div className='main max-sm:w-auto max-sm:p-5'>
        <a href='../' id='home'>Home</a>
        <a href="../resume" id='resume'>Resume</a>
        <a href="../Certificates" id='Certificates'>Certificates</a>
        <a href="../projects" id='projects'>Projects</a>
      </div>
    </nav>
  )
}

export default Navbar