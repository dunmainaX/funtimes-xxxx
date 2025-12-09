import React from 'react';
import { Play, Clock, TrendingUp, Star } from 'lucide-react';
import { TUTORIALS } from '../constants';

const Tutorials: React.FC = () => {
  return (
    <div className="pt-24 px-6 min-h-screen pb-20 max-w-7xl mx-auto">
      
      {/* Featured Header */}
      <div className="relative rounded-3xl overflow-hidden mb-16 border border-white/10 group">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10"></div>
        <img src="https://images.unsplash.com/photo-1545959223-289414e2d37c?auto=format&fit=crop&w=1600" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-[20s]" />
        <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 max-w-2xl">
            <span className="text-brand-400 font-bold tracking-widest text-sm uppercase mb-2 block">New Release</span>
            <h1 className="text-4xl md:text-6xl font-display font-black mb-4">Master The Shuffle</h1>
            <p className="text-lg text-slate-300 mb-8 line-clamp-2">
                Join world-renowned instructor Jay B as he breaks down the fundamentals of shuffling, from the running man to advanced spins.
            </p>
            <div className="flex gap-4">
                <button className="px-8 py-3 bg-brand-600 text-white font-bold rounded-xl hover:bg-brand-500 transition-colors flex items-center">
                    <Play className="w-5 h-5 mr-2 fill-white" /> Play Now
                </button>
                <button className="px-8 py-3 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl hover:bg-white/20 transition-colors">
                    + My List
                </button>
            </div>
        </div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-display font-bold flex items-center gap-2">
            <TrendingUp className="text-brand-500" /> Trending Now
        </h2>
        
        <div className="hidden md:flex gap-2">
             {['All', 'Hip Hop', 'Salsa', 'Fitness'].map((cat, i) => (
                <button key={cat} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${i === 0 ? 'bg-white text-black' : 'bg-white/5 hover:bg-white/10 text-slate-300'}`}>
                    {cat}
                </button>
             ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TUTORIALS.map((tutorial) => (
          <div key={tutorial.id} className="group relative bg-dark-800 rounded-xl overflow-hidden border border-white/5 transition-all duration-300 hover:scale-105 hover:z-20 hover:shadow-2xl">
            
            <div className="relative aspect-video">
              <img 
                src={tutorial.thumbnail} 
                alt={tutorial.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <div className="w-12 h-12 rounded-full bg-brand-600 flex items-center justify-center shadow-lg">
                    <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                 </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-[10px] font-bold text-slate-200">
                {tutorial.duration}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-bold text-white mb-1 truncate">{tutorial.title}</h3>
              <p className="text-xs text-slate-400 mb-3">{tutorial.instructor}</p>
              
              <div className="flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1">
                    <span className={`px-1.5 py-0.5 rounded bg-white/10 text-slate-300 ${tutorial.level === 'Advanced' ? 'text-brand-400 border border-brand-500/20' : ''}`}>
                        {tutorial.level}
                    </span>
                </div>
                <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span>4.8</span>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;