
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Flame } from 'lucide-react';

interface RoastInputProps {
  onSubmit: (target: string) => void;
  isLoading: boolean;
}

const RoastInput: React.FC<RoastInputProps> = ({ onSubmit, isLoading }) => {
  const [target, setTarget] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (target.trim()) {
      onSubmit(target.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="space-y-2">
        <label htmlFor="target" className="block text-sm font-medium text-roast-light/80">
          Who or what should I roast?
        </label>
        <Textarea
          id="target"
          placeholder="e.g., my friend Jake who loves video games, pineapple pizza, etc."
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          className="min-h-[100px] w-full bg-muted border-muted focus:border-roast-orange"
          disabled={isLoading}
        />
      </div>

      <Button 
        type="submit" 
        disabled={!target.trim() || isLoading} 
        className="w-full md:w-auto font-medium tracking-wide transition-all fire-gradient hover:opacity-90 disabled:opacity-50"
      >
        {isLoading ? (
          <span className="flex items-center">
            <Flame className="mr-2 h-5 w-5 animate-flame" />
            Roasting...
          </span>
        ) : (
          <span className="flex items-center">
            <Flame className="mr-2 h-5 w-5" />
            Roast 'Em!
          </span>
        )}
      </Button>
    </form>
  );
};

export default RoastInput;
