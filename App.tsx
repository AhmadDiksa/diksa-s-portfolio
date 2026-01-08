import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="relative bg-background text-textPrimary font-sans selection:bg-primary/30">
      <Navbar />
      <main className="flex flex-col w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Contact />
      <ChatWidget />
    </div>
  );
};

export default App;