import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react';
import { navLinks } from '../constants/navbar_constants';
const NavItems = () => {
    return(
        <ul className='nav-ul'>
            {
                navLinks.map(({id,name,href}) =>(
                    <li key={id} href={href} className='nav-li'>
                        {name}
                    </li>
                ))
            }
        </ul>
    )
}

const Navbar = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
            <div className="flex items-center px-5 py-4">
                    <a href="#home" className="group flex items-center gap-3">
                        {/* Monogram badge */}
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#35c19f]/40 bg-[#35c19f]/10 font-Rajdhani text-lg font-black leading-none text-[#35c19f] shadow-[0_0_15px_rgba(53,193,159,0.25)] transition-shadow duration-300 group-hover:shadow-[0_0_25px_rgba(53,193,159,0.5)]">
                            NG
                        </span>
                        {/* Name with accent underline on hover */}
                        <span className="flex flex-col leading-none">
                            <span className="font-Rajdhani text-xl font-black uppercase tracking-[0.2em]">
                                Nitish <span className="text-[#35c19f]">Gopinath</span>
                            </span>
                            <span className="mt-1 h-px w-0 bg-gradient-to-r from-[#35c19f] to-transparent transition-all duration-500 group-hover:w-full" />
                        </span>
                    </a>
            </div>
        </header>
      );
}
 
export default Navbar;