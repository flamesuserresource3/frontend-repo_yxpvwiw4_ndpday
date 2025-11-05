import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import SkillsProjects from './components/SkillsProjects';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-sky-500/30 selection:text-white">
      <Hero />
      <About />
      <Education />
      <SkillsProjects />

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <p className="text-sm">© {new Date().getFullYear()} DASARI SAI AKHILESH. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#education" className="hover:text-white">Education</a>
            <a href="#projects" className="hover:text-white">Projects</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
