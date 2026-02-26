import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function GameProjects() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const games = [
        {
            id: "cyber-neon-run",
            title: "CYBER NEON RUN",
            genre: "Platformer",
            engine: "Unity",
            status: "COMPLETED",
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600",
            shortDesc: "Platformer serba cepat berlatar di dunia cyberpunk distopia."
        },
        {
            id: "retro-space-war",
            title: "RETRO SPACE WAR",
            genre: "Arcade Shooter",
            engine: "Godot",
            status: "BETA",
            image: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?auto=format&fit=crop&q=80&w=600",
            shortDesc: "Game tembak-tembakan pesawat bergaya arcade klasik dengan boss fight epik."
        },
        {
            id: "dungeon-crawler",
            title: "DUNGEON CRAWLER",
            genre: "RPG Roguelike",
            engine: "Unreal",
            status: "IN DEVELOPMENT",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600",
            shortDesc: "Jelajahi dungeon tanpa akhir dan kumpulkan loot legendaris."
        },
        {
            id: "pixel-racer",
            title: "PIXEL RACER 2000",
            genre: "Racing",
            engine: "Unity",
            status: "COMPLETED",
            image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600",
            shortDesc: "Balapan bergaya retro dengan mobil kotak-kotak."
        }
    ];

    return (
        <main className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 pt-28 pb-20">

            <div className="max-w-6xl mx-auto mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <div className="h-3 w-3 bg-[#00e5ff] animate-pulse shadow-[0_0_10px_#00e5ff]"></div>
                    <p className="text-[#00e5ff] text-xs md:text-sm tracking-[0.2em] uppercase font-bold">
                        [ GAME_DIRECTORY ]
                    </p>
                </div>
                <h1 className="font-pixel text-2xl md:text-4xl text-white drop-shadow-[2px_2px_0px_rgba(0,229,255,0.8)]">
                    ALL_PROJECTS<span className="animate-blink text-[#ff0055]">_</span>
                </h1>
                <p className="font-mono text-[#6b7280] mt-4 text-sm md:text-base max-w-2xl">
                    {">"} Mengakses database game... [OK]<br />
                    {">"} Ditemukan {games.length} file yang valid.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {games.map((game) => (
                    <Link
                        to={`/projects/games/${game.id}`}
                        key={game.id}
                        className="group relative border border-[#6b7280]/30 bg-[#0a0a0f] p-4 transition-all duration-300 hover:border-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] hover:-translate-y-2 cursor-pointer flex flex-col"
                    >
                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00e5ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#00e5ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#00e5ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00e5ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        <div className="relative w-full h-40 md:h-48 mb-5 border border-[#6b7280]/30 overflow-hidden bg-gray-900">
                            <div className="absolute inset-0 bg-[#00e5ff]/10 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <img
                                src={game.image}
                                alt={game.title}
                                className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                            />
                            <div className="absolute top-2 right-2 flex flex-col gap-1 items-end z-20">
                                <span className="bg-[#0a0a0f]/90 border border-[#00e5ff] px-2 py-1 backdrop-blur-sm font-pixel text-[8px] text-[#00e5ff] uppercase tracking-wider">
                                    {game.engine}
                                </span>
                                <span className={`bg-[#0a0a0f]/90 border px-2 py-1 backdrop-blur-sm font-pixel text-[8px] uppercase tracking-wider ${game.status === 'COMPLETED' ? 'border-[#00ffcc] text-[#00ffcc]' : 'border-[#ff0055] text-[#ff0055]'}`}>
                                    {game.status}
                                </span>
                            </div>
                        </div>

                        <h3 className="font-pixel text-xs md:text-sm text-[#00e5ff] mb-2 group-hover:text-white transition-colors duration-300 leading-relaxed">
                            {game.title}
                        </h3>
                        <p className="font-mono text-[10px] text-[#ff0055] mb-3">GENRE: {game.genre}</p>
                        <p className="font-mono text-xs md:text-sm text-[#6b7280] leading-relaxed flex-1 group-hover:text-[#e0e0e0] transition-colors duration-300">
                            {game.shortDesc}
                        </p>

                        <div className="mt-5 pt-4 border-t border-[#6b7280]/20 flex justify-between items-center font-mono text-xs">
                            <span className="text-[#00e5ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                                {">"} VIEW_DETAILS
                            </span>
                            <span className="text-[#6b7280] bg-gray-900 px-2 py-1 rounded-sm border border-gray-800 group-hover:border-[#6b7280]/50 transition-colors">
                                [OPEN]
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}