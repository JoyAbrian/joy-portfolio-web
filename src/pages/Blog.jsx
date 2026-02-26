import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const logs = [
        {
            id: "membuat-efek-crt-css",
            title: "Membuat Efek Monitor CRT Jadul dengan CSS murni",
            date: "2024-05-20",
            category: "TUTORIAL",
            readTime: "5 MIN",
            summary: "Bagaimana cara membuat efek scanline, vignette, dan RGB split hanya menggunakan CSS untuk website portofolio bertema retro.",
            coverImg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: "devlog-ai-musuh-platformer",
            title: "DEVLOG #1: Merancang AI Sederhana untuk Musuh Platformer",
            date: "2024-04-12",
            category: "GAME DEV",
            readTime: "8 MIN",
            summary: "Catatan pengembangan game Cyber Neon Run. Membahas implementasi state machine untuk musuh yang bisa berpatroli dan mengejar pemain.",
            coverImg: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: "godot-vs-unity-2024",
            title: "Godot vs Unity: Engine Mana yang Cocok untuk Solo Dev?",
            date: "2024-02-28",
            category: "OPINION",
            readTime: "6 MIN",
            summary: "Mengevaluasi kelebihan dan kekurangan dari kedua engine populer ini berdasarkan pengalaman pribadi membuat game 2D dan 3D.",
            coverImg: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <main className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 pt-28 pb-20">

            <div className="max-w-4xl mx-auto mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-3 w-3 bg-[#b026ff] animate-pulse shadow-[0_0_10px_#b026ff]"></div>
                    <p className="text-[#b026ff] text-xs md:text-sm tracking-[0.2em] uppercase font-bold">
                        [ DATA_ARCHIVES ]
                    </p>
                </div>
                <h1 className="font-pixel text-2xl md:text-4xl text-white drop-shadow-[2px_2px_0px_rgba(176,38,255,0.8)]">
                    SYSTEM_JOURNAL<span className="animate-blink text-[#b026ff]">_</span>
                </h1>
                <p className="font-mono text-[#6b7280] mt-4 text-sm md:text-base max-w-2xl">
                    {">"} Mengakses memori penyimpanan lokal... [OK]<br />
                    {">"} Mengekstrak log pemikiran dan catatan teknis.
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
                {logs.map((log) => (
                    <article
                        key={log.id}
                        className="group relative border border-[#6b7280]/30 bg-[#0a0a0f] transition-all duration-300 hover:border-[#b026ff] hover:shadow-[0_0_20px_rgba(176,38,255,0.15)] flex flex-col md:flex-row overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#b026ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#b026ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>

                        <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden bg-gray-900 shrink-0">
                            <div className="absolute inset-0 bg-[#b026ff]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay pointer-events-none"></div>
                            <img
                                src={log.coverImg}
                                alt={log.title}
                                className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                            />

                            <div className="absolute top-3 left-3 md:hidden z-20">
                                <span className="bg-[#0a0a0f]/90 border border-[#b026ff] px-2 py-1 font-pixel text-[8px] text-[#b026ff]">
                                    {log.category}
                                </span>
                            </div>
                        </div>

                        <div className="p-5 md:p-6 flex flex-col justify-between flex-1 relative z-10">
                            <div className="absolute inset-0 bg-[url('/images/scanline.png')] opacity-0 group-hover:opacity-10 mix-blend-overlay pointer-events-none transition-opacity duration-300"></div>

                            <div>
                                <div className="flex items-center gap-4 mb-3 font-mono text-xs text-[#6b7280]">
                                    <span className="hidden md:inline-block bg-[#0a0a0f] border border-[#b026ff] px-2 py-1 font-pixel text-[8px] text-[#b026ff] group-hover:bg-[#b026ff] group-hover:text-white transition-colors">
                                        {log.category}
                                    </span>
                                    <span className="flex items-center gap-1"><span className="text-[#b026ff]">DATE:</span> {log.date}</span>
                                    <span className="flex items-center gap-1"><span className="text-[#b026ff]">READ:</span> {log.readTime}</span>
                                </div>

                                <h2 className="font-pixel text-base md:text-lg text-white mb-3 group-hover:text-[#b026ff] transition-colors duration-300 leading-relaxed">
                                    <Link to={`/blog/${log.id}`} className="hover:underline decoration-[#b026ff] underline-offset-4">
                                        {log.title}
                                    </Link>
                                </h2>

                                <p className="font-mono text-sm text-[#6b7280] leading-relaxed group-hover:text-[#e0e0e0] transition-colors duration-300">
                                    {log.summary}
                                </p>
                            </div>

                            <div className="mt-5 pt-4 border-t border-[#6b7280]/20 flex justify-end">
                                <Link
                                    to={`/blog/${log.id}`}
                                    className="font-mono text-xs text-[#b026ff] group-hover:text-white transition-colors flex items-center gap-2"
                                >
                                    <span className="group-hover:translate-x-1 transition-transform">DECRYPT_FILE {">>"}</span>
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}