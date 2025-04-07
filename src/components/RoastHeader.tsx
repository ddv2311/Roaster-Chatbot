
import React from 'react';
import { Flame, MessageCircle, Skull } from 'lucide-react';

const RoastHeader: React.FC = () => {
  return (
    <div className="text-center space-y-2">
      <div className="flex items-center justify-center">
        <div className="bg-gradient-to-r from-roast-orange/20 to-red-900/30 p-3 rounded-full animate-pulse-soft">
          <Flame className="h-8 w-8 text-roast-orange animate-flame" />
        </div>
      </div>
      <h1 className="text-4xl font-bold fire-text">Roastmaster AI</h1>
      <p className="text-roast-light/70 max-w-md mx-auto">
        Chat with our savage AI and get absolutely destroyed with no filter. It analyzes your messages and brutally roasts you - no mercy, no limits, no censorship, no holding back!
      </p>
      <div className="flex items-center justify-center space-x-4 mt-1">
        <div className="flex items-center">
          <MessageCircle className="h-4 w-4 text-roast-orange mr-1" />
          <span className="text-xs text-roast-light/50">Uncensored chat</span>
        </div>
        <div className="flex items-center">
          <Skull className="h-4 w-4 text-red-500 mr-1" />
          <span className="text-xs text-red-400">Maximum brutality</span>
        </div>
      </div>
    </div>
  );
};

export default RoastHeader;
