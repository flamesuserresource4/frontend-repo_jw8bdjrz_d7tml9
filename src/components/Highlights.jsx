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
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold">Built for immersion</h2>
          <p className="mt-4 text-white/70">
            We blend futuristic design with practical performance to keep you in the flow.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/8 transition">
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
              </div>
              <Icon className="h-6 w-6 text-white/80" />
              <h3 className="mt-4 text-xl font-medium">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
