import React from "react";
import { Link } from "react-router-dom";
import games from "../../data/games.json";

export default function ProjectShowcase() {
    const randomGames = [...games].sort(() => 0.5 - Math.random()).slice(0, 3);

    return (
        <div>
            <div className="flex items-center gap-3 mb-10 md:mb-12">
                <div className="h-4 w-4 bg-[#ff0055] animate-pulse shadow-[0_0_10px_#ff0055]"></div>
                <h2 className="font-pixel text-lg md:text-2xl text-white drop-shadow-[2px_2px_0px_rgba(255,0,85,0.8)]">
                    LATEST_SAVE_FILES<span className="animate-blink">_</span>
                </h2>
                <div className="flex-1 border-b-2 border-dashed border-[#6b7280]/40 ml-4 hidden md:block"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
                {randomGames.map((proj) => (
                    <Link 
                        key={proj.id} 
                        to={`/projects/games/${proj.id}`}
                        className="h-full flex flex-col"
                    >
                        <div
                            className="group relative h-full border border-[#6b7280]/30 bg-[#0a0a0f] p-4 transition-all duration-300 hover:border-[#00e5ff] hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] hover:-translate-y-2 cursor-pointer flex flex-col"
                        >
                            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00e5ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#00e5ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#00e5ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00e5ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative w-full h-40 md:h-48 mb-5 border border-[#6b7280]/30 overflow-hidden">
                                <div className="absolute inset-0 bg-[#ff0055]/10 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <img
                                    src={proj.image}
                                    alt={proj.title}
                                    className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                                />
                                <div className="absolute top-2 right-2 bg-[#0a0a0f]/90 border border-[#00e5ff] px-2 py-1 z-20 backdrop-blur-sm">
                                    <span className="font-pixel text-[8px] text-[#00e5ff] uppercase tracking-wider">
                                        {proj.engine}
                                    </span>
                                </div>
                            </div>

                            <h3 className="font-pixel text-xs md:text-sm text-[#00e5ff] mb-3 group-hover:text-white transition-colors duration-300 leading-relaxed">
                                {proj.title}
                            </h3>
                            
                            <p className="font-mono text-xs md:text-sm text-[#6b7280] leading-relaxed grow group-hover:text-[#e0e0e0] transition-colors duration-300">
                                {proj.shortDesc}
                            </p>

                            <div className="mt-auto pt-4 border-t border-[#6b7280]/20 flex justify-between items-center font-mono text-xs">
                                <span className="text-[#00e5ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
                                    {">"} PRESS START
                                </span>
                                <span className="text-[#6b7280] bg-gray-900 px-2 py-1 rounded-sm border border-gray-800">
                                    [{proj.id}]
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="flex justify-center">
                <button
                    onClick={() => (window.location.href = "/projects/games")}
                    className="group relative border border-[#ff0055] bg-[#0a0a0f] text-[#ff0055] font-pixel text-[10px] md:text-xs py-4 px-6 md:px-10 overflow-hidden hover:text-white transition-colors duration-300 shadow-[0_0_15px_rgba(255,0,85,0.2)] hover:shadow-[0_0_25px_rgba(255,0,85,0.5)]"
                >
                    <div className="absolute inset-0 bg-[#ff0055] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>

                    <span className="relative z-10 flex items-center gap-2">
                        <span className="group-hover:animate-pulse">▶</span>[
                        BROWSE_ALL_GAMES ]
                    </span>
                </button>
            </div>
        </div>
    );
}