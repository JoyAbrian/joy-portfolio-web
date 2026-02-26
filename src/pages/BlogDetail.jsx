import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import blogs from "../data/blogs.json";

export default function BlogDetail() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = article.title + " | Joy Abrian Portfolio";
    }, []);

    const { id } = useParams();
    const article = blogs.find((blog) => blog.id === id);

    const renderContent = (text) => {
        return text.split('\n').map((paragraph, index) => {
            if (paragraph.trim().startsWith('###')) {
                return (
                    <h3 key={index} className="font-pixel text-lg text-[#b026ff] mt-8 mb-4">
                        {paragraph.replace('###', '').trim()}
                    </h3>
                );
            }
            if (paragraph.trim() === '') return <br key={index} />;
            return (
                <p key={index} className="mb-4 text-[#e0e0e0] leading-relaxed">
                    {paragraph.trim()}
                </p>
            );
        });
    };

    return (
        <main className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 pt-28 pb-20">

            <div className="max-w-3xl mx-auto">

                <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 font-mono text-sm text-[#b026ff] hover:text-white mb-8 group"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">{"<<"}</span>
                    RETURN_TO_ARCHIVES
                </Link>

                <header className="mb-8 border-b border-[#6b7280]/30 pb-8">
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 font-mono text-xs text-[#6b7280] mb-6">
                        <span className="bg-[#b026ff]/20 border border-[#b026ff] text-[#b026ff] px-2 py-1 font-pixel text-[8px] md:text-[10px]">
                            {article.category}
                        </span>
                        <span>{article.date}</span>
                        <span>·</span>
                        <span className="text-[#b026ff]">{article.readTime} READ</span>
                    </div>

                    <h1 className="font-pixel text-2xl md:text-4xl text-white drop-shadow-[2px_2px_0px_rgba(176,38,255,0.8)] leading-tight mb-6">
                        {article.title}
                    </h1>

                    <div className="flex items-center gap-3 font-mono text-xs">
                        <div className="w-8 h-8 rounded-full border border-[#b026ff] overflow-hidden bg-gray-900">
                            <img src="/images/myself.jpeg" alt={article.author} className="w-full h-full object-cover grayscale" />
                        </div>
                        <div>
                            <p className="text-[#b026ff]">AUTHOR</p>
                            <p className="text-white font-bold">{article.author}</p>
                        </div>
                    </div>
                </header>

                <div className="relative w-full h-64 md:h-96 border border-[#6b7280]/30 mb-10 overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('/images/scanline.png')] opacity-20 mix-blend-overlay z-20 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-[#b026ff]/10 z-10 mix-blend-overlay"></div>
                    <img
                        src={article.coverImg}
                        alt="Article Cover"
                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                </div>

                <article className="font-mono text-sm md:text-base border border-[#6b7280]/20 bg-[#0a0a0f] p-6 md:p-10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    {renderContent(article.content)}
                </article>

                <div className="mt-10 pt-6 border-t border-[#6b7280]/30 flex justify-between items-center font-mono text-xs">
                    <p className="text-[#6b7280]">END_OF_FILE</p>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="text-[#b026ff] hover:text-white transition-colors flex items-center gap-2"
                    >
                        SCROLL_TO_TOP <span className="animate-bounce">{"^"}</span>
                    </button>
                </div>

            </div>
        </main>
    );
}