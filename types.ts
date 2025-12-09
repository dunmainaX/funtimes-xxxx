export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  category: 'mc' | 'dance' | 'event' | 'kids';
}

export interface ShortVideo {
  id: string;
  username: string;
  description: string;
  songName: string;
  likes: number;
  comments: number;
  shares: number;
  videoUrl: string;
  avatarUrl: string;
}

export interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
    isVerified?: boolean;
  };
  time: string;
  content: string;
  image?: string;
  video?: string;
  likes: number;
  comments: number;
  shares: number;
  type: 'regular' | 'meme' | 'service' | 'video';
  serviceId?: string; // If it's a sponsored service post
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot' | 'other';
  text: string;
  timestamp: Date;
  senderName?: string;
}

export interface Tutorial {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail: string;
  views: string;
}

export enum Page {
  HOME = 'home',
  SERVICES = 'services', // Marketplace
  SHORTS = 'shorts',
  COMMUNITY = 'community', // Messenger
  WATCH = 'watch', // Tutorials/Videos
  MEMES = 'memes' // Meme Corner
}