import React from 'react';

export default function ContactSection() {
    const contacts = [
        {
            name: "GitHub",
            url: "https://github.com/JoyAbrian",
            color: "group-hover:border-white group-hover:text-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]",
            desc: "Source Code & Repo",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
            )
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/joy-abrian-rantepasang/",
            color: "group-hover:border-[#00e5ff] group-hover:text-[#00e5ff] group-hover:shadow-[0_0_15px_rgba(0,229,255,0.4)]",
            desc: "Professional Network",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            )
        },
        {
            name: "Itch.io",
            url: "https://ruukaze.itch.io/",
            color: "group-hover:border-[#ff0055] group-hover:text-[#ff0055] group-hover:shadow-[0_0_15px_rgba(255,0,85,0.4)]",
            desc: "Play My Games",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                    <line x1="6" y1="12" x2="10" y2="12"></line>
                    <line x1="8" y1="10" x2="8" y2="14"></line>
                    <line x1="15" y1="13" x2="15.01" y2="13"></line>
                    <line x1="18" y1="11" x2="18.01" y2="11"></line>
                </svg>
            )
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/joyrantepasang/",
            color: "group-hover:border-[#e1306c] group-hover:text-[#e1306c] group-hover:shadow-[0_0_15px_rgba(225,48,108,0.4)]",
            desc: "Visual Logs",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
            )
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/6281356621029",
            color: "group-hover:border-[#00ffcc] group-hover:text-[#00ffcc] group-hover:shadow-[0_0_15px_rgba(0,255,204,0.4)]",
            desc: "Direct Comm Link",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
            )
        }
    ];

    return (
        <div>

            <div className="flex items-center gap-3 mb-8 md:mb-12">
                <div className="h-4 w-4 bg-[#00e5ff] animate-pulse shadow-[0_0_10px_#00e5ff]"></div>
                <h2 className="font-pixel text-lg md:text-2xl text-white drop-shadow-[2px_2px_0px_rgba(0,229,255,0.8)]">
                    NETWORK_CONNECTIONS<span className="animate-blink">_</span>
                </h2>
                <div className="flex-1 border-b-2 border-dashed border-[#6b7280]/40 ml-4 hidden md:block"></div>
            </div>

            <div className="mb-6 font-mono text-xs md:text-sm text-[#00e5ff]">
                <p className="opacity-80">{">"} PINGING SERVERS... [OK]</p>
                <p className="opacity-80">{">"} ESTABLISHING SECURE COMMS_</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {contacts.map((contact, index) => (
                    <a
                        key={index}
                        href={contact.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative border border-[#6b7280]/40 bg-[#0a0a0f] p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1 ${contact.color}`}
                    >
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-inherit opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-inherit opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-inherit opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-inherit opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <div className="absolute inset-0 bg-[url('/images/scanline.png')] opacity-0 group-hover:opacity-10 mix-blend-overlay pointer-events-none transition-opacity"></div>

                        <div className="text-[#6b7280] group-hover:text-inherit transition-colors duration-300 transform group-hover:scale-110">
                            {contact.icon}
                        </div>

                        <div className="text-center">
                            <h3 className="font-pixel text-[10px] md:text-xs text-[#e0e0e0] group-hover:text-inherit transition-colors duration-300 mb-1">
                                {contact.name}
                            </h3>
                            <p className="font-mono text-[9px] md:text-[10px] text-[#6b7280] group-hover:text-inherit/70 transition-colors duration-300">
                                {contact.desc}
                            </p>
                        </div>
                    </a>
                ))}
            </div>

        </div>
    );
}