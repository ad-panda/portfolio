
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import AIAssistant from './components/AIAssistant';
import { PROJECTS, EDUCATION, CERTIFICATIONS } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 animate-in fade-in duration-700">
            <div className="relative mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-40 animate-pulse"></div>
              <img 
                src="https://picsum.photos/seed/profile/200/200" 
                alt="Profile" 
                className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-white/10 object-cover"
              />
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 tracking-tight">
              Bonjour, je suis <span className="text-gradient">Marc-Antoine</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-400 mb-8 max-w-2xl font-light">
              Développeur & Assistant IT / Data passionné par la résolution de problèmes complexes grâce à la technologie.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a href="#" className="bg-white text-slate-950 px-8 py-3 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105">
                <i className="fas fa-download mr-2"></i> Télécharger CV
              </a>
              <a href="#" className="glass px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all transform hover:scale-105">
                <i className="fas fa-envelope mr-2"></i> Contactez-moi
              </a>
            </div>
            <div className="flex space-x-6 text-2xl text-slate-500">
              <a href="#" className="hover:text-blue-400 transition-colors"><i className="fab fa-github"></i></a>
              <a href="#" className="hover:text-blue-600 transition-colors"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="py-24 px-4 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">Mes <span className="text-gradient">Projets</span></h2>
              <p className="text-slate-400 max-w-xl mx-auto">Une sélection de mes travaux récents en développement web, analyse de données et systèmes IT.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="py-24 px-4 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">Ma <span className="text-gradient">Formation</span></h2>
              <p className="text-slate-400">Mon parcours académique et mes domaines d'expertise.</p>
            </div>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
              {EDUCATION.map((edu, index) => (
                <div key={edu.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:border-blue-500 group-hover:scale-110 transition-all shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <i className="fas fa-graduation-cap text-xs text-blue-500"></i>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl shadow-xl border-slate-800 hover:border-blue-500/30 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-blue-400">{edu.period}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                    <div className="text-sm font-medium text-slate-300 mb-4">{edu.institution}</div>
                    <p className="text-sm text-slate-400 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'certs':
        return (
          <div className="py-24 px-4 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-500">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-bold mb-4">Mes <span className="text-gradient">Certifications</span></h2>
              <p className="text-slate-400">Validation de mes compétences par des organismes reconnus.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CERTIFICATIONS.map(cert => (
                <div key={cert.id} className="glass p-8 rounded-3xl flex flex-col items-center text-center group hover:bg-white/5 transition-all duration-300 border-white/5 hover:border-blue-500/50">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <i className={`fas ${cert.icon} text-3xl text-blue-500`}></i>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                  <p className="text-slate-400 text-sm mb-4">{cert.issuer}</p>
                  <div className="mt-auto flex flex-col items-center">
                    <span className="text-xs font-bold text-slate-500 mb-4 uppercase tracking-widest">{cert.date}</span>
                    {cert.credentialUrl && (
                      <a href={cert.credentialUrl} className="text-blue-400 text-sm font-semibold hover:underline flex items-center">
                        Voir le diplôme <i className="fas fa-arrow-right ml-2 text-xs"></i>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]"></div>
      </div>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="pt-20">
        {renderContent()}
      </main>

      <footer className="py-12 px-4 text-center text-slate-500 text-sm border-t border-white/5 mt-20">
        <div className="max-w-4xl mx-auto">
          <p>© {new Date().getFullYear()} Marc-Antoine. Construit avec React & Tailwind.</p>
          <p className="mt-2 italic">L'excellence au service de vos données.</p>
        </div>
      </footer>

      <AIAssistant />
    </div>
  );
};

export default App;
