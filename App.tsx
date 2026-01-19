import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Dashboard } from './components/Dashboard';
import { SectionView } from './components/SectionView';
import { courseData } from './data';

export default function App() {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeSection = activeSectionId 
    ? courseData.sections.find(s => s.id === activeSectionId) 
    : null;

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Navigation 
        sections={courseData.sections}
        activeSectionId={activeSectionId}
        onNavigate={setActiveSectionId}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <div className="flex-1 flex flex-col min-h-screen">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-3 flex items-center sticky top-0 z-10">
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
          <span className="ml-3 font-semibold text-slate-900 truncate">
            {activeSection ? activeSection.title : courseData.title}
          </span>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-12 overflow-y-auto h-screen">
          {activeSection ? (
            <SectionView section={activeSection} />
          ) : (
            <Dashboard data={courseData} onNavigate={setActiveSectionId} />
          )}
        </main>
      </div>
    </div>
  );
}
