
import React, { useState, useRef, useEffect } from 'react';
import { nanoid } from 'nanoid';
import RoastHeader from '@/components/RoastHeader';
import ChatMessage from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';
import LoadingState from '@/components/LoadingState';
import { generateRoast, generateChatResponse } from '@/lib/mockApi';
import { useToast } from '@/components/ui/use-toast';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'ai';
};

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Add welcome message on first load - now more brutal
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: nanoid(),
          content: "Well, look who decided to waste my fucking time today. I'm Roastmaster AI, and I'm here to absolutely destroy your pathetic ego with words that'll make your therapist work overtime. Type something if you dare, or ask me to roast someone specific like 'roast my friend John who loves video games'. Either way, prepare to get verbally annihilated.",
          sender: 'ai'
        }
      ]);
    }
  }, []);

  const handleSendMessage = async (content: string) => {
    // Add user message to chat
    const userMessage: Message = {
      id: nanoid(),
      content,
      sender: 'user'
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      // Decide whether to use generateRoast or generateChatResponse
      let response;
      if (content.toLowerCase().startsWith('roast ') && content.toLowerCase() !== 'roast me') {
        // Extract the target (everything after "roast ")
        const target = content.substring(6).trim();
        response = await generateRoast(target);
      } else if (content.toLowerCase() === 'roast me') {
        response = await generateRoast('you');
      } else {
        response = await generateChatResponse(content);
      }
      
      // Add AI response to chat
      const aiMessage: Message = {
        id: nanoid(),
        content: response,
        sender: 'ai'
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
      toast({
        title: "Failed to generate response",
        description: "Our AI's brain froze. Try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container max-w-3xl py-8 sm:py-12">
        <div className="flex flex-col h-[calc(100vh-6rem)] max-h-[800px]">
          <RoastHeader />
          
          <div className="bg-accent/30 p-4 md:p-6 rounded-xl border border-muted shadow-lg flex-1 mt-6 flex flex-col">
            {/* Chat messages area with scrolling */}
            <div className="flex-1 overflow-y-auto mb-4 pr-2">
              {messages.map(message => (
                <ChatMessage key={message.id} message={message} />
              ))}
              
              {isLoading && (
                <div className="flex justify-start mb-4">
                  <LoadingState />
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Input area */}
            <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
          </div>
          
          <footer className="text-center text-sm text-muted-foreground mt-6">
            <p>Roastmaster AI &copy; {new Date().getFullYear()} | Definitely the most savage AI on the internet</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Index;
