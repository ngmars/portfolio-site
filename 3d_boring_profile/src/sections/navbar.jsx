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
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 text-white">
            <div className="max-w-7xl max-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Nitish Gopinath
                    </a>
                    <button 
                        className = "text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                        aria-label='Toggle menu'
                        onClick={()=> {setIsOpen((toggle)=>!toggle)}}>
                        {
                            isOpen ? (
                                <FontAwesomeIcon className="w-6 h-6" icon="fa-solid fa-circle-xmark" />
                            
                            ):(
                                <FontAwesomeIcon className="w-6 h-6" icon="fa-solid fa-bars" />)
                        }
                        
                    </button>
                    <nav className='sm:flex hidden'>
                        <NavItems />
                    </nav>
                </div>
            </div>

            {/*mobile nav */}
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen': 'max-h-0'}`}>
                    <nav className='p-5'>
                        <NavItems />
                    </nav>
            </div>
        </header>
      );
}
 
export default Navbar;