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
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 text-white">
            <div className="max-w-7xl max-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <div href="/" className="nitis-gopinath-nav button-styles">
                        Nitish Gopinath
                        <div class="absolute inset-0 
                                    before:content-[''] before:absolute before:inset-y-0 before:left-[-100%] 
                                    before:w-1/3 before:bg-gradient-to-r before:from-white/20 before:via-white/60 before:to-white/20 
                                    before:skew-x-12 before:animate-none
                                    group-hover:before:animate-shine">
                        </div>
                    </div>
                </div>
            </div>

        </header>
      );
}
 
export default Navbar;