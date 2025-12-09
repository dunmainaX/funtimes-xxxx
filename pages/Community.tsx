import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Phone, Video, Info, MoreHorizontal, Search, Edit } from 'lucide-react';
import { ChatMessage } from '../types';
import { getBotResponse } from '../services/geminiService';

const Community: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: "Hey! 👋 I'm FunBot. Ready to help you with booking or dance tips.",
      timestamp: new Date(),
      senderName: 'FunBot'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputText,
      timestamp: new Date(),
      senderName: 'You'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // AI Response logic
    try {
      const botText = await getBotResponse(userMsg.text);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botText,
        timestamp: new Date(),
        senderName: 'FunBot'
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error("Bot error", err);
    } finally {
      setIsTyping(false);
    }
  };

  const users = [
      { id: 1, name: 'Mike Hype', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150' },
      { id: 2, name: 'Sarah Dance', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150' },
      { id: 3, name: 'DJ Kool', avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150' },
      { id: 4, name: 'Anna Ballet', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150' },
      { id: 5, name: 'B-Boy Snake', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150' }
  ];

  return (
    <div className="pt-14 h-screen flex bg-slate-950 overflow-hidden">
      
      {/* Left Sidebar: Chats List */}
      <div className="w-full md:w-[360px] border-r border-white/5 flex flex-col bg-slate-900">
        <div className="p-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Chats</h1>
            <div className="flex gap-2">
                <button className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700">
                    <MoreHorizontal className="w-5 h-5" />
                </button>
                <button className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700">
                    <Edit className="w-5 h-5" />
                </button>
            </div>
        </div>
        <div className="px-4 pb-4">
            <div className="bg-slate-800 rounded-full px-3 py-2 flex items-center gap-2">
                <Search className="w-4 h-4 text-slate-400" />
                <input type="text" placeholder="Search Messenger" className="bg-transparent text-sm w-full focus:outline-none" />
            </div>
        </div>
        
        {/* Active Users Horizontal Scroll */}
        <div className="px-4 flex gap-4 overflow-x-auto pb-4 border-b border-white/5 no-scrollbar">
             {users.map(u => (
                 <div key={u.id} className="flex flex-col items-center gap-1 min-w-[60px]">
                     <div className="relative">
                         <img src={u.avatar} className="w-12 h-12 rounded-full object-cover" />
                         <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>
                     </div>
                     <span className="text-xs text-slate-400 truncate w-full text-center">{u.name.split(' ')[0]}</span>
                 </div>
             ))}
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
            <div className="p-2 cursor-pointer bg-slate-800/50 hover:bg-slate-800 rounded-lg mx-2 my-1 flex items-center gap-3">
                 <div className="relative">
                     <div className="w-14 h-14 rounded-full bg-brand-600 flex items-center justify-center text-white">
                         <Bot />
                     </div>
                     <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-slate-900"></div>
                 </div>
                 <div className="flex-1 min-w-0">
                     <h4 className="font-bold text-white">FunBot AI</h4>
                     <p className="text-sm text-slate-400 truncate">Let me know if you need help with booking!</p>
                 </div>
                 <span className="text-xs text-slate-500">Just now</span>
            </div>
            {/* Dummy conversations */}
            {users.slice(0, 3).map(u => (
                <div key={u.id} className="p-2 cursor-pointer hover:bg-slate-800 rounded-lg mx-2 my-1 flex items-center gap-3">
                    <img src={u.avatar} className="w-14 h-14 rounded-full object-cover" />
                    <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-white">{u.name}</h4>
                        <p className="text-sm text-slate-400 truncate">Are you coming to the event tonight?</p>
                    </div>
                    <span className="text-xs text-slate-500">2h</span>
               </div>
            ))}
        </div>
      </div>

      {/* Right Content: Chat Window (Hidden on mobile if list is viewed, but for this demo showing both) */}
      <div className="hidden md:flex flex-1 flex-col bg-slate-950">
         {/* Header */}
         <div className="h-16 border-b border-white/5 flex items-center justify-between px-4 shadow-sm z-10">
            <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                 </div>
                 <div>
                     <h3 className="font-bold">FunBot AI</h3>
                     <span className="text-xs text-green-500">Active now</span>
                 </div>
            </div>
            <div className="flex items-center gap-4 text-brand-500">
                <Phone className="w-6 h-6 cursor-pointer" />
                <Video className="w-6 h-6 cursor-pointer" />
                <Info className="w-6 h-6 cursor-pointer" />
            </div>
         </div>

         {/* Messages */}
         <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex items-end max-w-[70%] gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                         {msg.sender !== 'user' && (
                             <div className="w-7 h-7 rounded-full bg-brand-600 flex items-center justify-center text-xs text-white shrink-0">
                                 <Bot className="w-4 h-4" />
                             </div>
                         )}
                         <div className={`px-4 py-2 rounded-2xl ${
                             msg.sender === 'user' 
                               ? 'bg-brand-600 text-white' 
                               : 'bg-slate-800 text-slate-200 border border-white/5'
                         }`}>
                             <p className="text-sm">{msg.text}</p>
                         </div>
                    </div>
                </div>
            ))}
            {isTyping && (
                <div className="flex items-end gap-2">
                    <div className="w-7 h-7 rounded-full bg-brand-600 flex items-center justify-center shrink-0">
                         <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-slate-800 px-4 py-3 rounded-2xl rounded-tl-none">
                        <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-100"></div>
                            <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
         </div>

         {/* Input */}
         <div className="p-4">
             <form onSubmit={handleSendMessage} className="flex gap-2">
                 <input 
                    type="text" 
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Aa" 
                    className="flex-1 bg-slate-800 rounded-full px-4 py-2 focus:outline-none text-white"
                 />
                 <button type="submit" className="p-2 text-brand-500 hover:bg-slate-800 rounded-full">
                     <Send className="w-6 h-6" />
                 </button>
             </form>
         </div>
      </div>
    </div>
  );
};

export default Community;