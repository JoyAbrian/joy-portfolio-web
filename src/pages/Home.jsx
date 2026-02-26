import React from 'react';
import HeroContent from '../components/HeroContent';
import HeroAvatar from '../components/HeroAvatar';
import ProjectShowcase from '../components/ProjectShowcase';
import ContactSection from '../components/ContactSection';

export default function Home() {
    return (
        <main className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex-1 flex flex-col justify-center pt-24 pb-12 lg:py-0">
            <section className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-8 md:gap-10 lg:gap-16 mt-4 lg:mt-10 lg:pt-20">
                <HeroContent />
                <HeroAvatar />
            </section>

            <section id='projects' className="w-full mx-auto mt-24 md:mt-32 mb-10 z-10 relative">
                <ProjectShowcase />
            </section>

            <section id='contact' className="w-full mx-auto mt-24 md:mt-32 mb-10 z-10 relative">
                <ContactSection />
            </section>
        </main>
    );
}