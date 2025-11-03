import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const NavLink = ({ href, children }) => (
    <a href={href} className="relative text-white/80 hover:text-white transition-colors">
      <span className="after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-white/60 after:transition-all hover:after:w-full">
        {children}
      </span>
    </a>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all ${
        scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500 shadow-[0_0_40px_rgba(217,70,239,0.35)]" />
          <span className="text-white/90 font-semibold tracking-wide">Immersive</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>

        <button
          onClick={() => setOpen((s) => !s)}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-white/15 bg-white/10 text-white px-3 py-2 hover:bg-white/20"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        <a
          href="#explore"
          className="hidden md:inline-flex items-center rounded-md bg-white text-black px-4 py-2 font-medium hover:bg-white/90"
        >
          Explore
        </a>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-white/80">
          <a href="#features" className="py-2 border-t border-white/10">Features</a>
          <a href="#about" className="py-2 border-t border-white/10">About</a>
          <a href="#contact" className="py-2 border-t border-b border-white/10">Contact</a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
