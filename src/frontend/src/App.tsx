import { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import HeroSection from './components/sections/HeroSection';
import LoveStorySection from './components/sections/LoveStorySection';
import GallerySection from './components/sections/GallerySection';
import MessageFromMeSection from './components/sections/MessageFromMeSection';
import ProposalSection from './components/sections/ProposalSection';
import Footer from './components/Footer';
import AmbientEffects from './components/effects/AmbientEffects';
import MusicControls from './components/controls/MusicControls';
import EffectsToggle from './components/controls/EffectsToggle';
import CopyLinkButton from './components/controls/CopyLinkButton';
import SectionNav from './components/controls/SectionNav';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-blush-50 via-white to-rose-50">
        {/* Background pattern */}
        <div 
          className="fixed inset-0 opacity-30 pointer-events-none z-0"
          style={{
            backgroundImage: 'url(/assets/generated/romantic-bg-pattern.dim_2048x2048.png)',
            backgroundSize: '512px 512px',
            backgroundRepeat: 'repeat'
          }}
        />

        {/* Ambient effects */}
        <AmbientEffects />

        {/* Fixed controls */}
        <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
          <MusicControls />
          <EffectsToggle />
          <CopyLinkButton />
        </div>

        {/* Section navigation */}
        <SectionNav />

        {/* Main content */}
        <main className="relative z-10">
          <HeroSection />
          <LoveStorySection />
          <GallerySection />
          <MessageFromMeSection />
          <ProposalSection />
          <Footer />
        </main>

        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
