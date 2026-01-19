import React from 'react';
import * as Icons from 'lucide-react';
import { Section } from '../types';

interface NavigationProps {
  sections: Section[];
  activeSectionId: string | null;
  onNavigate: (id: string | null) => void;
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ sections, activeSectionId, onNavigate, isOpen, setIsOpen }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 bottom-0 z-30 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:translate-x-0 flex flex-col
      `}>
        <div className="p-6 border-b border-slate-700">
          <div 
            className="flex items-center gap-2 font-bold text-xl cursor-pointer hover:text-indigo-400 transition-colors"
            onClick={() => {
              onNavigate(null);
              setIsOpen(false);
            }}
          >
            <Icons.BookOpenCheck className="w-8 h-8 text-indigo-400" />
            <span>CourseDes</span>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <button
            onClick={() => {
              onNavigate(null);
              setIsOpen(false);
            }}
            className={`w-full flex items-center gap-3 px-6 py-3 transition-colors ${
              activeSectionId === null 
                ? 'bg-indigo-600 text-white border-r-4 border-white' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <Icons.LayoutDashboard className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </button>

          <div className="mt-6 px-6 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Framework Tools
          </div>

          {sections.map((section) => {
            // Dynamic Icon Rendering
            const IconComponent = (Icons as any)[section.icon] || Icons.FileText;
            
            return (
              <button
                key={section.id}
                onClick={() => {
                  onNavigate(section.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-6 py-3 transition-colors ${
                  activeSectionId === section.id 
                    ? 'bg-indigo-600 text-white border-r-4 border-white' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <IconComponent className="w-5 h-5 min-w-[1.25rem]" />
                <span className="font-medium text-sm text-left">{section.title}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-700 text-xs text-slate-500 text-center">
          Based on work by Dominik Lukeš
        </div>
      </div>
    </>
  );
};
