import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Music, Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { useSessionStorageState } from '@/hooks/useSessionStorageState';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export default function MusicControls() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useSessionStorageState('music-playing', false);
  const [volume, setVolume] = useSessionStorageState('music-volume', 0.5);
  const [isMuted, setIsMuted] = useSessionStorageState('music-muted', false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = isMuted ? 0 : volume;
    audio.loop = true;

    if (isPlaying) {
      audio.play().catch(() => {
        // Autoplay was prevented, user needs to interact first
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isPlaying, volume, isMuted, setIsPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (values: number[]) => {
    const newVolume = values[0];
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/assets/music/romantic-instrumental.mp3" />
      
      <Popover>
        <PopoverTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="bg-white/90 backdrop-blur-sm hover:bg-white border-rose-200 shadow-soft"
          >
            <Music className="w-5 h-5 text-rose-600" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64 bg-white/95 backdrop-blur-sm border-rose-200">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-rose-700">Background Music</span>
              <Button
                size="icon"
                variant="ghost"
                onClick={togglePlay}
                className="h-8 w-8"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 text-rose-600" />
                ) : (
                  <Play className="w-4 h-4 text-rose-600" />
                )}
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="ghost"
                onClick={toggleMute}
                className="h-8 w-8 flex-shrink-0"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-4 h-4 text-rose-600" />
                ) : (
                  <Volume2 className="w-4 h-4 text-rose-600" />
                )}
              </Button>
              <Slider
                value={[isMuted ? 0 : volume]}
                onValueChange={handleVolumeChange}
                max={1}
                step={0.01}
                className="flex-1"
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}
