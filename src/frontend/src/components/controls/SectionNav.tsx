import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, BookHeart, Image, MessageCircle, Sparkles } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Home', icon: Heart },
  { id: 'love-story', label: 'Our Story', icon: BookHeart },
  { id: 'gallery', label: 'Memories', icon: Image },
  { id: 'message', label: 'Message', icon: MessageCircle },
  { id: 'proposal', label: 'Proposal', icon: Sparkles },
];

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-soft border border-rose-200">
        {sections.map(({ id, label, icon: Icon }) => (
          <Button
            key={id}
            size="icon"
            variant="ghost"
            onClick={() => scrollToSection(id)}
            className={`rounded-full transition-all ${
              activeSection === id
                ? 'bg-rose-100 text-rose-600'
                : 'text-gray-400 hover:text-rose-600 hover:bg-rose-50'
            }`}
            title={label}
          >
            <Icon className="w-5 h-5" />
          </Button>
        ))}
      </div>
    </nav>
  );
}
