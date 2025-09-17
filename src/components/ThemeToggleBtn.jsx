
import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({theme,setTheme}) => {
   
   useEffect(() => {
    if(theme === 'dark'){
      
      document.documentElement.classList.add('dark')
   
    
    } else {
      console.log('light mode')
      document.documentElement.classList.remove('dark')
      
    }
    localStorage.setItem('theme',theme)
  }, [theme])
  return (
    <>
    <button>
        {
            theme==='dark'?(
                <img src={assets.sun_icon} 
                onClick={() => setTheme("light")}
                className='w-8.5 p-1.5 rounded-full border border-gray-500' alt="" />
            ):
            (
                <img src={assets.moon_icon}
                 onClick={()=>setTheme('dark')}
                 className='w-8.5 p-1.5 rounded-full border border-gray-500'
                alt="" />
            )
        }
    </button>
    </>
  )
}

export default ThemeToggleBtn