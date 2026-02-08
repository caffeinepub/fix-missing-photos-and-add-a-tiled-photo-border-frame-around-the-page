import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Heart, Sparkles, MessageCircleHeart } from 'lucide-react';

const storyItems = [
  {
    icon: Heart,
    title: 'How we met',
    description: 'It was a moment that felt like destiny. When our paths crossed, I knew something special was beginning. Your smile lit up the room, and from that very first conversation, I felt a connection I had never experienced before. Every word we shared felt like a piece of a beautiful puzzle falling into place.',
    color: 'rose'
  },
  {
    icon: Sparkles,
    title: 'Why she is special',
    description: 'You are unlike anyone I have ever known. Your kindness touches everyone around you, your laughter is the most beautiful sound in the world, and your presence makes every moment brighter. You see beauty in the smallest things and bring joy wherever you go. You make me want to be a better person every single day.',
    color: 'blush'
  },
  {
    icon: MessageCircleHeart,
    title: 'How she calls me "good boy"',
    description: 'When you call me "good boy," my heart melts every single time. It\'s not just the words—it\'s the warmth in your voice, the love in your eyes, and the way you make me feel cherished and appreciated. Those two simple words from you mean more than anything else in the world. They remind me that I am loved, and that feeling is everything. 🥰',
    color: 'gold'
  }
];

export default function LoveStorySection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      id="love-story" 
      ref={ref}
      className="relative py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-rose-600 mb-4">
            Our Love Story
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blush-400 via-rose-400 to-gold-400 mx-auto rounded-full" />
        </div>

        {/* Timeline/Cards */}
        <div className="space-y-12 md:space-y-16">
          {storyItems.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? '-translate-x-10' : 'translate-x-10'}`
                }`}
              >
                {/* Icon */}
                <div className={`flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-${item.color}-200 to-${item.color}-300 flex items-center justify-center shadow-soft ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <Icon className={`w-10 h-10 text-${item.color}-600`} />
                </div>

                {/* Content card */}
                <div className={`flex-1 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft-lg hover:shadow-gold transition-all duration-300 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <h3 className={`text-2xl sm:text-3xl font-bold text-${item.color}-600 mb-4`}>
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
