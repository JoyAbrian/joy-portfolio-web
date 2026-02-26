import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function GameDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = gameDetail.title.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") + " | My Game Portfolio";
  }, []);

  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const gameDetail = {
    id: id,
    title: id.replace(/-/g, ' ').toUpperCase(),
    genre: "Action / Platformer",
    engine: "Unity 2022",
    releaseDate: "2023",
    role: "Solo Developer",
    status: "COMPLETED",
    description: "Cyber Neon Run adalah platformer serba cepat yang menguji refleks pemain. Berlatar di sebuah kota mega-struktur distopia di tahun 2142, kamu bermain sebagai 'Glitch', seorang kurir data yang diburu oleh perusahaan keamanan raksasa. Hindari rintangan neon, gunakan kemampuan *dash* untuk melewati laser, dan retas terminal untuk membuka jalan baru.",
    features: [
      "Mekanik pergerakan yang mulus dan responsif",
      "Gaya visual pixel art dengan palet warna neon synthwave",
      "Sistem upgrade kemampuan karakter",
      "Soundtrack elektronik berdebar kencang"
    ],
    cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
    screenshots: [
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800"
    ],
    links: {
      github: "https://github.com",
      play: "https://itch.io"
    }
  };

  return (
    <main className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 pt-28 pb-20">

      <div className="max-w-5xl mx-auto">

        <Link
          to="/projects/games"
          className="inline-flex items-center gap-2 font-mono text-sm text-[#00e5ff] hover:text-white mb-8 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">{"<<"}</span>
          RETURN_TO_DIRECTORY
        </Link>

        <div className="relative w-full h-64 md:h-96 border-2 border-[#6b7280]/50 mb-8 overflow-hidden group">
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0f] via-transparent to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/scanline.png')] opacity-20 mix-blend-overlay z-20 pointer-events-none"></div>
          <img
            src={gameDetail.cover}
            alt="Cover"
            className="w-full h-full object-cover grayscale-0 md:grayscale group-hover:grayscale-0 transition-all duration-700"
          />

          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-30 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="font-pixel text-3xl md:text-5xl text-white drop-shadow-[2px_2px_0px_rgba(0,229,255,0.8)] mb-2">
                {gameDetail.title}
              </h1>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                <span className="bg-[#ff0055]/20 text-[#ff0055] border border-[#ff0055]/50 px-2 py-1">
                  {gameDetail.genre}
                </span>
                <span className="bg-[#00e5ff]/20 text-[#00e5ff] border border-[#00e5ff]/50 px-2 py-1">
                  {gameDetail.engine}
                </span>
              </div>
            </div>

            <a
              href={gameDetail.links.play}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00e5ff] text-[#0a0a0f] font-pixel text-xs md:text-sm py-3 px-6 hover:bg-white transition-colors flex items-center gap-2 w-fit border-2 border-transparent hover:border-[#00e5ff]"
            >
              ▶ PLAY_NOW
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="font-pixel text-lg text-[#00e5ff] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00e5ff]"></span> OVERVIEW
              </h2>
              <p className="font-mono text-[#e0e0e0] leading-relaxed text-sm md:text-base">
                {gameDetail.description}
              </p>
            </section>

            <section>
              <h2 className="font-pixel text-lg text-[#00e5ff] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#ff0055]"></span> KEY_FEATURES
              </h2>
              <ul className="font-mono text-[#6b7280] text-sm md:text-base space-y-2">
                {gameDetail.features.map((feat, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-[#ff0055]">{">"}</span>
                    <span className="hover:text-white transition-colors">{feat}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-pixel text-lg text-[#00e5ff] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00ffcc]"></span> SCREENSHOTS
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {gameDetail.screenshots.map((img, idx) => (
                  <div
                    key={idx}
                    className="border border-[#6b7280]/30 cursor-pointer overflow-hidden group relative"
                    onClick={() => setSelectedImage(img)}
                  >
                    <div className="absolute inset-0 bg-[#00e5ff]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                    <img
                      src={img}
                      alt={`Screenshot ${idx}`}
                      className="w-full h-32 md:h-48 object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="border border-[#6b7280]/30 bg-[#0a0a0f] p-5">
              <h3 className="font-pixel text-xs text-[#6b7280] mb-4 border-b border-[#6b7280]/30 pb-2">
                SYSTEM_INFO
              </h3>

              <div className="space-y-4 font-mono text-sm">
                <div>
                  <p className="text-[#6b7280] text-xs">STATUS</p>
                  <p className={gameDetail.status === 'COMPLETED' ? 'text-[#00ffcc]' : 'text-[#ff0055]'}>
                    {gameDetail.status}
                  </p>
                </div>
                <div>
                  <p className="text-[#6b7280] text-xs">ROLE</p>
                  <p className="text-white">{gameDetail.role}</p>
                </div>
                <div>
                  <p className="text-[#6b7280] text-xs">RELEASE</p>
                  <p className="text-white">{gameDetail.releaseDate}</p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#6b7280]/30">
                <a
                  href={gameDetail.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full border border-[#6b7280] py-2 font-mono text-xs hover:border-white hover:text-white transition-colors"
                >
                  [ VIEW_SOURCE_CODE ]
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a0a0f]/90 backdrop-blur-sm cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-5xl border border-[#00ffcc] bg-[#0a0a0f] p-2 md:p-4 shadow-[0_0_30px_rgba(0,255,204,0.2)]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-[#0a0a0f] border border-[#00ffcc] text-[#00ffcc] font-pixel p-2 hover:bg-[#00ffcc] hover:text-black transition-colors z-50"
            >
              [X]
            </button>
            <div className="relative bg-[#050508]">
              <div className="absolute inset-0 bg-[url('/images/scanline.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
              <img src={selectedImage} alt="Enlarged screenshot" className="w-full max-h-[80vh] object-contain relative z-10" />
            </div>
          </div>
        </div>
      )}

    </main>
  );
}