import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Heart } from 'lucide-react';

export default function MessageFromMeSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      id="message" 
      ref={ref}
      className="relative py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <div className={`relative bg-gradient-to-br from-white/90 to-blush-50/90 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-soft-lg transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Decorative hearts */}
          <div className="absolute top-4 left-4 opacity-20">
            <Heart className="w-12 h-12 text-rose-400 fill-rose-400" />
          </div>
          <div className="absolute bottom-4 right-4 opacity-20">
            <Heart className="w-12 h-12 text-rose-400 fill-rose-400" />
          </div>

          {/* Message */}
          <div className="relative z-10 text-center">
            <p className="handwritten text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-rose-700 leading-relaxed">
              I may not be perfect, but my love for you is pure and forever.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-8 text-right">
            <p className="handwritten text-2xl text-rose-600">
              - Mann
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
