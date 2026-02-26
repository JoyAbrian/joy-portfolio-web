import React from 'react';

export default function Experiences() {
    const experiences = [
        {
            id: 1,
            role: "Back End Developer",
            company: "MSIB BATCH 6 - PT Gits Indonesia",
            type: "Magang",
            duration: "Feb 2024 - Jun 2024 · 5 bln",
            location: "Jarak Jauh",
            logo: "https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?auto=format&fit=crop&q=80&w=150",
            docs: []
        },
        {
            id: 2,
            role: "Web Developer",
            company: "PT. Abbauf Mulia Konsultan Teknologi",
            type: "Magang",
            duration: "Agu 2023 - Des 2023 · 5 bln",
            location: "Jakarta, Indonesia · Jarak Jauh",
            logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=150",
            docs: [
                {
                    title: "Sertifikat Web Developer",
                    img: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=400"
                }
            ]
        },
        {
            id: 3,
            role: "IT Support",
            company: "Dinas Komunikasi dan Informatika Provinsi Jawa Barat",
            type: "Magang",
            duration: "Jun 2022 - Sep 2022 · 4 bln",
            location: "Kota Bandung, Jawa Barat, Indonesia · Di tempat",
            logo: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=150",
            docs: [
                {
                    title: "Sertifikat Magang IT Support",
                    img: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=400"
                }
            ]
        }
    ];

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
                                                        <div key={i} className="shrink-0 relative cursor-pointer group/doc">
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
        </main>
    );
}