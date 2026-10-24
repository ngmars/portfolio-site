import React from 'react';
import { navLinks } from '../constants/navbar_constants';
import { LINKS } from '../constants/links';

const Navbar = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-50 h-12 border-b border-white/10 bg-black/70 backdrop-blur-xl backdrop-saturate-150">
            <nav className="mx-auto flex h-full max-w-[980px] items-center justify-between px-4">
                <a href="#home" className="text-[15px] font-semibold tracking-[-0.01em] text-white/90 transition-colors hover:text-white">
                    Nitish Gopinath
                </a>
                <div className="flex items-center gap-7">
                    <ul className="hidden items-center gap-7 md:flex">
                        {navLinks
                            .filter((link) => link.href !== '#home')
                            .map((link) => (
                                <li key={link.id}>
                                    <a
                                        href={link.href}
                                        className="text-[12px] text-white/80 transition-colors duration-200 hover:text-white"
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
                        className="rounded-full bg-accent px-3 py-1 text-[12px] font-medium text-black transition-opacity hover:opacity-90"
                    >
                        Résumé
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
