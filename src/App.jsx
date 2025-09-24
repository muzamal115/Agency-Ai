import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Teams from './components/Teams';
import ContactUs from './components/ContactUs';
import toast, { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const outlineRef = useRef()
  const dotRef = useRef()
  const mouse = useRef({ x: 0, y: 0 })
  const position = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    document.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      // smooth follow
      position.current.x += (mouse.current.x - position.current.x) * 0.1
      position.current.y += (mouse.current.y - position.current.y) * 0.1

      // move elements
      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${position.current.x - 6}px, ${position.current.y - 6}px, 0)`
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
      }

      // loop
      requestAnimationFrame(animate)
    }

    animate()

    // cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className={'dark:bg-black relative'}>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy />
      <Services />
      <OurWork />
      <Teams />
      <ContactUs />
      <Footer theme={theme} />
      <div
        ref={outlineRef}
        className='fixed top-0 left-0 border w-10 h-10 rounded-full pointer-events-none border-primary z-[9999] transition transform 0.1s ease-out'
      >
      </div>
      <div
        ref={dotRef}
        className='fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none bg-primary z-[9999] '
      >
      </div>
    </div>
  )
}

export default App
