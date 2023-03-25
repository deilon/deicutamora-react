import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Nav = () => {

    const [isOpen, setOpen] = useState(false);
    const toggleNav = () => {
        setOpen(!isOpen);
    }
  return (
    <>
    <nav className="relative container mx-auto px-6 my-5 pt-12">
        <div className="flex justify-between items-center">
            <NavLink to="/" className={({isActive}) => isActive ? "text-customWhite logo text-xl font-cascadiacode font-regular" : "text-mutedWhite logo text-xl font-cascadiacode font-regular"}>Deilon Cutamora</NavLink>
            {/* Nav links large devices */}
            <div className="hidden text-base space-x-6 text-mutedWhite font-light lg:flex">
                <NavLink to="/about" className={({isActive}) => isActive ? "text-customWhite" : "hover:text-customWhite"}>About</NavLink>
                <NavLink to="/projects" className={({isActive}) => isActive ? "text-customWhite" : "hover:text-customWhite"}>Projects</NavLink>
                <NavLink to="/contact" className={({isActive}) => isActive ? "text-customWhite" : "hover:text-customWhite"}>Contact</NavLink>
            </div>

            {/* Nav links small devices        
                 Hamburger Icon */}
            <button id="menu-btn" onClick={toggleNav}  className={ isOpen ? "open flex hamburger lg:hidden focus:outline-none" : "closed flex hamburger lg:hidden focus:outline-none"}>
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
            </button>
        </div>
        
        {/* Mobile menu */}
        {/*  */}
        {/* className="absolute flex-col items-center self-end hidden backdrop-blur-md bg-black/30 rounded-md py-8 mt-10 space-y-6 font-bold sm:w-auto sm:self-center left-6 right-6 drop-shadow-md" */}
        <div className="lg:hidden">
            <div id="menu" className={isOpen ? "absolute flex flex-col items-center self-end backdrop-blur-md bg-black/30 rounded-md py-8 mt-10 space-y-6 font-bold sm:w-auto sm:self-center left-6 right-6 drop-shadow-md" : "hidden"}>
                <a href="/" className="hover:text-customWhite">Home</a>
                <a href="/about" className="hover:text-customWhite">About</a>
                <a href="/projects" className="hover:text-customWhite">Projects</a>
                <a href="/contact" className="hover:text-customWhite">Contact</a>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Nav