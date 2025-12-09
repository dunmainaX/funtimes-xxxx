import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Music2, Play, MoreHorizontal, ArrowLeft } from 'lucide-react';
import { SHORTS_DATA } from '../constants';

interface ShortsProps {
  onBack: () => void;
}

const Shorts: React.FC<ShortsProps> = ({ onBack }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const height = container.clientHeight;
    const scrollPosition = container.scrollTop;
    const index = Math.round(scrollPosition / height);
    if (index !== activeVideoIndex) {
      setActiveVideoIndex(index);
    }
  };

  return (
    <div className="fixed inset-0 pt-0 bg-black z-40">
      
      {/* Floating Back Button */}
      <button 
          onClick={onBack} 
          className="absolute top-4 left-4 z-50 w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-black/40 transition-colors shadow-lg"
       >
          <ArrowLeft className="w-6 h-6" />
       </button>

      <div 
        className="h-full w-full snap-y snap-mandatory overflow-y-scroll no-scrollbar"
        onScroll={handleScroll}
      >
        {SHORTS_DATA.map((short, index) => (
          <div 
            key={short.id} 
            className="h-full w-full snap-start relative flex justify-center items-center bg-dark-900"
          >
            {/* Main Content Area (Mobile aspect ratio centered on desktop) */}
            <div className="relative w-full md:max-w-[450px] h-full bg-dark-800 md:border-x md:border-white/10 overflow-hidden">
                
                {/* Video Player */}
                <div className="absolute inset-0 bg-black">
                    <video 
                      src={short.videoUrl} 
                      className="w-full h-full object-cover"
                      autoPlay={index === activeVideoIndex}
                      loop
                      muted
                      playsInline
                    />
                    
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 pointer-events-none"></div>
                </div>

                {/* Right Side Actions */}
                <div className="absolute bottom-28 right-4 flex flex-col items-center gap-6 z-20">
                    <div className="relative group cursor-pointer">
                        <div className="w-12 h-12 rounded-full border-2 border-brand-500 p-0.5 overflow-hidden">
                            <img src={short.avatarUrl} className="w-full h-full rounded-full object-cover" />
                        </div>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-brand-500 rounded-full p-0.5 shadow-lg">
                            <div className="w-4 h-4 flex items-center justify-center">
                                <span className="text-white text-[10px] font-bold">+</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-1 cursor-pointer">
                        <div className="p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                            <Heart className={`w-7 h-7 ${index === 0 ? 'fill-brand-500 text-brand-500' : 'text-white'}`} strokeWidth={1.5} />
                        </div>
                        <span className="text-xs font-medium drop-shadow-md text-white">{short.likes}</span>
                    </div>

                    <div className="flex flex-col items-center gap-1 cursor-pointer">
                        <div className="p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                            <MessageCircle className="w-7 h-7 text-white" strokeWidth={1.5} />
                        </div>
                        <span className="text-xs font-medium drop-shadow-md text-white">{short.comments}</span>
                    </div>

                    <div className="flex flex-col items-center gap-1 cursor-pointer">
                        <div className="p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors">
                            <Share2 className="w-7 h-7 text-white" strokeWidth={1.5} />
                        </div>
                        <span className="text-xs font-medium drop-shadow-md text-white">{short.shares}</span>
                    </div>

                    <div className="p-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors cursor-pointer">
                        <MoreHorizontal className="w-6 h-6 text-white" />
                    </div>
                </div>

                {/* Bottom Info Area */}
                <div className="absolute bottom-0 left-0 w-full p-4 pb-8 z-20">
                    <h3 className="text-lg font-bold mb-2 flex items-center gap-2 text-white">
                        {short.username}
                        <span className="text-xs bg-white/20 px-1.5 py-0.5 rounded text-white/90">Follow</span>
                    </h3>
                    <p className="text-sm text-white/90 mb-4 max-w-[85%] leading-relaxed">
                        {short.description}
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-dark-900 flex items-center justify-center border border-white/10 animate-spin-slow">
                            <Music2 className="w-4 h-4 text-brand-400" />
                        </div>
                        <div className="overflow-hidden w-40">
                             <p className="text-xs font-medium whitespace-nowrap animate-marquee text-white">{short.songName} • Original Audio</p>
                        </div>
                    </div>
                </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shorts;