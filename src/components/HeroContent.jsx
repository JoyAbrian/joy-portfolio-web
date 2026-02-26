import React from 'react';

export default function HeroContent() {
    return (
        <div className="flex-1 border-l-2 md:border-l-4 border-[#00e5ff] pl-4 md:pl-10 py-2 mt-4 lg:mt-0 w-full">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="h-2 w-2 md:h-3 md:w-3 bg-[#00e5ff] rounded-full animate-pulse shadow-[0_0_10px_#00e5ff]"></div>
                <p className="text-[#00e5ff] text-[10px] md:text-sm tracking-widest md:tracking-[0.2em] uppercase font-bold">
                    [ SYSTEM ] CHARACTER PROFILE
                </p>
            </div>

            <h1 className="font-pixel text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 md:mb-8 leading-tight drop-shadow-[2px_2px_0px_rgba(255,0,85,1)] md:drop-shadow-[4px_4px_0px_rgba(255,0,85,1)]">
                ABOUT ME<span className="animate-blink">_</span>
            </h1>

            <div className="text-[#6b7280] text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-2xl leading-relaxed space-y-3 md:space-y-4 font-mono">
                <p>
                    Hello! I am an Indie Game Developer who mostly works behind the screen. I have a strong passion for designing engaging gameplay mechanics, developing both 2D and 3D games based on the ideas and concepts I want to bring to life, and creating imaginative worlds through lines of code.            </p>
                <p>
                    When I'm not dealing with bugs and debugging, I usually experiment with new game prototypes, explore gameplay mechanics, and try different technical approaches to enhance the player experience.            </p>
            </div>

            <div className="mb-8 md:mb-10 p-4 md:p-5 border border-[#6b7280]/30 bg-gray-900/50 backdrop-blur-sm rounded max-w-xl w-full">
                <h3 className="font-pixel text-[10px] md:text-xs text-[#00e5ff] mb-3 md:mb-4">{">>"} CURRENT STATS:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 md:gap-y-3 gap-x-4 md:gap-x-6 font-mono text-xs md:text-base text-white">
                    <div><span className="text-[#6b7280]">CLASS  :</span> Programmer</div>
                    <div><span className="text-[#6b7280]">ENGINE :</span> Unity</div>
                    <div><span className="text-[#6b7280]">WEAPON :</span> C#</div>
                    <div><span className="text-[#6b7280]">SKILL  :</span> OOP, Game Logic</div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 w-full">
                <button
                    onClick={() => alert('Membuka halaman Projects...')}
                    className="flex justify-center items-center bg-[#00e5ff]/10 border border-[#00e5ff] text-[#00e5ff] font-pixel text-[10px] md:text-sm py-3 px-4 md:px-6 hover:bg-[#00e5ff] hover:text-[#0a0a0f] transition-all duration-300 shadow-[0_0_15px_rgba(0,229,255,0.2)] hover:shadow-[0_0_20px_rgba(0,229,255,0.6)] w-full sm:w-auto"
                >
                    <span>[VIEW INVENTORY]</span>
                </button>
                <button
                    onClick={() => alert('Membuka halaman Contact...')}
                    className="flex justify-center items-center border border-[#6b7280] text-[#6b7280] font-pixel text-[10px] md:text-sm py-3 px-4 md:px-6 hover:border-[#ff0055] hover:text-[#ff0055] transition-all duration-300 w-full sm:w-auto"
                >
                    <span>[SEND MESSAGE]</span>
                </button>
            </div>
        </div>
    );
}
