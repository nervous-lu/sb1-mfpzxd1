import React from 'react';
import { Play } from 'lucide-react';

interface Stream {
  id: number;
  title: string;
  streamer: string;
  viewers: number;
  thumbnail: string;
}

export default function StreamMatrix() {
  const streams: Stream[] = [
    {
      id: 1,
      title: "Morning Yoga Session",
      streamer: "YogaLife",
      viewers: 1200,
      thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=640&q=80"
    },
    {
      id: 2,
      title: "Cooking Masterclass",
      streamer: "ChefJohn",
      viewers: 850,
      thumbnail: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=640&q=80"
    },
    {
      id: 3,
      title: "Art Workshop",
      streamer: "CreativeSpace",
      viewers: 670,
      thumbnail: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=640&q=80"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {streams.map((stream) => (
        <div key={stream.id} className="group relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={stream.thumbnail}
            alt={stream.title}
            className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-200"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
            <div className="absolute bottom-0 p-4 w-full">
              <h3 className="text-white font-semibold truncate">{stream.title}</h3>
              <div className="flex items-center justify-between text-gray-300 text-sm">
                <span>{stream.streamer}</span>
                <div className="flex items-center gap-1">
                  <Play className="w-4 h-4 fill-current" />
                  <span>{stream.viewers.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}