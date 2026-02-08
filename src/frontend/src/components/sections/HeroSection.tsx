import { Heart } from 'lucide-react';

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
        {/* Animated heart */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Heart 
              className="w-24 h-24 text-love-red-500 fill-love-red-500 animate-heartbeat" 
              strokeWidth={1.5}
            />
            <div className="absolute inset-0 blur-xl bg-love-red-400 opacity-30 animate-heartbeat" />
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-love-red-600 mb-6">
          Hey Urvi Ji ❤️
        </h1>

        {/* Subtext */}
        <p className="text-xl sm:text-2xl md:text-3xl text-rose-700 max-w-3xl mx-auto leading-relaxed px-4">
          From the moment you came into my life, everything became more beautiful.
        </p>

        {/* Decorative hearts */}
        <div className="flex justify-center gap-4 mt-12">
          <Heart className="w-6 h-6 text-blush-400 fill-blush-400 animate-float" style={{ animationDelay: '0s' }} />
          <Heart className="w-8 h-8 text-rose-400 fill-rose-400 animate-float" style={{ animationDelay: '0.3s' }} />
          <Heart className="w-6 h-6 text-blush-400 fill-blush-400 animate-float" style={{ animationDelay: '0.6s' }} />
        </div>
      </div>
    </section>
  );
}
