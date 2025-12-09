import React from 'react';
import { Home, Tv, Store, Users, Gamepad2, User, Compass, Zap, Search, ArrowLeft } from 'lucide-react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onBack: () => void;
  canGoBack: boolean;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onBack, canGoBack }) => {
  const navItems = [
    { label: 'Home', page: Page.HOME, icon: Home },
    { label: 'Watch', page: Page.WATCH, icon: Tv },
    { label: 'Market', page: Page.SERVICES, icon: Store },
    { label: 'Community', page: Page.COMMUNITY, icon: Users },
    { label: 'FunZone', page: Page.MEMES, icon: Gamepad2 },
  ];

  return (
    <>
      {/* DESKTOP SIDEBAR NAVIGATION */}
      <nav className="hidden xl:flex flex-col fixed left-0 top-0 h-screen w-[280px] bg-fun-bg border-r border-white/5 p-6 z-50">
        
        {/* Logo Area */}
        <div className="mb-10 px-2 flex items-center gap-3 cursor-pointer" onClick={() => onNavigate(Page.HOME)}>
           <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center shadow-lg shadow-fun-violet/30">
               <Zap className="text-white fill-white w-6 h-6" />
           </div>
           <span className="text-3xl font-display font-black tracking-tight text-white">
             Fun<span className="text-transparent bg-clip-text bg-gradient-text">Times</span>
           </span>
        </div>

        {/* User Card Mini */}
        <div className="bg-fun-card border border-white/5 p-3 rounded-2xl mb-8 flex items-center gap-3 shadow-lg">
           <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-fun-dodger to-fun-violet p-[2px]">
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150" className="w-full h-full rounded-full object-cover border-2 border-fun-bg" />
           </div>
           <div>
              <h4 className="font-bold text-sm text-white">Alex Dancer</h4>
              <p className="text-xs text-fun-orange">Pro Member</p>
           </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 space-y-2">
           <p className="text-xs font-bold text-slate-500 uppercase tracking-widest px-4 mb-2">Menu</p>
           {navItems.map((item) => (
             <button
                key={item.label}
                onClick={() => onNavigate(item.page)}
                className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group ${
                  currentPage === item.page
                    ? 'bg-gradient-to-r from-fun-violet to-fun-dodger text-white shadow-lg shadow-fun-violet/20'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
             >
                <item.icon className={`w-5 h-5 ${currentPage === item.page ? 'stroke-2' : 'stroke-1.5'}`} />
                <span className="font-medium text-lg">{item.label}</span>
                {currentPage === item.page && <div className="ml-auto w-1.5 h-1.5 bg-white rounded-full" />}
             </button>
           ))}
        </div>

        {/* Footer Info */}
        <div className="mt-auto px-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-fun-orange/20 to-fun-violet/20 border border-white/10 relative overflow-hidden">
                <div className="relative z-10">
                    <p className="font-bold text-white mb-1">Go Premium</p>
                    <p className="text-xs text-slate-300 mb-3">Get exclusive booking discounts.</p>
                    <button className="bg-white text-fun-violet text-xs font-bold px-3 py-2 rounded-lg w-full">Upgrade</button>
                </div>
            </div>
        </div>
      </nav>

      {/* MOBILE TOP BAR (Back Button + Logo + Search) */}
      <div className="xl:hidden fixed top-0 w-full z-40 bg-fun-bg/90 backdrop-blur-md border-b border-white/5 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
             {canGoBack && (
                 <button onClick={onBack} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 -ml-1 text-white">
                     <ArrowLeft className="w-6 h-6" />
                 </button>
             )}
             <div className="flex items-center gap-2" onClick={() => onNavigate(Page.HOME)}>
                 <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center">
                     <Zap className="text-white fill-white w-4 h-4" />
                 </div>
                 <span className="text-xl font-display font-black text-white">FunTimes</span>
             </div>
          </div>
          <button className="w-9 h-9 bg-fun-card rounded-full flex items-center justify-center border border-white/10">
              <Search className="w-4 h-4 text-slate-300" />
          </button>
      </div>

      {/* MOBILE BOTTOM NAVIGATION */}
      <div className="xl:hidden fixed bottom-0 w-full z-50 glass-nav pb-safe">
        <div className="flex justify-around items-center h-16 px-2">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => onNavigate(item.page)}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                currentPage === item.page ? 'text-fun-dodger' : 'text-slate-500'
              }`}
            >
              <div className={`p-1.5 rounded-xl transition-all ${currentPage === item.page ? 'bg-fun-dodger/10' : ''}`}>
                 <item.icon className={`w-6 h-6 ${currentPage === item.page ? 'fill-fun-dodger/20' : ''}`} />
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;