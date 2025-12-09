import React from 'react';
import { ThumbsUp, MessageSquare, Share2, Gamepad2, Sparkles, Download } from 'lucide-react';
import { FEED_POSTS } from '../constants';

const Memes: React.FC = () => {
  // Mocking more memes for the grid with reliable images
  const memePosts = [
      ...FEED_POSTS.filter(p => p.type === 'meme'),
      {
          id: 'm1',
          author: { name: 'Dank Dancer', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150' },
          time: '1h',
          content: 'My legs after leg day + 2 hour dance rehearsal:',
          image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800', // Tired person/gym
          likes: 4200,
          comments: 69,
          shares: 200,
          type: 'meme' as const
      },
      {
          id: 'm2',
          author: { name: 'Techno Viking', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150' },
          time: '3h',
          content: 'The face you make when the beat drops perfectly.',
          image: 'https://images.unsplash.com/photo-1519671282429-b44660ead0a7?auto=format&fit=crop&w=800', // Excited face
          likes: 1500,
          comments: 40,
          shares: 100,
          type: 'meme' as const
      },
      {
          id: 'm3',
          author: { name: 'Ballet Boi', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150' },
          time: '5h',
          content: 'Trying to act natural when you mess up the choreography.',
          image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=800', // Funny dance pose
          likes: 800,
          comments: 12,
          shares: 50,
          type: 'meme' as const
      },
      {
           id: 'm4',
           author: { name: 'Bass Drop', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150' },
           time: '6h',
           content: 'When the aux cord disconnects at the party.',
           image: 'https://images.unsplash.com/photo-1514525253440-b393452e8770?auto=format&fit=crop&w=800', // Party foul/silence
           likes: 300,
           comments: 5,
           shares: 10,
           type: 'meme' as const
      }
  ];

  return (
    <div className="px-4 xl:px-8 max-w-[1600px] mx-auto pt-8 pb-20">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-fun-violet to-indigo-900 rounded-3xl p-8 mb-8 flex items-center justify-between border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-fun-dodger blur-[100px] opacity-20 rounded-full"></div>
          <div className="relative z-10">
              <h1 className="text-3xl md:text-5xl font-display font-black text-white mb-2 flex items-center gap-3">
                  MemeZone <Gamepad2 className="text-fun-orange w-10 h-10 animate-bounce" />
              </h1>
              <p className="text-indigo-200">The official headquarters of dance humor.</p>
          </div>
          <button className="hidden md:flex bg-white text-indigo-900 font-bold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform items-center gap-2">
              <Sparkles className="w-4 h-4" /> Submit Meme
          </button>
      </div>

      {/* Masonry-ish Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {memePosts.map((post) => (
            <div key={post.id} className="break-inside-avoid bg-fun-card border border-white/5 rounded-2xl overflow-hidden hover:border-fun-orange/50 transition-colors group">
                <div className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src={post.author.avatar} className="w-8 h-8 rounded-full" />
                        <span className="font-bold text-white text-sm">{post.author.name}</span>
                    </div>
                    <span className="text-xs text-slate-500">{post.time}</span>
                </div>
                
                {post.content && (
                    <div className="px-4 pb-2">
                         <p className="text-white text-sm leading-relaxed">{post.content}</p>
                    </div>
                )}

                <div className="relative">
                    <img src={post.image} className="w-full h-auto object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                        <button className="bg-white/10 p-2 rounded-full hover:bg-fun-dodger transition-colors text-white">
                            <ThumbsUp className="w-6 h-6" />
                        </button>
                        <button className="bg-white/10 p-2 rounded-full hover:bg-fun-orange transition-colors text-white">
                            <Share2 className="w-6 h-6" />
                        </button>
                         <button className="bg-white/10 p-2 rounded-full hover:bg-fun-violet transition-colors text-white">
                            <Download className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className="p-3 bg-black/20 flex justify-between items-center text-xs text-slate-400">
                    <span>{post.likes} Likes</span>
                    <span>{post.comments} Comments</span>
                </div>
            </div>
        ))}
      </div>

    </div>
  );
};

export default Memes;