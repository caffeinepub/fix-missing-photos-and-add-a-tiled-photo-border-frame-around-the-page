import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 bg-gradient-to-t from-blush-100/50 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg text-rose-600 flex items-center justify-center gap-2 flex-wrap">
          Made with endless love by
          <span className="font-bold">Mann</span>
          <Heart className="w-5 h-5 text-love-red-500 fill-love-red-500 animate-heartbeat inline-block" />
        </p>
      </div>
    </footer>
  );
}
