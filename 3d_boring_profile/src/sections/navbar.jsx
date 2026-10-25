import React from 'react';
import { navLinks } from '../constants/navbar_constants';
import { LINKS } from '../constants/links';
import useActiveSection from '../hooks/useActiveSection';

// Two looks for the floating bar — switch with NAV_THEME.
//   grey:  Apple's site-wide nav colour (#161617 at 80%) with white text
//   white: Apple's product-page local nav (white at 80%) with dark text
const NAV_THEME = 'white';

const THEMES = {
    grey: {
        bar: 'bg-[rgba(22,22,23,0.8)] shadow-[0_0_0_1px_rgba(255,255,255,0.1)]',
        name: 'text-white',
        link: 'text-white/80 hover:text-white',
        active: 'bg-white/15 text-white',
    },
    white: {
        bar: 'bg-white/80 shadow-[0_0_0_1px_#e6e6e8]',
        name: 'text-ink',
        link: 'text-ink/80 hover:text-ink',
        active: 'bg-black/[0.07] text-ink',
    },
};

const sectionLinks = navLinks.filter((link) => link.href !== '#home');
const sectionIds = sectionLinks.map((link) => link.href.slice(1));

// Floating bar, modelled on Apple's product-page local nav.
// Centered at a fixed width so it doesn't stretch edge to edge on wide screens.
// The link for the section on screen is highlighted as you scroll.
const Navbar = () => {
    const theme = THEMES[NAV_THEME];
    const activeId = useActiveSection(sectionIds);
    return (
        <header className={`fixed left-1/2 top-2.5 z-50 h-[52px] w-[min(760px,calc(100vw-20px))] -translate-x-1/2 rounded-[18px] backdrop-blur-[20px] backdrop-saturate-150 ${theme.bar}`}>
            <nav className="flex h-full items-center justify-between px-5">
                <a href="#home" className={`text-[19px] font-semibold tracking-[-0.01em] ${theme.name}`}>
                    Nitish Gopinath
                </a>
                <div className="flex items-center gap-6">
                    <ul className="hidden items-center gap-2 md:flex">
                        {sectionLinks.map((link) => {
                            const isActive = link.href.slice(1) === activeId;
                            return (
                                <li key={link.id}>
                                    <a
                                        href={link.href}
                                        aria-current={isActive ? 'location' : undefined}
                                        className={`rounded-full px-2.5 py-1 text-[12px] leading-4 transition-colors duration-300 ease-apple ${
                                            isActive ? theme.active : theme.link
                                        }`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            );
                        })}
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
