import React from 'react';
import { Users, Heart, Share2 } from 'lucide-react';

interface StreamInfoProps {
  title: string;
  streamer: string;
  viewers: number;
  category: string;
  tags: string[];
}

export default function StreamInfo({
  title,
  streamer,
  viewers,
  category,
  tags
}: StreamInfoProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          <p className="text-lg text-blue-600 font-semibold">{streamer}</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            <Heart className="w-5 h-5" />
            <span>Follow</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 text-gray-600">
        <div className="flex items-center gap-1">
          <Users className="w-5 h-5" />
          <span>{viewers.toLocaleString()} viewers</span>
        </div>
        <span>•</span>
        <span>{category}</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}