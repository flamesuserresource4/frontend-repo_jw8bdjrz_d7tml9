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
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold">Designed for presence</h3>
              <p className="mt-4 text-white/70">
                This experience blends a 3D hero canvas with clean, modern UI elements. The astronaut and iridescent ribbon invite you to explore — the interface stays out of the way.
              </p>
              <p className="mt-3 text-white/70">
                Everything is responsive and interactive, tuned for performance so you get silky-smooth motion and crisp visuals across devices.
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
