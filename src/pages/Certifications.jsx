import React, { useEffect, useState } from 'react';
import certifications from "../data/certifications.json";

export default function Certifications() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Certifications | Joy Abrian Portfolio";
    }, []);

    const certifications2 = [...certifications].sort((a, b) => b.id - a.id);

    const [selectedDoc, setSelectedDoc] = useState(null);

    return (
        <main className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 pt-28 pb-20">

            <div className="max-w-4xl mx-auto mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-3 w-3 bg-[#ffb100] animate-pulse shadow-[0_0_10px_#ffb100]"></div>
                    <p className="text-[#ffb100] text-xs md:text-sm tracking-[0.2em] uppercase font-bold">
                        [ ACHIEVEMENTS_UNLOCKED ]
                    </p>
                </div>
                <h1 className="font-pixel text-2xl md:text-4xl text-white drop-shadow-[2px_2px_0px_rgba(255,177,0,0.8)]">
                    LICENSES_&_CERTIFICATIONS<span className="animate-blink text-[#ffb100]">_</span>
                </h1>
                <p className="font-mono text-[#6b7280] mt-4 text-sm md:text-base max-w-2xl">
                    {">"} Memverifikasi kredensial pemain... [BERHASIL]<br />
                    {">"} Menampilkan daftar lisensi resmi dan pencapaian skill.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
                {certifications2.map((cert) => (
                    <div
                        key={cert.id}
                        className="group relative border border-[#6b7280]/30 bg-[#0a0a0f] p-5 md:p-6 transition-all duration-300 hover:border-[#ffb100] hover:shadow-[0_0_20px_rgba(255,177,0,0.15)] overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#ffb100] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#ffb100] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#ffb100] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#ffb100] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="absolute inset-0 bg-[url('/images/scanline.png')] opacity-0 group-hover:opacity-10 mix-blend-overlay pointer-events-none transition-opacity duration-300"></div>

                        <div className="flex flex-col md:flex-row gap-5 md:gap-6 relative z-10">

                            <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gray-900 border border-[#6b7280]/50 p-1 group-hover:border-[#ffb100] transition-colors duration-300 flex items-center justify-center">
                                <img
                                    src={cert.logo}
                                    alt={`Logo ${cert.issuer}`}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            <div className="flex-1">
                                <h2 className="font-pixel text-sm md:text-base text-white mb-2 group-hover:text-[#ffb100] transition-colors duration-300 leading-relaxed">
                                    {cert.title}
                                </h2>

                                <p className="font-mono text-[#e0e0e0] font-bold text-sm mb-1">
                                    {cert.issuer}
                                </p>

                                <p className="font-mono text-[#6b7280] text-xs mb-1">
                                    Dikeluarkan {cert.issueDate}
                                </p>

                                {cert.credentialId && (
                                    <p className="font-mono text-[#6b7280] text-xs mb-4">
                                        ID Kredensial: <span className="text-[#e0e0e0]">{cert.credentialId}</span>
                                    </p>
                                )}

                                {cert.credentialUrl && (
                                    <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 border border-[#6b7280] group-hover:border-[#ffb100] text-[#6b7280] group-hover:text-[#ffb100] font-mono text-xs px-4 py-2 hover:bg-[#ffb100] hover:text-[#0a0a0f]! transition-all duration-300 mb-2"
                                    >
                                        <span>{">"}</span> SHOW_CREDENTIAL
                                    </a>
                                )}

                                {cert.docs && cert.docs.length > 0 && (
                                    <div className="mt-4 pt-4 border-t border-[#6b7280]/20">
                                        <h3 className="font-pixel text-[10px] text-[#ffb100] mb-3 flex items-center gap-2">
                                            <span className="animate-pulse">★</span> ATTACHMENTS_FOUND:
                                        </h3>
                                        <div className="flex gap-4 overflow-x-auto pb-2">
                                            {cert.docs.map((doc, i) => (
                                                <div
                                                    key={i}
                                                    className="shrink-0 relative cursor-pointer group/doc"
                                                    onClick={() => setSelectedDoc(doc)}
                                                >
                                                    <div className="w-32 h-20 md:w-40 md:h-24 border border-[#6b7280]/40 overflow-hidden relative bg-gray-900">
                                                        <div className="absolute inset-0 bg-[#ffb100]/20 opacity-0 group-hover/doc:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                                                        <img
                                                            src={doc.img}
                                                            alt={doc.title}
                                                            className="w-full h-full object-cover opacity-70 group-hover/doc:opacity-100 group-hover/doc:scale-110 transition-all duration-500"
                                                        />
                                                        <div className="absolute bottom-0 left-0 right-0 bg-black/80 border-t border-[#ffb100]/50 p-1 translate-y-full group-hover/doc:translate-y-0 transition-transform duration-300 z-20">
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

                            <div className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none hidden md:block">
                                <div className="w-24 h-24 border-4 border-[#ffb100] rounded-full flex items-center justify-center rotate-12">
                                    <span className="font-pixel text-[#ffb100] text-[10px] text-center">VERIFIED<br />ASSET</span>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            {selectedDoc && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0a0f]/90 backdrop-blur-sm cursor-pointer"
                    onClick={() => setSelectedDoc(null)}
                >
                    <div
                        className="relative w-full max-w-4xl border border-[#ffb100] bg-[#0a0a0f] shadow-[0_0_30px_rgba(255,177,0,0.2)] cursor-default transition-transform duration-300 scale-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between border-b border-[#ffb100]/50 bg-[#ffb100]/10 p-2 md:p-3">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#ff0055] animate-pulse"></div>
                                <span className="font-mono text-xs md:text-sm text-[#ffb100] uppercase tracking-wider">
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