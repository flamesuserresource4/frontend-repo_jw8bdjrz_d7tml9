import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-30 transition-all ${
      scrolled ? 'backdrop-blur-md bg-black/40' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-500" />
          <span className="text-white/90 font-semibold tracking-wide">Immersive</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <a
          href="#explore"
          className="inline-flex items-center rounded-md bg-white/10 px-4 py-2 text-white hover:bg-white/20 backdrop-blur border border-white/15"
        >
          Explore
        </a>
      </div>
    </header>
  );
}

export default Navbar;
