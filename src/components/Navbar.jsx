
import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'

const Navbar = ({theme,setTheme}) => {
  const[sidebarOpen,setSidebarOpen]=useState(false)
  return (
    <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky
     top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70 '  >
        <img src={theme=='dark'?assets.logo_dark:assets.logo} alt="logo"
        className='w-32 sm:w-40' />
        <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen?'max-sm:w-0 ':'max-sm:w-60  max-sm:pl-10'}  overflow-hidden max-sm:fixed
         top-0 right-0 bottom-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>
          <img src={assets.close_icon} className='w-5 absolute right-4 top-4 sm:hidden cursor-pointer' 
            onClick={()=>setSidebarOpen(false)} alt="" />
            <a onClick={()=>setSidebarOpen(false)} className='sm:hover:border-b ' href="#">Home</a>
            <a onClick={()=>setSidebarOpen(false)} className='sm:hover:border-b' href="#">Services</a>
            <a onClick={()=>setSidebarOpen(false)} className='sm:hover:border-b' href="#">Our Work</a>
            <a onClick={()=>setSidebarOpen(false)} className='sm:hover:border-b' href="#">Contact Us</a>
        </div>

        <div className='flex gap-2 sm:gap-4 items-center'>
          <ThemeToggleBtn theme={theme} setTheme={setTheme}/>
          <img src={theme=='dark'?assets.menu_icon_dark:assets.menu_icon} alt="menu icon" className='w-8 sm:hidden cursor-pointer' onClick={()=>setSidebarOpen(true)} />
          <a href="" className= 'text-sm max-sm:hidden flex items-center gap-2 text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all bg-primary'>
            Connect <img  src={assets.arrow_icon} width={14} alt="" />
          </a>
         
        </div>
    </div>
  )
}

export default Navbar