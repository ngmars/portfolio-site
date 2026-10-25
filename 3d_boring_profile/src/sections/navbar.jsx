import React from 'react';
import { navLinks } from '../constants/navbar_constants';
import { LINKS } from '../constants/links';

// Two looks for the floating bar — switch with NAV_THEME.
//   grey:  Apple's site-wide nav colour (#161617 at 80%) with white text
//   white: Apple's product-page local nav (white at 80%) with dark text
const NAV_THEME = 'white';

const THEMES = {
    grey: {
        bar: 'bg-[rgba(22,22,23,0.8)] shadow-[0_0_0_1px_rgba(255,255,255,0.1)]',
        name: 'text-white',
        link: 'text-white/80 hover:text-white',
    },
    white: {
        bar: 'bg-white/80 shadow-[0_0_0_1px_#e6e6e8]',
        name: 'text-ink',
        link: 'text-ink/80 hover:text-ink',
    },
};

// Floating bar, modelled on Apple's product-page local nav.
// Centered at a fixed width so it doesn't stretch edge to edge on wide screens.
const Navbar = () => {
    const theme = THEMES[NAV_THEME];
    return (
        <header className={`fixed left-1/2 top-2.5 z-50 h-[52px] w-[min(760px,calc(100vw-20px))] -translate-x-1/2 rounded-[18px] backdrop-blur-[20px] backdrop-saturate-150 ${theme.bar}`}>
            <nav className="flex h-full items-center justify-between px-5">
                <a href="#home" className={`text-[19px] font-semibold tracking-[-0.01em] ${theme.name}`}>
                    Nitish Gopinath
                </a>
                <div className="flex items-center gap-6">
                    <ul className="hidden items-center gap-6 md:flex">
                        {navLinks
                            .filter((link) => link.href !== '#home')
                            .map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={link.href}
                                        className={`text-[12px] transition-colors duration-200 ${theme.link}`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                    </ul>
                    <a
                        href={LINKS.resume}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-accent px-2.5 py-1.5 text-[12px] font-medium leading-4 text-black transition-opacity hover:opacity-90"
                    >
                        Résumé
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
