import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight, Check, Star, Zap } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="px-4 xl:px-8 max-w-[1600px] mx-auto pt-8 pb-20">
      
      {/* Hero Banner */}
      <div className="relative rounded-[2.5rem] overflow-hidden mb-12 p-10 md:p-20 text-center border border-white/10 shadow-2xl shadow-fun-violet/10">
         <div className="absolute inset-0 bg-gradient-to-r from-fun-violet via-fun-card to-fun-bg z-0"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         
         <div className="relative z-10 max-w-3xl mx-auto">
             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 border border-white/10">
                 <Zap className="w-4 h-4 text-fun-orange fill-fun-orange" />
                 <span className="text-xs font-bold text-white tracking-wide uppercase">Premium Entertainment</span>
             </div>
             <h1 className="text-4xl md:text-7xl font-display font-black mb-6 tracking-tight text-white">
                Book the <span className="text-transparent bg-clip-text bg-gradient-to-r from-fun-dodger to-fun-violet">Extraordinary</span>
             </h1>
             <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                Connect with top-tier MCs, dance instructors, and event planners to make your next moment unforgettable.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <button className="bg-white text-fun-violet font-bold py-3 px-8 rounded-xl shadow-lg hover:scale-105 transition-transform">
                     Start Booking
                 </button>
                 <button className="bg-white/5 text-white border border-white/10 font-bold py-3 px-8 rounded-xl hover:bg-white/10 transition-colors">
                     Partner With Us
                 </button>
             </div>
         </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div key={service.id} className="group relative bg-fun-card border border-white/5 rounded-3xl overflow-hidden hover:border-fun-dodger/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-fun-dodger/10 flex flex-col">
            
            <div className="h-64 relative overflow-hidden">
                <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-fun-card via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-1">
                    <Star className="w-3 h-3 text-fun-orange fill-fun-orange" />
                    <span className="text-xs font-bold text-white">4.9</span>
                </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold text-fun-dodger uppercase tracking-wider">{service.category}</span>
                    <span className="text-white font-bold bg-fun-bg px-3 py-1 rounded-lg border border-white/5">{service.price}</span>
                </div>
                
                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-fun-dodger transition-colors">{service.title}</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
                    {service.description}
                </p>

                <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-fun-violet to-fun-dodger text-white font-bold text-sm shadow-lg shadow-fun-violet/20 opacity-90 hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    Book Now <ArrowRight className="w-4 h-4" />
                </button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default Services;