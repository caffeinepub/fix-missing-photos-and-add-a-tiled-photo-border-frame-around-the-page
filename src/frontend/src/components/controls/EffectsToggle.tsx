import { Button } from '@/components/ui/button';
import { Sparkles, SparklesIcon } from 'lucide-react';
import { useSessionStorageState } from '@/hooks/useSessionStorageState';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function EffectsToggle() {
  const [effectsEnabled, setEffectsEnabled] = useSessionStorageState('effects-enabled', true);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            onClick={() => setEffectsEnabled(!effectsEnabled)}
            className={`bg-white/90 backdrop-blur-sm hover:bg-white border-rose-200 shadow-soft ${
              effectsEnabled ? 'text-rose-600' : 'text-gray-400'
            }`}
          >
            {effectsEnabled ? (
              <Sparkles className="w-5 h-5" />
            ) : (
              <SparklesIcon className="w-5 h-5" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-white/95 backdrop-blur-sm border-rose-200">
          <p className="text-sm text-rose-700">
            {effectsEnabled ? 'Disable' : 'Enable'} floating effects
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
