
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import { PROJECTS, EDUCATION, CERTIFICATIONS } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    // Gestion de la redirection depuis 404.html pour GitHub Pages
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get('p');
    if (redirectPath) {
      const tabId = redirectPath.replace(/^\//, '');
      const validTabs = ['home', 'projects', 'education', 'certs'];
      if (validTabs.includes(tabId)) {
        setActiveTab(tabId);
      }
    }
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="min-h-[85vh] flex flex-col justify-center items-center text-center px-4 animate-in fade-in zoom-in duration-1000">
            <div className="relative mb-10 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                alt="Marc-Antoine" 
                className="relative w-32 h-32 sm:w-48 sm:h-48 rounded-full border-2 border-white/20 object-cover bg-slate-800 shadow-2xl"
              />
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-slate-950 rounded-full"></div>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tight">
              <span className="block text-slate-400 text-lg uppercase tracking-[0.3em] font-medium mb-2">Portfolio de</span>
              <span className="text-gradient">Marc-Antoine DUPONT</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-200 mb-8 max-w-3xl leading-snug">
              Développeur <span className="text-blue-400">&</span> Assistant IT & Data
            </h2>
            
            <p className="text-lg text-slate-400 mb-10 max-w-xl font-light leading-relaxed">
              Expert en déploiement de solutions informatiques, automatisation de workflows et visualisation de données stratégiques.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mb-16">
              <button 
                onClick={() => setActiveTab('projects')}
                className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-1 active:scale-95"
              >
                Explorer mes Projets
              </button>
              <a href="#" className="glass px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all transform hover:-translate-y-1 active:scale-95 border border-white/10">
                <i className="fas fa-file-pdf mr-2 text-blue-400"></i> Télécharger CV
              </a>
            </div>

            <div className="flex space-x-8 text-3xl text-slate-500">
              <a href="https://github.com/ad-panda" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:scale-125"><i className="fab fa-github"></i></a>
              <a href="#" className="hover:text-blue-500 transition-all transform hover:scale-125"><i className="fab fa-linkedin"></i></a>
              <a href="mailto:votre-email@example.com" className="hover:text-pink-500 transition-all transform hover:scale-125"><i className="fas fa-envelope"></i></a>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="py-24 px-4 max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-700">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-6xl font-black mb-4"><span className="text-gradient">Projets</span> Réalisés</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">Découvrez mes dernières réalisations techniques et analyses.</p>
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
          <div className="py-24 px-4 max-w-4xl mx-auto animate-in fade-in slide-in-from-left-12 duration-700">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-6xl font-black mb-4">Ma <span className="text-gradient">Formation</span></h2>
              <p className="text-slate-400 text-lg font-light">Mon parcours académique et mes spécialisations.</p>
            </div>
            <div className="relative space-y-10 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-blue-600/0 before:via-blue-600/50 before:to-blue-600/0">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-950 group-hover:border-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <i className="fas fa-graduation-cap text-xs text-blue-500"></i>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-8 rounded-3xl shadow-2xl border-white/5 hover:border-blue-500/20 transition-all hover:bg-white/[0.05]">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-4 uppercase tracking-widest">{edu.period}</span>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{edu.degree}</h3>
                    <div className="text-md font-medium text-slate-300 mb-4 flex items-center">
                      <i className="fas fa-university mr-2 text-slate-500"></i> {edu.institution}
                    </div>
                    <p className="text-slate-400 leading-relaxed font-light">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'certs':
        return (
          <div className="py-24 px-4 max-w-6xl mx-auto animate-in fade-in slide-in-from-right-12 duration-700">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-6xl font-black mb-4">Mes <span className="text-gradient">Certifications</span></h2>
              <p className="text-slate-400 text-lg font-light">Mes acquis validés par l'industrie.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {CERTIFICATIONS.map(cert => (
                <div key={cert.id} className="glass p-10 rounded-[2.5rem] flex flex-col items-center text-center group hover:bg-white/[0.08] transition-all duration-500 border-white/5 hover:border-blue-500/40 hover:-translate-y-2">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
                    <i className={`fas ${cert.icon} text-4xl text-blue-400`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{cert.name}</h3>
                  <p className="text-slate-400 text-sm mb-6 font-medium">{cert.issuer}</p>
                  <div className="mt-auto w-full pt-6 border-t border-white/5 flex flex-col items-center">
                    <span className="text-xs font-bold text-slate-500 mb-6 uppercase tracking-[0.2em]">{cert.date}</span>
                    {cert.credentialUrl && (
                      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center border border-white/10">
                        Vérifier <i className="fas fa-chevron-right ml-2 text-[10px]"></i>
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
    <div className="min-h-screen relative selection:bg-blue-500/30">
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[150px] animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="container mx-auto">
        {renderContent()}
      </main>

      <footer className="py-20 px-4 text-center border-t border-white/5 mt-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Marc-Antoine Dupont • Développeur & Data Specialist</p>
          <p className="mt-4 text-slate-600 text-xs max-w-md mx-auto leading-relaxed">
            Hébergé sur GitHub Pages via ad-panda.github.io/portfolio/
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
