import React from 'react';
import skillsData from '../../data/skills.json';

export default function SkillsSection() {
    return (
        <div className="w-full font-mono text-gray-200 mt-32">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 uppercase tracking-widest text-emerald-400 border-b-2 border-emerald-500/50 pb-2 inline-block">
                &gt; Skills_Inventory
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-8">
                {skillsData.map((skill, index) => (
                    <div key={index} className="w-full group">
                        <div className="flex justify-between items-center mb-2">
                            <div className="flex items-center gap-2 md:gap-3">
                                <img 
                                    src={skill.icon} 
                                    alt={skill.name} 
                                    className="w-5 h-5 md:w-6 md:h-6 object-contain grayscale group-hover:grayscale-0 transition-all" 
                                />
                                <span className="uppercase tracking-wider font-bold text-xs md:text-sm text-gray-100">
                                    {skill.name}
                                </span>
                            </div>
                            <span className="text-emerald-400 text-[10px] md:text-xs font-bold">LVL {skill.level}</span>
                        </div>
                        <div className="w-full h-4 md:h-5 border border-gray-700 p-0.5 bg-gray-900/50 rounded shadow-inner">
                            <div 
                                className="h-full bg-emerald-500/80 transition-all duration-1000 ease-out relative overflow-hidden"
                                style={{ width: `${skill.level}%` }}
                            >
                                <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,#000_5px,#000_10px)]"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 text-[10px] md:text-xs animate-pulse text-emerald-500/50 italic">
                [ SYSTEM ] ALL_SKILLS_INITIALIZED...
            </div>
        </div>
    );
}