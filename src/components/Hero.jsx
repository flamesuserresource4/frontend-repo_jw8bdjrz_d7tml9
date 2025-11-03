import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="explore" className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glow overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[60vh] w-[60vh] rounded-full bg-fuchsia-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[50vh] w-[50vh] rounded-full bg-indigo-500/20 blur-[120px]" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 flex min-h-screen items-center">
        <div className="max-w-3xl text-white">
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide uppercase border border-white/15 mb-6">
            Immersive • 3D • Interactive
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Step into a cyber‑futuristic web experience
          </h1>
          <p className="mt-5 text-white/80 md:text-lg">
            A dark, surreal interface where a retro astronaut meets iridescent motion. Explore a new dimension of interaction right in your browser.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#features"
              className="rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition"
            >
              Discover Features
            </a>
            <a
              href="#about"
              className="rounded-md border border-white/20 bg-white/5 text-white px-5 py-3 font-medium hover:bg-white/10 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
