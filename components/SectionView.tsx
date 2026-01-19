import React, { useState } from 'react';
import * as Icons from 'lucide-react';
import { Section, ContentBlock, MatrixData, ChecklistCategory } from '../types';

interface SectionViewProps {
  section: Section;
}

const TextRenderer: React.FC<{ blocks: ContentBlock[] }> = ({ blocks }) => (
  <div className="prose prose-indigo max-w-none text-slate-700">
    {blocks.map((block, idx) => {
      switch (block.type) {
        case 'h2': return <h2 key={idx} className="text-2xl font-bold mt-8 mb-4 text-slate-800 pb-2 border-b border-slate-200">{block.content}</h2>;
        case 'h3': return <h3 key={idx} className="text-xl font-bold mt-6 mb-3 text-slate-800">{block.content}</h3>;
        case 'p': return <p key={idx} className="mb-4 leading-relaxed">{block.content}</p>;
        case 'list': return (
          <ul key={idx} className="list-disc pl-6 mb-4 space-y-2">
            {(block.content as string[]).map((li, i) => <li key={i}>{li}</li>)}
          </ul>
        );
        case 'image': return (
            <figure key={idx} className="my-8">
                <img src={block.content as string} alt={block.alt} className="rounded-lg shadow-md w-full max-h-96 object-cover" />
                {block.alt && <figcaption className="text-center text-sm text-slate-500 mt-2">{block.alt}</figcaption>}
            </figure>
        );
        default: return null;
      }
    })}
  </div>
);

const ChecklistRenderer: React.FC<{ data: ChecklistCategory[] }> = ({ data }) => {
    // Local state to track checked items
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

    const toggleItem = (id: string) => {
        setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const totalItems = data.reduce((acc, cat) => acc + cat.items.length, 0);
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    const progress = Math.round((checkedCount / totalItems) * 100) || 0;

    return (
        <div className="space-y-8">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 sticky top-4 z-10 flex items-center justify-between">
                <div>
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Progress</h4>
                    <div className="text-2xl font-bold text-indigo-600">{progress}%</div>
                </div>
                <div className="w-1/2 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 transition-all duration-500" style={{ width: `${progress}%` }}></div>
                </div>
                <button 
                    onClick={() => setCheckedItems({})}
                    className="text-xs text-slate-400 hover:text-red-500"
                >
                    Reset
                </button>
            </div>

            {data.map((category, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
                        <h3 className="text-lg font-bold text-slate-800">{category.title}</h3>
                    </div>
                    <div className="divide-y divide-slate-100">
                        {category.items.map((item) => (
                            <label 
                                key={item.id} 
                                className={`flex items-start gap-4 p-4 cursor-pointer hover:bg-indigo-50/50 transition-colors ${checkedItems[item.id] ? 'bg-indigo-50/30' : ''}`}
                            >
                                <div className="relative flex items-center mt-1">
                                    <input 
                                        type="checkbox" 
                                        className="peer sr-only"
                                        checked={!!checkedItems[item.id]}
                                        onChange={() => toggleItem(item.id)}
                                    />
                                    <div className="w-5 h-5 border-2 border-slate-300 rounded peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-all flex items-center justify-center">
                                        <Icons.Check className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100" />
                                    </div>
                                </div>
                                <span className={`flex-1 text-slate-700 leading-relaxed ${checkedItems[item.id] ? 'text-slate-400 line-through' : ''}`}>
                                    {item.text}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

const MatrixRenderer: React.FC<{ data: MatrixData, type: 'matrix' | 'planner' }> = ({ data, type }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-left border-collapse">
                <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                        {data.columns.map((col) => (
                            <th 
                                key={col.key} 
                                className="p-4 font-bold text-slate-700 text-sm uppercase tracking-wider"
                                style={{ width: col.width }}
                            >
                                {col.header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                    {data.rows.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                            {data.columns.map((col) => {
                                const cellData = row[col.key];
                                return (
                                    <td key={col.key} className="p-4 align-top text-slate-600 text-sm leading-relaxed border-r border-slate-100 last:border-r-0">
                                        {Array.isArray(cellData) ? (
                                            <ul className="list-disc pl-4 space-y-1 marker:text-indigo-300">
                                                {cellData.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            type === 'planner' ? (
                                                <div 
                                                    contentEditable 
                                                    className="min-h-[60px] p-2 rounded border border-transparent hover:border-slate-200 focus:border-indigo-300 focus:bg-white focus:outline-none transition-all"
                                                    suppressContentEditableWarning
                                                >
                                                    {cellData}
                                                </div>
                                            ) : (
                                                <div className="whitespace-pre-wrap font-medium text-slate-800">{cellData}</div>
                                            )
                                        )}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        {type === 'planner' && (
            <div className="bg-indigo-50 p-3 text-center text-xs text-indigo-700 font-medium">
                Tip: This table is editable. Click inside the cells to draft your plan (changes are not saved).
            </div>
        )}
    </div>
  );
};

export const SectionView: React.FC<SectionViewProps> = ({ section }) => {
  const IconComponent = (Icons as any)[section.icon] || Icons.FileText;

  return (
    <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-8 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg">
                <IconComponent className="w-8 h-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{section.title}</h1>
        </div>
        <p className="text-xl text-slate-600 max-w-3xl">{section.shortDescription}</p>
      </header>

      <main>
        {section.type === 'text' && <TextRenderer blocks={section.data as ContentBlock[]} />}
        {section.type === 'checklist' && <ChecklistRenderer data={section.data as ChecklistCategory[]} />}
        {(section.type === 'matrix' || section.type === 'planner') && (
            <MatrixRenderer data={section.data as MatrixData} type={section.type} />
        )}
      </main>
    </div>
  );
};
