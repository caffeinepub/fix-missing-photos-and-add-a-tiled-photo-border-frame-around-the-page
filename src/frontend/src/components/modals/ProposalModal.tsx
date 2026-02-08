import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Heart, Sparkles } from 'lucide-react';

interface ProposalModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProposalModal({ open, onOpenChange }: ProposalModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-white to-blush-50 border-rose-200">
        <DialogHeader>
          <div className="flex justify-center mb-4">
            <div className="relative">
              <Heart className="w-20 h-20 text-love-red-500 fill-love-red-500 animate-heartbeat" />
              <Sparkles className="w-8 h-8 text-gold-400 absolute -top-2 -right-2 animate-pulse" />
              <Sparkles className="w-6 h-6 text-gold-400 absolute -bottom-1 -left-1 animate-pulse" style={{ animationDelay: '0.3s' }} />
            </div>
          </div>
          <DialogTitle className="text-3xl text-center text-love-red-600 font-bold">
            You just made me the happiest person alive 💕
          </DialogTitle>
          <DialogDescription className="text-center text-lg text-rose-600 mt-4">
            I promise to love you, cherish you, and make you smile every single day.
            Thank you for saying yes to forever with me! ❤️
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center mt-6">
          <div className="flex gap-2">
            <Heart className="w-6 h-6 text-rose-400 fill-rose-400 animate-float" />
            <Heart className="w-8 h-8 text-love-red-500 fill-love-red-500 animate-float" style={{ animationDelay: '0.2s' }} />
            <Heart className="w-6 h-6 text-rose-400 fill-rose-400 animate-float" style={{ animationDelay: '0.4s' }} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
