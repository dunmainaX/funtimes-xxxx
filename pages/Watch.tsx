import React from 'react';
import { Play, MoreHorizontal, Share2, MessageCircle, ThumbsUp, Tv, Search } from 'lucide-react';
import { TUTORIALS } from '../constants';

const Watch: React.FC = () => {
  return (
    <div className="px-4 xl:px-8 max-w-[1600px] mx-auto pt-8 pb-20">
        
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <h1 className="text-3xl font-display font-bold text-white flex items-center gap-3">
                <Tv className="text-fun-dodger" /> FunWatch
            </h1>
            <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                <input type="text" placeholder="Search videos, tutorials..." className="w-full bg-fun-card border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:border-fun-dodger/50 focus:outline-none" />
            </div>
        </div>

        {/* Categories Pills */}
        <div className="flex gap-3 overflow-x-auto pb-6 mb-2 no-scrollbar">
            {['For You', 'Live', 'Dance', 'Comedy', 'Music', 'Gaming', 'Tutorials'].map((cat, i) => (
                <button key={cat} className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${i===0 ? 'bg-white text-fun-bg' : 'bg-fun-card border border-white/10 text-slate-300 hover:bg-white/10'}`}>
                    {cat}
                </button>
            ))}
        </div>

        {/* Grid Layout instead of List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {TUTORIALS.map((video) => (
                <div key={video.id} className="group bg-fun-card border border-white/5 rounded-2xl overflow-hidden hover:border-fun-violet/30 transition-all cursor-pointer">
                    {/* Thumbnail */}
                    <div className="aspect-video relative overflow-hidden">
                        <img src={video.thumbnail} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 rounded text-xs font-bold text-white">
                            {video.duration}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                             <div className="w-12 h-12 rounded-full bg-fun-dodger flex items-center justify-center shadow-lg">
                                 <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                             </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                        <div className="flex gap-3 items-start mb-3">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-fun-orange to-fun-violet flex items-center justify-center shrink-0">
                                 <span className="font-bold text-white text-xs">{video.instructor[0]}</span>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-sm leading-snug line-clamp-2 mb-1 group-hover:text-fun-dodger transition-colors">
                                    {video.title} - Complete Masterclass
                                </h3>
                                <p className="text-xs text-slate-400">
                                    {video.instructor} • {video.views} views • 2h ago
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Watch;