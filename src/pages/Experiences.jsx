import React, { useEffect, useState } from 'react';
import experiences from "../data/experiences.json";

export default function Experiences() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Experiences | Joy Abrian Portfolio";
    }, []);

    const [selectedDoc, setSelectedDoc] = useState(null);

    return (
        <main className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 pt-28 pb-20">

            <div className="max-w-4xl mx-auto mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-3 w-3 bg-[#ff0055] animate-pulse shadow-[0_0_10px_#ff0055]"></div>
                    <p className="text-[#ff0055] text-xs md:text-sm tracking-[0.2em] uppercase font-bold">
                        [ PLAYER_HISTORY ]
                    </p>
                </div>
                <h1 className="font-pixel text-2xl md:text-4xl text-white drop-shadow-[2px_2px_0px_rgba(255,0,85,0.8)]">
                    EXPERIENCE_LOGS<span className="animate-blink text-[#00e5ff]">_</span>
                </h1>
                <p className="font-mono text-[#6b7280] mt-4 text-sm md:text-base max-w-2xl">
                    {">"} Mengekstrak data riwayat karir... [BERHASIL]<br />
                    {">"} Menampilkan daftar misi yang telah diselesaikan.
                </p>
            </div>

            <div className="max-w-4xl mx-auto relative">
                <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#00e5ff] via-[#ff0055] to-transparent opacity-30"></div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="relative pl-12 md:pl-20 group">

                            <div className="absolute left-2.75 md:left-6.75 top-6 w-3 h-3 bg-[#0a0a0f] border-2 border-[#00e5ff] rounded-full group-hover:border-[#ff0055] group-hover:bg-[#ff0055] group-hover:shadow-[0_0_10px_#ff0055] transition-all duration-300 z-10"></div>

                            <div className="border border-[#6b7280]/30 bg-[#0a0a0f]/80 backdrop-blur-sm p-5 md:p-6 transition-all duration-300 hover:border-[#00e5ff] hover:-translate-y-1 relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('/images/scanline.png')] opacity-0 group-hover:opacity-10 mix-blend-overlay pointer-events-none transition-opacity duration-300"></div>

                                <div className="flex flex-col md:flex-row gap-5 md:gap-6 relative z-10">
                                    <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gray-900 border border-[#6b7280]/50 p-1 group-hover:border-[#00e5ff] transition-colors duration-300">
                                        <img
                                            src={exp.logo}
                                            alt={`Logo ${exp.company}`}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <h2 className="font-pixel text-sm md:text-base text-white mb-2 group-hover:text-[#00e5ff] transition-colors duration-300 leading-relaxed">
                                            {exp.role}
                                        </h2>

                                        <div className="font-mono text-sm text-[#e0e0e0] mb-3">
                                            <span className="font-bold">{exp.company}</span> <span className="text-[#6b7280]">· {exp.type}</span>
                                        </div>

                                        <div className="font-mono text-xs text-[#6b7280] space-y-1 flex flex-col md:flex-row md:gap-6">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[#ff0055]">TIME:</span> {exp.duration}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[#ff0055]">LOC:</span> {exp.location}
                                            </div>
                                        </div>

                                        {exp.docs && exp.docs.length > 0 && (
                                            <div className="mt-6 pt-4 border-t border-[#6b7280]/20">
                                                <h3 className="font-pixel text-[10px] text-[#00e5ff] mb-3 flex items-center gap-2">
                                                    <span className="animate-pulse">★</span> ATTACHMENTS_FOUND:
                                                </h3>
                                                <div className="flex gap-4 overflow-x-auto pb-2">
                                                    {exp.docs.map((doc, i) => (
                                                        <div
                                                            key={i}
                                                            className="shrink-0 relative cursor-pointer group/doc"
                                                            onClick={() => setSelectedDoc(doc)}
                                                        >
                                                            <div className="w-32 h-20 md:w-40 md:h-24 border border-[#6b7280]/40 overflow-hidden relative bg-gray-900">
                                                                <div className="absolute inset-0 bg-[#00e5ff]/20 opacity-0 group-hover/doc:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                                                                <img
                                                                    src={doc.img}
                                                                    alt={doc.title}
                                                                    className="w-full h-full object-cover opacity-70 group-hover/doc:opacity-100 group-hover/doc:scale-110 transition-all duration-500"
                                                                />
                                                                <div className="absolute bottom-0 left-0 right-0 bg-black/80 border-t border-[#00e5ff]/50 p-1 translate-y-full group-hover/doc:translate-y-0 transition-transform duration-300 z-20">
                                                                    <p className="font-mono text-[8px] md:text-[9px] text-white truncate text-center">
                                                                        {doc.title}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedDoc && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0a0f]/90 backdrop-blur-sm cursor-pointer"
                    onClick={() => setSelectedDoc(null)}
                >
                    <div
                        className="relative w-full max-w-4xl border border-[#00e5ff] bg-[#0a0a0f] shadow-[0_0_30px_rgba(0,229,255,0.2)] cursor-default transition-transform duration-300 scale-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between border-b border-[#00e5ff]/50 bg-[#00e5ff]/10 p-2 md:p-3">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#ff0055] animate-pulse"></div>
                                <span className="font-mono text-xs md:text-sm text-[#00e5ff] uppercase tracking-wider">
                                    {selectedDoc.title}
                                </span>
                            </div>
                            <button
                                onClick={() => setSelectedDoc(null)}
                                className="font-pixel text-[#ff0055] hover:text-white transition-colors text-xs md:text-sm px-2"
                            >
                                [X]
                            </button>
                        </div>

                        <div className="relative p-2 md:p-4 flex justify-center items-center bg-[#050508]">
                            <div className="absolute inset-0 bg-[url('/images/scanline.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
                            <img
                                src={selectedDoc.img}
                                alt={selectedDoc.title}
                                className="max-w-full max-h-[75vh] object-contain relative z-10 border border-[#6b7280]/30"
                            />
                        </div>
                    </div>
                </div>
            )}

        </main>
    );
}