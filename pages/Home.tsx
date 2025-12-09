import React, { useRef } from 'react';
import { ThumbsUp, MessageSquare, Share2, MoreHorizontal, Image as ImageIcon, Smile, Video, Globe, Zap, ArrowRight, Play } from 'lucide-react';
import { Page } from '../types';
import { SHORTS_DATA, FEED_POSTS, SERVICES } from '../constants';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 xl:px-8 max-w-[1600px] mx-auto pt-4 xl:pt-0">
      
      {/* Main Feed Column */}
      <div className="flex-1 max-w-3xl mx-auto w-full">
        
        {/* Stories / Shorts Carousel */}
        <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
               <h2 className="font-display font-bold text-xl flex items-center gap-2">
                 <Zap className="text-fun-orange fill-fun-orange w-5 h-5" /> 
                 Daily Sparks
               </h2>
               <button onClick={() => onNavigate(Page.SHORTS)} className="text-sm font-bold text-fun-dodger hover:text-white transition-colors">View All</button>
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                {/* Add Story */}
                <div className="min-w-[100px] h-[160px] md:min-w-[120px] md:h-[200px] rounded-2xl bg-fun-card border-2 border-dashed border-white/20 flex flex-col items-center justify-center cursor-pointer hover:border-fun-dodger transition-colors group shrink-0">
                    <div className="w-10 h-10 rounded-full bg-fun-dodger/20 flex items-center justify-center mb-2 group-hover:bg-fun-dodger transition-colors">
                        <span className="text-fun-dodger font-bold text-xl group-hover:text-white">+</span>
                    </div>
                    <span className="text-xs font-bold text-slate-400">Add Story</span>
                </div>

                {SHORTS_DATA.map((short) => (
                    <div 
                        key={short.id} 
                        onClick={() => onNavigate(Page.SHORTS)}
                        className="min-w-[100px] h-[160px] md:min-w-[120px] md:h-[200px] relative rounded-2xl overflow-hidden cursor-pointer group shrink-0 border border-white/10"
                    >
                        {/* Use video thumbnail or placeholder for stories to save bandwidth, but here using video for effect */}
                        <video 
                            src={short.videoUrl} 
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            muted
                            loop
                            onMouseOver={e => e.currentTarget.play()}
                            onMouseOut={e => e.currentTarget.pause()}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 pointer-events-none"></div>
                        <div className="absolute bottom-2 left-2 right-2 pointer-events-none">
                             <p className="text-xs font-bold text-white truncate">{short.username}</p>
                        </div>
                        <div className="absolute top-2 right-2 w-6 h-6 rounded-full border border-white bg-black/30 backdrop-blur-sm overflow-hidden pointer-events-none">
                             <img src={short.avatarUrl} className="w-full h-full object-cover" />
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Create Post */}
        <div className="glass-panel rounded-3xl p-5 mb-8">
            <div className="flex gap-4 mb-4">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1760&auto=format&fit=crop" className="w-12 h-12 rounded-full object-cover border-2 border-fun-violet" />
                <input 
                    type="text" 
                    placeholder="Share your vibe, Alex..." 
                    className="flex-1 bg-fun-bg/50 rounded-2xl px-5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-fun-violet/50 transition-all"
                />
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-white/5">
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white/5 transition-colors text-slate-300 text-sm font-medium">
                        <ImageIcon className="w-5 h-5 text-fun-dodger" /> Photo
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white/5 transition-colors text-slate-300 text-sm font-medium">
                        <Video className="w-5 h-5 text-fun-violet" /> Video
                    </button>
                    <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-white/5 transition-colors text-slate-300 text-sm font-medium">
                        <Smile className="w-5 h-5 text-fun-orange" /> Feeling
                    </button>
                </div>
                <button className="bg-gradient-brand text-white px-6 py-2 rounded-xl font-bold text-sm shadow-lg shadow-fun-violet/20 hover:shadow-fun-violet/40 transition-shadow">
                    Post
                </button>
            </div>
        </div>

        {/* Feed */}
        <div className="space-y-6">
            {FEED_POSTS.map((post) => (
                <div key={post.id} className="glass-panel rounded-3xl overflow-hidden hover:border-white/10 transition-colors">
                    
                    {/* Header */}
                    <div className="p-5 flex items-start justify-between">
                        <div className="flex gap-3">
                            <div className="relative">
                                <img src={post.author.avatar} className="w-12 h-12 rounded-full object-cover border border-white/10" />
                                {post.type === 'service' && (
                                    <div className="absolute -bottom-1 -right-1 bg-fun-orange text-white text-[8px] font-black px-1.5 py-0.5 rounded-full uppercase">PRO</div>
                                )}
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-base flex items-center gap-1">
                                    {post.author.name}
                                    {post.author.isVerified && <Zap className="w-3 h-3 text-fun-dodger fill-fun-dodger" />}
                                </h4>
                                <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                                    <span className="text-fun-dodger font-medium">@{post.author.name.replace(/\s/g, '').toLowerCase()}</span>
                                    <span>•</span>
                                    <span>{post.time}</span>
                                </div>
                            </div>
                        </div>
                        <button className="text-slate-400 hover:text-white p-2 hover:bg-white/5 rounded-full transition-colors">
                            <MoreHorizontal className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="px-5 pb-3">
                        <p className="text-slate-200 leading-relaxed">{post.content}</p>
                    </div>

                    {/* Media Container */}
                    {(post.image || post.video) && (
                        <div className="mt-2 relative">
                            {post.image && <img src={post.image} className="w-full h-auto object-cover max-h-[600px]" />}
                            {post.video && (
                                <div className="relative aspect-video group bg-black">
                                    <video 
                                        src={post.video} 
                                        className="w-full h-full object-cover" 
                                        controls
                                        playsInline
                                    />
                                </div>
                            )}
                            
                            {/* Service Overlay */}
                            {post.type === 'service' && (
                                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-between">
                                    <div>
                                        <p className="text-xs text-fun-orange font-bold uppercase mb-1">Sponsored</p>
                                        <p className="font-bold text-white text-sm">Limited Time Offer</p>
                                    </div>
                                    <button onClick={() => onNavigate(Page.SERVICES)} className="bg-white text-black text-xs font-bold px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors">
                                        Book Now
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Actions */}
                    <div className="p-4">
                        <div className="flex items-center justify-between mb-4 text-xs text-slate-400">
                            <div className="flex items-center gap-1">
                                <ThumbsUp className="w-3 h-3 text-fun-dodger fill-fun-dodger" />
                                <span className="text-white font-bold">{post.likes}</span>
                            </div>
                            <div className="flex gap-3">
                                <span>{post.comments} comments</span>
                                <span>{post.shares} shares</span>
                            </div>
                        </div>
                        <div className="flex gap-2 pt-3 border-t border-white/5">
                            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-fun-dodger transition-all font-medium text-sm">
                                <ThumbsUp className="w-5 h-5" /> Like
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-fun-violet transition-all font-medium text-sm">
                                <MessageSquare className="w-5 h-5" /> Comment
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-fun-orange transition-all font-medium text-sm">
                                <Share2 className="w-5 h-5" /> Share
                            </button>
                        </div>
                    </div>

                </div>
            ))}
        </div>
      </div>

      {/* Right Sidebar (Desktop) - Trending & Suggestions */}
      <div className="hidden lg:block w-[350px] space-y-6">
          
          {/* Trending Panel */}
          <div className="glass-panel rounded-3xl p-6">
              <h3 className="font-display font-bold text-xl mb-4 text-white">Trending Now</h3>
              <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between group cursor-pointer">
                          <div>
                              <p className="text-xs text-slate-500 mb-0.5">Trending in Dance</p>
                              <p className="font-bold text-white group-hover:text-fun-dodger transition-colors">#ShuffleChallenge</p>
                              <p className="text-xs text-slate-400">12.5k Posts</p>
                          </div>
                          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-fun-dodger/20 transition-colors">
                              <MoreHorizontal className="w-4 h-4 text-slate-400 group-hover:text-fun-dodger" />
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          {/* Suggested Services */}
          <div className="glass-panel rounded-3xl p-6">
               <div className="flex justify-between items-center mb-4">
                   <h3 className="font-display font-bold text-xl text-white">Top Pros</h3>
                   <button onClick={() => onNavigate(Page.SERVICES)} className="text-xs text-fun-orange font-bold">See All</button>
               </div>
               <div className="space-y-4">
                   {SERVICES.slice(0, 3).map((s) => (
                       <div key={s.id} className="flex gap-3 items-center group cursor-pointer">
                           <img src={s.image} className="w-12 h-12 rounded-xl object-cover" />
                           <div className="flex-1">
                               <p className="font-bold text-sm text-white line-clamp-1 group-hover:text-fun-violet transition-colors">{s.title}</p>
                               <p className="text-xs text-slate-400">{s.price}</p>
                           </div>
                           <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-fun-violet hover:border-fun-violet hover:text-white transition-all">
                               <ArrowRight className="w-4 h-4" />
                           </button>
                       </div>
                   ))}
               </div>
          </div>

          <div className="text-center">
              <p className="text-xs text-slate-600">
                  Privacy • Terms • Advertising • FunTimes © 2024
              </p>
          </div>
      </div>

    </div>
  );
};

export default Home;