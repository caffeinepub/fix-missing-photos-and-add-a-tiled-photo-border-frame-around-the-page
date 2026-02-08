import { Button } from '@/components/ui/button';
import { Link, Check } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function CopyLinkButton() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success('Link copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error('Failed to copy link');
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            onClick={handleCopyLink}
            className="bg-white/90 backdrop-blur-sm hover:bg-white border-rose-200 shadow-soft"
          >
            {copied ? (
              <Check className="w-5 h-5 text-green-600" />
            ) : (
              <Link className="w-5 h-5 text-rose-600" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-white/95 backdrop-blur-sm border-rose-200">
          <p className="text-sm text-rose-700">
            {copied ? 'Copied!' : 'Copy link to share'}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
