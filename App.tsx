import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Shorts from './pages/Shorts';
import Community from './pages/Community';
import Watch from './pages/Watch';
import Memes from './pages/Memes';
import { Page } from './types';
import { Search, Bell, MessageCircle, ArrowLeft } from 'lucide-react';
import { SERVICES } from './constants';

function App() {
  const [history, setHistory] = useState<Page[]>([Page.HOME]);
  const currentPage = history[history.length - 1];

  const handleNavigate = (page: Page) => {
    if (page === currentPage) return;
    setHistory((prev) => [...prev, page]);
  };

  const handleBack = () => {
    if (history.length > 1) {
      setHistory((prev) => prev.slice(0, -1));
    }
  };

  const canGoBack = history.length > 1;

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onNavigate={handleNavigate} />;
      case Page.SERVICES:
        return <Services />;
      case Page.SHORTS:
        return <Shorts onBack={handleBack} />;
      case Page.COMMUNITY:
        return <Community />;
      case Page.WATCH:
        return <Watch />;
      case Page.MEMES:
        return <Memes />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  const isFullScreen = currentPage === Page.SHORTS;

  return (
    <div className="bg-fun-bg min-h-screen text-white font-sans overflow-x-hidden">
      {!isFullScreen && (
         <Header 
            currentPage={currentPage} 
            onNavigate={handleNavigate} 
            onBack={handleBack}
            canGoBack={canGoBack}
         />
      )}
      
      {/* Main Container - Pushed right by sidebar on desktop */}
      <div className={`${!isFullScreen ? 'xl:pl-[280px]' : ''} w-full transition-all duration-300`}>
        
        {/* Desktop Top Header (Search & Profile Actions) - Only visible on desktop pages */}
        {!isFullScreen && (
          <div className="hidden xl:flex items-center justify-between px-8 py-5 sticky top-0 z-30 bg-fun-bg/80 backdrop-blur-md">
             <div className="w-1/3 flex items-center gap-4">
                 {/* Back Button */}
                 {canGoBack && (
                     <button 
                        onClick={handleBack}
                        className="w-10 h-10 rounded-full bg-fun-card hover:bg-white/10 flex items-center justify-center border border-white/5 text-slate-300 hover:text-white transition-colors"
                     >
                        <ArrowLeft className="w-5 h-5" />
                     </button>
                 )}

                 {/* Page Title Dynamic or Search */}
                 <div className="relative group w-full">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-fun-dodger transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Search for dancers, events, memes..." 
                      className="w-full bg-fun-card border border-white/5 rounded-full py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-fun-dodger/50 transition-all"
                    />
                 </div>
             </div>
             <div className="flex items-center gap-4">
                 <button className="w-10 h-10 rounded-full bg-fun-card hover:bg-white/10 flex items-center justify-center transition-colors border border-white/5">
                    <Bell className="w-5 h-5 text-slate-300" />
                 </button>
                 <button className="w-10 h-10 rounded-full bg-fun-card hover:bg-white/10 flex items-center justify-center transition-colors border border-white/5 relative" onClick={() => handleNavigate(Page.COMMUNITY)}>
                    <MessageCircle className="w-5 h-5 text-slate-300" />
                    <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-fun-orange rounded-full border-2 border-fun-card"></span>
                 </button>
             </div>
          </div>
        )}

        {/* Content Render */}
        <main className={`min-h-screen ${!isFullScreen ? 'pb-24 xl:pb-0' : ''}`}>
             {renderPage()}
        </main>

      </div>
    </div>
  );
}

export default App;