import React, { useState } from 'react';
import educationData from '../../data/education.json';

export default function EducationSection() {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <div className="w-full font-mono text-gray-200 mb-16">
            <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest text-emerald-400 border-b-2 border-emerald-500/50 pb-2 inline-block">
                &gt; Education_Log
            </h2>
            <div className="border-l-2 border-gray-800 pl-6 md:pl-10 relative ml-2">
                {educationData.map((edu) => (
                    <div key={edu.id} className="relative mb-12 last:mb-0">
                        <div className="absolute w-4 h-4 bg-gray-900 border-2 border-emerald-500 rounded-full -left-8.25 md:-left-12.25 top-1"></div>
                        
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-emerald-500 text-xs font-bold tracking-widest uppercase">
                                    [{edu.period}]
                                </span>
                                {edu.period.toLowerCase().includes('sekarang') && (
                                    <span className="flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center gap-4 mb-2">
                                {edu.logo && (
                                    <img 
                                        src={edu.logo} 
                                        alt="Logo UNHAS" 
                                        className="w-10 h-10 md:w-12 md:h-12 object-contain filter drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]" 
                                    />
                                )}
                                <h3 className="text-2xl font-bold text-gray-100 uppercase tracking-tight">
                                    {edu.institution}
                                </h3>
                            </div>

                            <div className="flex flex-col gap-1 mt-1">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-emerald-400/90 italic">
                                <div className="flex items-center gap-1">
                                    {edu.faculty && <span>{edu.faculty}</span>}

                                    {edu.faculty && edu.major && (
                                        <span className="hidden sm:block opacity-50">|</span>
                                    )}

                                    {edu.major && (
                                        <span className="font-bold uppercase tracking-tight text-emerald-300">
                                        {edu.major}
                                        </span>
                                    )}
                                    </div>
                                </div>
                                
                                {edu.gpa && (
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded text-emerald-500 font-bold tracking-tighter">
                                            STAT: GPA
                                        </span>
                                        <span className="text-sm font-bold text-gray-100">{edu.gpa}</span>
                                    </div>
                                )}
                            </div>

                            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-3xl">
                                {edu.description}
                            </p>

                            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {edu.gallery.map((img, idx) => (
                                    <div 
                                        key={idx} 
                                        className="aspect-video overflow-hidden rounded border border-gray-800 bg-gray-900 group cursor-zoom-in"
                                        onClick={() => setSelectedImg(img)}
                                    >
                                        <img 
                                            src={img} 
                                            alt={`Documentation ${idx}`} 
                                            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 shadow-lg"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImg && (
                <div 
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300"
                    onClick={() => setSelectedImg(null)}
                >
                    <div className="relative max-w-5xl w-full flex flex-col items-center">
                        <button 
                            className="absolute -top-12 right-0 text-white hover:text-emerald-400 font-bold uppercase tracking-widest transition-colors"
                            onClick={() => setSelectedImg(null)}
                        >
                            <span>CLOSE</span>
                        </button>
                        <img 
                            src={selectedImg} 
                            alt="Full view" 
                            className="max-h-[80vh] w-auto object-contain border-2 border-emerald-500/30 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}