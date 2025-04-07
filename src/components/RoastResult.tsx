
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Copy, CheckCheck, Flame } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface RoastResultProps {
  roast: string;
  target: string;
  onRegenerateRoast: () => void;
}

const RoastResult: React.FC<RoastResultProps> = ({ roast, target, onRegenerateRoast }) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(roast);
      setCopied(true);
      toast({
        title: "Copied to clipboard!",
        description: "The savage roast is ready to share.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-4">
      <Card className="bg-muted border-muted overflow-hidden">
        <CardContent className="p-6">
          <p className="text-lg leading-relaxed">{roast}</p>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button 
          onClick={copyToClipboard} 
          variant="outline" 
          className="flex-1 border-muted hover:bg-accent"
        >
          {copied ? (
            <span className="flex items-center">
              <CheckCheck className="mr-2 h-4 w-4" />
              Copied
            </span>
          ) : (
            <span className="flex items-center">
              <Copy className="mr-2 h-4 w-4" />
              Copy Roast
            </span>
          )}
        </Button>
        
        <Button 
          onClick={onRegenerateRoast} 
          className="flex-1 fire-gradient hover:opacity-90"
        >
          <span className="flex items-center">
            <Flame className="mr-2 h-4 w-4" />
            Roast Again
          </span>
        </Button>
      </div>
    </div>
  );
};

export default RoastResult;
