import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function OtherProjects() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Other Projects | Joy Abrian Portfolio";
    }, []);

    const softwareProjects = [
        {
            id: "porto-v1",
            name: "PERSONAL_PORTFOLIO_V1",
            type: "Web Application",
            stack: ["React", "TailwindCSS"],
            status: "DEPLOYED",
            updated: "2024-05-12",
            desc: "Versi pertama dari portofolio interaktif dengan tema terminal."
        },
        {
            id: "e-commerce-api",
            name: "E-COMMERCE_REST_API",
            type: "Backend Service",
            stack: ["Node.js", "Express", "MongoDB"],
            status: "MAINTENANCE",
            updated: "2024-03-20",
            desc: "Sistem backend tangguh untuk memproses transaksi dan manajemen inventaris."
        },
        {
            id: "task-tracker-app",
            name: "TASK_TRACKER_MOBILE",
            type: "Android App",
            stack: ["Flutter", "Firebase"],
            status: "DEPLOYED",
            updated: "2023-11-05",
            desc: "Aplikasi produktivitas untuk melacak misi dan tugas harian."
        }
    ];

    return (
        <main className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 pt-28 pb-20">

            <div className="max-w-5xl mx-auto mb-10 border border-[#00ffcc]/30 bg-[#0a0a0f] p-6 shadow-[0_0_15px_rgba(0,255,204,0.1)]">
                <div className="flex items-center gap-2 mb-4 border-b border-[#00ffcc]/30 pb-2">
                    <div className="flex gap-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <p className="font-mono text-xs text-[#6b7280] ml-2">root@joy-server:~/software_repository</p>
                </div>
                <h1 className="font-mono text-xl md:text-3xl text-[#00ffcc] mb-2 font-bold">
                    {">"} ls -la ./software_projects
                </h1>
                <p className="font-mono text-[#6b7280] text-sm md:text-base">
                    Total {softwareProjects.length} modul terdeteksi. Silakan pilih modul untuk mengeksekusi detail.
                </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-4 font-mono">
                {softwareProjects.map((proj) => (
                    <Link
                        to={`/projects/others/${proj.id}`}
                        key={proj.id}
                        className="group block border border-[#6b7280]/30 bg-[#050508] hover:bg-[#00ffcc]/10 hover:border-[#00ffcc] transition-all duration-300 p-4 md:p-5 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('/images/scanline.png')] opacity-0 group-hover:opacity-10 mix-blend-overlay pointer-events-none transition-opacity duration-300"></div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">

                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-[#00ffcc] animate-pulse hidden group-hover:inline-block">{"=>"}</span>
                                    <h3 className="text-base md:text-lg text-white group-hover:text-[#00ffcc] transition-colors font-bold">
                                        {proj.name}
                                    </h3>
                                    <span className="text-xs border border-[#6b7280] text-[#6b7280] px-2 py-0.5 rounded-sm">
                                        {proj.type}
                                    </span>
                                </div>
                                <p className="text-sm text-[#6b7280] group-hover:text-[#e0e0e0] transition-colors">
                                    {proj.desc}
                                </p>
                            </div>

                            <div className="flex flex-col md:items-end gap-2 md:min-w-50">
                                <div className="flex flex-wrap gap-2 md:justify-end">
                                    {proj.stack.map((tech, idx) => (
                                        <span key={idx} className="bg-gray-800 text-[#00ffcc] text-[10px] px-2 py-1">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="text-xs text-[#6b7280] flex gap-3">
                                    <span className={proj.status === 'DEPLOYED' ? 'text-green-400' : 'text-yellow-400'}>
                                        [{proj.status}]
                                    </span>
                                    <span>UPD: {proj.updated}</span>
                                </div>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}