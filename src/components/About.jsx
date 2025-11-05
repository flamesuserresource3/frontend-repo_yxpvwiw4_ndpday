import React from 'react';
import { User, Sparkles, Code2 } from 'lucide-react';

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-inset ring-white/10">
    {children}
  </span>
);

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-1">
          <div className="inline-flex items-center gap-2 text-sky-300 font-semibold">
            <User className="h-5 w-5" /> Profile
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Akhilesh Dasari</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Passionate and hardworking individual with a strong motive to achieve successful outcomes and deliver excellent results. Always motivated to learn and adapt to new technologies and challenges with a collaborative, peer‑driven approach. Possesses technical skills in Python and basic C. Committed to contributing to organizational success and growth.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Badge>Hardworking</Badge>
            <Badge>Mentally Strong</Badge>
            <Badge>Team Player</Badge>
            <Badge>Curious Learner</Badge>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 p-6 ring-1 ring-white/10">
              <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                <Code2 className="h-5 w-5" /> Technical Skills
              </div>
              <ul className="mt-4 space-y-2 text-slate-200">
                <li><span className="text-slate-400">Programs:</span> Python, Basic C</li>
                <li><span className="text-slate-400">Web:</span> HTML & CSS (Basics)</li>
                <li><span className="text-slate-400">Database:</span> Fundamentals</li>
              </ul>
            </div>

            <div className="rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 p-6 ring-1 ring-white/10">
              <div className="flex items-center gap-2 text-amber-300 font-semibold">
                <Sparkles className="h-5 w-5" /> Highlights
              </div>
              <ul className="mt-4 list-disc list-inside text-slate-200 space-y-2">
                <li>Zenith'24 Hackathon Winner - MLRIT</li>
                <li>Participation in RBI@90 Nationwide Online Quiz 2024</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
