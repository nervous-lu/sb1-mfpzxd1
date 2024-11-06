import React from 'react';
import ChatBox from './components/ChatBox';
import StreamInfo from './components/StreamInfo';
import StreamMatrix from './components/StreamMatrix';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Video Player */}
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&w=1920&q=80"
                alt="Stream Preview"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stream Info */}
            <StreamInfo
              title="🎮 Pro Gaming Tournament Finals"
              streamer="ProGamer123"
              viewers={15000}
              category="Gaming"
              tags={["Tournament", "ESports", "Finals", "Live"]}
            />

            {/* Related Streams */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">Recommended Streams</h2>
              <StreamMatrix />
            </div>
          </div>

          {/* Chat Sidebar */}
          <div className="lg:col-span-1 h-[calc(100vh-4rem)]">
            <ChatBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;