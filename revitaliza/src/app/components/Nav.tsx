'use client';

import { useState } from 'react';
import Image from 'next/image';
import logo from "../../../public/sponsors/_logo.png";

const links = [
  ['#patrocinadores', 'Patrocinadores'],
  ['#sobre', 'Sobre'],
  ['#numeros', 'Números'],
  ['#fundador', 'Fundador'],
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-ink/90 backdrop-blur border-b border-gold/20">
      <div className="max-w-6xl mx-auto h-20 px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3">
          <Image src={logo} alt="ConstruFavela 2026" className="h-14 w-auto" priority />
        </a>
        <button onClick={() => setOpen(o => !o)} aria-expanded={open} aria-label="Menu" className="md:hidden text-gold p-2">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <ul className={`${open ? 'flex' : 'hidden'} md:flex absolute md:static top-20 inset-x-0 flex-col md:flex-row bg-ink md:bg-transparent border-b md:border-0 border-gold/20 md:items-center gap-1 md:gap-8 p-4 md:p-0 font-display text-xl tracking-wide`}>
          {links.map(([href, label]) => (
            <li key={href}><a href={href} onClick={close} className="block py-2 hover:text-gold transition">{label}</a></li>
          ))}
          <li><a href="https://wa.me/5511962696366" target="_blank" rel="noopener noreferrer" onClick={close} className="inline-block bg-gold text-black px-6 py-2 rounded hover:bg-gold-light transition">Quero expor</a></li>
        </ul>
      </div>
    </nav>
  );
}
