
import React from 'react';

const loadingQuips = [
  "Crafting a brutal response...",
  "Loading savage mode...",
  "Finding your weak spots...",
  "Loading pure devastation...",
  "Preparing verbal destruction...",
  "Sharpening my verbal knives...",
  "Getting ready to obliterate you...",
  "Calculating maximum damage...",
  "Loading uncensored burn...",
  "Preparing something extra vicious...",
];

const LoadingState: React.FC = () => {
  const randomQuip = loadingQuips[Math.floor(Math.random() * loadingQuips.length)];
  
  return (
    <div className="flex items-center space-x-2 px-3 py-2 bg-muted/50 rounded-lg max-w-[200px]">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 rounded-full bg-roast-orange/25 animate-ping"></div>
        <div className="relative rounded-full w-8 h-8 flex items-center justify-center fire-gradient">
          <svg 
            className="w-4 h-4 text-white animate-flame" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
          </svg>
        </div>
      </div>
      <p className="text-sm text-roast-light/80 animate-pulse-soft">{randomQuip}</p>
    </div>
  );
};

export default LoadingState;
