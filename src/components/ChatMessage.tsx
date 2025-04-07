
import React from 'react';
import { User, Bot, Flame } from 'lucide-react';

interface ChatMessageProps {
  message: {
    id: string;
    content: string;
    sender: 'user' | 'ai';
  };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  
  // Enhanced detection for direct roasts with more patterns
  const isDirectRoast = !isUser && 
    (message.content.toLowerCase().includes('you') || 
     message.content.toLowerCase().includes('your') ||
     message.content.toLowerCase().includes('f***ing') ||
     message.content.toLowerCase().includes('pathetic') ||
     message.content.toLowerCase().includes('worthless') ||
     message.content.toLowerCase().includes('sh*t') ||
     message.content.toLowerCase().startsWith('that') ||
     message.content.toLowerCase().startsWith('is that') ||
     message.content.toLowerCase().startsWith('wow') ||
     message.content.toLowerCase().startsWith('did you'));
  
  // Check brutality level for visual effect
  const isBrutalRoast = !isUser && 
    (message.content.toLowerCase().includes('f***ing') || 
     message.content.toLowerCase().includes('sh*t') ||
     message.content.toLowerCase().includes('worthless') ||
     message.content.toLowerCase().includes('pathetic'));
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`flex max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`flex-shrink-0 ${isUser ? 'ml-2' : 'mr-2'}`}>
          <div className={`rounded-full p-2 ${isUser ? 'bg-roast-orange/20' : 
            isBrutalRoast ? 'bg-red-900/30 animate-pulse-soft' : 'bg-roast-light/10'}`}>
            {isUser ? (
              <User className="h-5 w-5 text-roast-orange" />
            ) : isBrutalRoast ? (
              <Flame className="h-5 w-5 text-red-500 animate-flame" />
            ) : (
              <Bot className={`h-5 w-5 ${isDirectRoast ? 'text-red-500' : 'text-roast-light'}`} />
            )}
          </div>
        </div>
        <div 
          className={`rounded-lg px-4 py-2 ${isUser 
            ? 'bg-roast-orange text-white rounded-tr-none' 
            : isBrutalRoast 
              ? 'bg-gradient-to-r from-red-900/40 to-red-800/30 text-red-50 rounded-tl-none border border-red-900/30' 
              : `${isDirectRoast ? 'bg-red-900/30' : 'bg-muted'} text-foreground rounded-tl-none`}`}
        >
          <p className="text-sm">{message.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
