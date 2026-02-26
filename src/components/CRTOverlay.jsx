import React from 'react';

export default function CRTOverlay() {
    return (
        <div>
            <style>
                {`
                    @import url('[https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Share+Tech+Mono&display=swap](https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Share+Tech+Mono&display=swap)');
                    
                    .font-pixel { font-family: 'Press Start 2P', cursive; }
                    .font-mono { font-family: 'Share Tech Mono', monospace; }
                    
                    @keyframes blink {
                        0%, 100% { opacity: 1; }
                        50% { opacity: 0; }
                    }
                    .animate-blink { animation: blink 1s step-end infinite; }
                    
                    .scanlines {
                        position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
                        background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
                                    linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
                        background-size: 100% 4px, 3px 100%;
                        pointer-events: none;
                        z-index: 50;
                    }
                `}
            </style>

            <div className="scanlines"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none z-0"></div>
        </div>
    );
}