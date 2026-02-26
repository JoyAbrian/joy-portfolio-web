import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function OtherProjectDetail() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { id } = useParams();
    const projectInfo = {
        id: id,
        name: id.toUpperCase().replace(/-/g, '_'),
        type: "Web Application",
        version: "v1.2.4",
        repository: "https://github.com/joyabrian",
        liveUrl: "https://yourwebsite.com",
        description: "Sistem aplikasi web yang dirancang untuk memberikan antarmuka interaktif. Modul ini dioptimalkan untuk performa tinggi dan pengalaman pengguna (UX) yang seamless, dengan struktur komponen yang modular.",
        architecture: [
            { layer: "Frontend", tech: "React.js + Vite" },
            { layer: "Styling", tech: "Tailwind CSS" },
            { layer: "Routing", tech: "React Router DOM" },
            { layer: "Deployment", tech: "Vercel / Netlify" }
        ],
        features: [
            "Sistem routing dinamis dengan penanganan error 404.",
            "Desain responsif untuk perangkat mobile dan desktop.",
            "Integrasi animasi CSS murni dan efek overlay khusus.",
            "Struktur kode berbasis komponen (Component-Based)."
        ],
        wireframeImg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" // Placeholder code/wireframe
    };

    return (
        <main className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 pt-28 pb-20">

            <div className="max-w-5xl mx-auto">

                <Link
                    to="/projects/others"
                    className="inline-flex items-center gap-2 font-mono text-sm text-[#00ffcc] hover:text-white mb-6 group"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">{"<"}</span>
                    cd .. /kembali_ke_direktori
                </Link>

                <div className="border border-[#00ffcc]/30 bg-[#050508] shadow-[0_0_20px_rgba(0,255,204,0.05)]">

                    <div className="bg-[#00ffcc]/10 border-b border-[#00ffcc]/30 p-3 flex justify-between items-center">
                        <span className="font-mono text-xs text-[#00ffcc]">SYSTEM_BLUEPRINT_VIEWER</span>
                        <span className="font-mono text-xs text-[#6b7280]">MOD: {projectInfo.version}</span>
                    </div>

                    <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                        <div className="space-y-8">
                            <div>
                                <h1 className="font-mono text-2xl md:text-4xl text-white font-bold mb-2">
                                    {projectInfo.name}
                                </h1>
                                <p className="font-mono text-sm text-[#00ffcc] mb-4">
                                    {">>"} TYPE: {projectInfo.type}
                                </p>
                                <p className="font-mono text-[#e0e0e0] leading-relaxed text-sm md:text-base border-l-2 border-[#6b7280] pl-4">
                                    {projectInfo.description}
                                </p>
                            </div>

                            <div>
                                <h2 className="font-mono text-lg text-[#00ffcc] mb-3 flex items-center gap-2 border-b border-[#6b7280]/30 pb-2">
                                    <span>[01]</span> TECH_STACK_ARCHITECTURE
                                </h2>
                                <div className="font-mono text-sm border border-[#6b7280]/30">
                                    {projectInfo.architecture.map((item, idx) => (
                                        <div key={idx} className="flex border-b border-[#6b7280]/30 last:border-0">
                                            <div className="w-1/3 bg-gray-900 p-2 text-[#6b7280]">{item.layer}</div>
                                            <div className="w-2/3 p-2 text-white">{item.tech}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="font-mono text-lg text-[#00ffcc] mb-3 flex items-center gap-2 border-b border-[#6b7280]/30 pb-2">
                                    <span>[02]</span> CORE_MODULES
                                </h2>
                                <ul className="font-mono text-sm text-[#e0e0e0] space-y-2 list-disc list-inside">
                                    {projectInfo.features.map((feat, idx) => (
                                        <li key={idx} className="marker:text-[#00ffcc]">{feat}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-6">

                            <div className="border border-[#6b7280]/30 p-2 bg-[#0a0a0f] relative group">
                                <div className="absolute top-2 left-2 bg-[#00ffcc] text-[#0a0a0f] font-mono text-[10px] px-2 py-1 z-10">
                                    VISUAL_PREVIEW
                                </div>
                                <div className="absolute inset-0 bg-[#00ffcc]/10 z-10 mix-blend-overlay opacity-50 group-hover:opacity-0 transition-opacity"></div>
                                <img
                                    src={projectInfo.wireframeImg}
                                    alt="Architecture preview"
                                    className="w-full h-auto object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                />
                            </div>

                            <div className="border border-[#00ffcc]/30 bg-[#00ffcc]/5 p-4 font-mono space-y-4">
                                <p className="text-xs text-[#6b7280]">AVAILABLE_COMMANDS:</p>

                                <a
                                    href={projectInfo.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center bg-[#00ffcc] text-black py-3 text-sm font-bold hover:bg-white transition-colors"
                                >
                                    ./EXECUTE_LIVE_PREVIEW
                                </a>

                                <a
                                    href={projectInfo.repository}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center border border-[#00ffcc] text-[#00ffcc] py-3 text-sm hover:bg-[#00ffcc]/20 transition-colors"
                                >
                                    git clone source_code
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}