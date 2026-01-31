
import React from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'home', label: 'Accueil', icon: 'fa-home' },
    { id: 'projects', label: 'Projets', icon: 'fa-code' },
    { id: 'education', label: 'Formation', icon: 'fa-graduation-cap' },
    { id: 'certs', label: 'Certifications', icon: 'fa-certificate' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 pointer-events-none">
      <div className="max-w-2xl mx-auto flex justify-center items-center pointer-events-auto">
        <div className="glass px-6 py-2 rounded-full flex items-center space-x-1 sm:space-x-4 shadow-xl border border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-full transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <i className={`fas ${tab.icon} text-sm`}></i>
              <span className="hidden sm:inline font-medium text-sm">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
