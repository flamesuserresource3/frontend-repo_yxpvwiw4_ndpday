import React from 'react';
import { Wrench, FolderGit2, Award, Languages } from 'lucide-react';

const Chip = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-inset ring-white/10">
    {children}
  </span>
);

const SkillsProjects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20 grid lg:grid-cols-3 gap-10">
        {/* Skills */}
        <div className="lg:col-span-1 space-y-6">
          <div className="rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 p-6 ring-1 ring-white/10">
            <div className="flex items-center gap-2 text-cyan-300 font-semibold">
              <Wrench className="h-5 w-5" /> Skills
            </div>
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-slate-400 text-sm">Programming</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Chip>Python</Chip>
                  <Chip>Basic C</Chip>
                </div>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Web</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Chip>HTML</Chip>
                  <Chip>CSS</Chip>
                </div>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Strengths</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Chip>Hardworking</Chip>
                  <Chip>Emotional & Mentally Strong</Chip>
                  <Chip>Team Player</Chip>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 p-6 ring-1 ring-white/10">
            <div className="flex items-center gap-2 text-rose-300 font-semibold">
              <Award className="h-5 w-5" /> Certificates
            </div>
            <ul className="mt-4 list-disc list-inside text-slate-200 space-y-2">
              <li>Zenith’24 Hackathon Winners — MLRIT</li>
              <li>Participation in RBI@90 Nationwide Online Quiz 2024</li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 p-6 ring-1 ring-white/10">
            <div className="flex items-center gap-2 text-emerald-300 font-semibold">
              <FolderGit2 className="h-5 w-5" /> FAQ Chat-bot for College Inquiries (LLM)
            </div>
            <p className="mt-3 text-slate-300">
              Designed an LLM-powered chat-bot that answers common admission queries for students and parents: fee structure, minimum rank, faculty, location, transport, hostel facilities, internships, placements, courses, safety, anti‑bullying measures, curriculum, academic calendar, scholarships, and extracurricular activities. The chat history stores previously asked questions and responses for better continuity.
            </p>
          </div>

          <div className="rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 p-6 ring-1 ring-white/10">
            <div className="flex items-center gap-2 text-emerald-300 font-semibold">
              <FolderGit2 className="h-5 w-5" /> Application for GPS Tracking of University Buses
            </div>
            <p className="mt-3 text-slate-300">
              Built a concept application to track university buses in real-time, enabling students to view live locations, estimate arrival times, and plan routes efficiently. Focused on reliability and user-friendly UI for daily commuting.
            </p>
          </div>

          <div className="rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 p-6 ring-1 ring-white/10">
            <div className="flex items-center gap-2 text-violet-300 font-semibold">
              <Languages className="h-5 w-5" /> Languages
            </div>
            <p className="mt-3 text-slate-300">Telugu • Hindi • English</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-12">
        <div className="rounded-xl bg-slate-900/60 p-5 ring-1 ring-white/10">
          <p className="text-center text-slate-300">
            Declaration: I hereby declare that the above-furnished information is true to the best of my knowledge.
          </p>
          <p className="mt-2 text-center text-slate-400">— DASARI SAI AKHILESH</p>
        </div>
      </div>
    </section>
  );
};

export default SkillsProjects;
