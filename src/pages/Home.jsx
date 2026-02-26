import React from 'react';
import HeroContent from '../components/HeroContent';
import HeroAvatar from '../components/HeroAvatar';

export default function Home() {
    return (
        <main className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex-1 flex flex-col justify-center pt-24 pb-12 lg:py-0">
        
        <section className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-8 md:gap-10 lg:gap-16 mt-8 lg:mt-0 lg:pt-20">
            <HeroContent />
            <HeroAvatar />
        </section>

        <div className="absolute bottom-8 right-8 text-right hidden md:block font-mono">
            <p className="text-[#6b7280] text-xs opacity-50">V 1.0.0</p>
            <p className="text-[#6b7280] text-xs opacity-50">PRESS START TO CONTINUE</p>
        </div>

        </main>
    );
}