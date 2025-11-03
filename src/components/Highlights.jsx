import { Rocket, Sparkles, Cpu, Globe } from 'lucide-react';

const features = [
  {
    title: 'Real-time 3D',
    desc: 'Seamless, interactive scenes powered directly in your browser.',
    icon: Rocket,
  },
  {
    title: 'Cinematic Visuals',
    desc: 'Dark, cyberpunk vibes with glowing gradients and wireframes.',
    icon: Sparkles,
  },
  {
    title: 'Optimized Performance',
    desc: 'Smooth animations tuned for responsiveness across devices.',
    icon: Cpu,
  },
  {
    title: 'Web-native',
    desc: 'No plugins needed — built with modern web standards.',
    icon: Globe,
  },
];

function Highlights() {
  return (
    <section id="features" className="relative bg-black text-white py-24">
      {/* Marquee brand strip */}
      <div className="pointer-events-none absolute top-0 left-0 right-0">
        <div className="overflow-hidden border-y border-white/10">
          <div className="flex gap-16 whitespace-nowrap py-3 text-xs uppercase tracking-[0.3em] text-white/60 animate-[scroll_35s_linear_infinite]">
            {Array.from({ length: 30 }).map((_, i) => (
              <span key={i}>Immersive • Realtime • Spatial • Iridescent</span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold">Built for immersion</h2>
          <p className="mt-4 text-white/70">
            We blend futuristic design with practical performance to keep you in the flow.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/8 transition"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
              </div>
              <Icon className="h-6 w-6 text-white/80" />
              <h3 className="mt-4 text-xl font-medium">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-14 flex items-center justify-between gap-6 flex-wrap">
          <p className="text-white/60 max-w-xl">
            Inspired by cinematic sites like lucion.co — bold visuals, understated UI, and motion that feels alive.
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-white hover:bg-white/10"
          >
            Learn about the approach
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </section>
  );
}

export default Highlights;
