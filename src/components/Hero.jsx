import React from 'react';
import Spline from '@splinetool/react-spline';
import { Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 text-sky-300 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-sky-500/20">
            Interactive 3D • Modern • Tech Portfolio
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            DASARI SAI AKHILESH
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Passionate and hardworking developer focused on delivering excellent results and eager to learn new technologies. Strong collaboration mindset and hands-on experience with Python and foundational web technologies.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 text-slate-200">
            <a href="mailto:akhileshdasari123@gmail.com" className="inline-flex items-center gap-2 rounded-lg bg-sky-500/90 hover:bg-sky-400 px-4 py-2 font-medium transition">
              <Mail className="h-4 w-4" /> akhileshdasari123@gmail.com
            </a>
            <a href="tel:9949211284" className="inline-flex items-center gap-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 px-4 py-2 font-medium transition">
              <Phone className="h-4 w-4" /> 9949211284
            </a>
          </div>

          <div className="mt-3 flex items-center gap-2 text-slate-400">
            <MapPin className="h-4 w-4" /> Hyderabad, Telangana
          </div>

          <div className="mt-10 flex gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-emerald-500/90 hover:bg-emerald-400 font-semibold transition">
              View Projects
            </a>
            <a href="#about" className="px-5 py-2.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 font-semibold transition">
              About Me
            </a>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-sky-900/30">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            {/* Soft gradient overlay that doesn't block interactions */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
    </section>
  );
};

export default Hero;
