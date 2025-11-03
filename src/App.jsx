import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter">
      <Navbar />
      <Hero />
      <Highlights />

      {/* About section */}
      <section id="about" className="relative bg-black text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-10 top-10 h-48 w-48 rounded-full bg-fuchsia-500/10 blur-3xl" />
          <div className="absolute right-10 bottom-10 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold">Designed for presence</h3>
              <p className="mt-4 text-white/70">
                This experience blends a 3D hero canvas with clean, modern UI elements. The astronaut and iridescent ribbon invite you to explore — the interface stays out of the way.
              </p>
              <p className="mt-3 text-white/70">
                Motion is purposeful: light parallax on headlines, subtle glow fields, and a marquee rhythm that suggests momentum.
              </p>
            </div>
            <div>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10 p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <p className="text-sm text-white/70">Theme</p>
                    <p className="text-lg">Futuristic • Cyberpunk</p>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <p className="text-sm text-white/70">Medium</p>
                    <p className="text-lg">WebGL 3D</p>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <p className="text-sm text-white/70">Interaction</p>
                    <p className="text-lg">Pointer + Orbit</p>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                    <p className="text-sm text-white/70">Aesthetic</p>
                    <p className="text-lg">Dark • Iridescent</p>
                  </div>
                </div>
                <div className="mt-6 rounded-xl bg-black/30 border border-white/10 p-4">
                  <p className="text-sm text-white/60">Performance</p>
                  <p className="text-white/80">Lazy motion, GPU-accelerated transforms, and overlays that never block 3D interaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
