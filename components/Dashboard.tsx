import React from 'react';
import * as Icons from 'lucide-react';
import { Section, AppData } from '../types';

interface DashboardProps {
  data: AppData;
  onNavigate: (id: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ data, onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
          {data.title}
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          An interactive toolkit to help you browse, discover, and plan courses effectively.
        </p>
        <div className="mt-4 flex items-center justify-center gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1"><Icons.User className="w-4 h-4" /> {data.author}</span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1"><Icons.Calendar className="w-4 h-4" /> {data.lastUpdated}</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.sections.map((section) => {
           const IconComponent = (Icons as any)[section.icon] || Icons.FileText;
           
           return (
            <div 
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl border border-slate-100 p-6 cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <IconComponent className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                {section.title}
              </h3>
              <p className="text-slate-600 line-clamp-3">
                {section.shortDescription}
              </p>
              <div className="mt-4 flex items-center text-indigo-600 font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <Icons.ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
           );
        })}
      </div>
    </div>
  );
};
