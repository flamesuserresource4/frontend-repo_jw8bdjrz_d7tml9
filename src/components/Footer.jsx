function Footer() {
  return (
    <footer id="contact" className="bg-black text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-12 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm">© {new Date().getFullYear()} Immersive. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
