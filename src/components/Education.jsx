import React from 'react';
import { GraduationCap } from 'lucide-react';

const edu = [
  {
    title: 'B.Tech',
    place: 'Vignan’s Foundation for Science, Technology and Research — Hyderabad, India',
    period: '2024 – Present',
    meta: 'CGPA — Ongoing',
  },
  {
    title: 'Intermediate',
    place: 'Narayana Junior College — Hyderabad, India',
    period: '2022 – 2024',
    meta: 'Percentage: 89.6%',
  },
  {
    title: 'Tenth',
    place: 'St. Joseph’s Public School — Hyderabad, India',
    period: '2022',
    meta: 'Percentage: 77.3%',
  },
];

const Education = () => {
  return (
    <section id="education" className="relative w-full bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="flex items-center gap-2 text-indigo-300 font-semibold">
          <GraduationCap className="h-5 w-5" /> Education
        </div>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold">Academic Journey</h2>

        <div className="mt-8 grid gap-6">
          {edu.map((e, idx) => (
            <div key={idx} className="relative rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 p-6 ring-1 ring-white/10">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl font-semibold">{e.title}</h3>
                <span className="text-sm text-slate-400">{e.period}</span>
              </div>
              <p className="mt-2 text-slate-300">{e.place}</p>
              <p className="mt-1 text-slate-400">{e.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
