import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import ProposalModal from '@/components/modals/ProposalModal';
import HeartBurst from '@/components/effects/HeartBurst';

export default function ProposalSection() {
  const { ref, isVisible } = useScrollReveal();
  const [showModal, setShowModal] = useState(false);
  const [showBurst, setShowBurst] = useState(false);

  const handleYesClick = () => {
    setShowBurst(true);
    setTimeout(() => {
      setShowModal(true);
      setShowBurst(false);
    }, 1500);
  };

  return (
    <section 
      id="proposal" 
      ref={ref}
      className="relative py-32 px-4 min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Main proposal text */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-love-red-600 mb-8 glow-love leading-tight">
            Urvi Ji, will you be my Valentine? 💍❤️
          </h2>
        </div>

        {/* Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Button
            size="lg"
            onClick={handleYesClick}
            className="text-2xl sm:text-3xl px-12 py-8 rounded-full bg-gradient-to-r from-love-red-400 to-rose-500 hover:from-love-red-500 hover:to-rose-600 text-white shadow-soft-lg hover:shadow-gold-lg transition-all duration-300 hover:scale-105 min-w-[200px]"
          >
            💖 YES
          </Button>
          
          <Button
            size="lg"
            onClick={handleYesClick}
            className="text-2xl sm:text-3xl px-12 py-8 rounded-full bg-gradient-to-r from-blush-400 to-rose-400 hover:from-blush-500 hover:to-rose-500 text-white shadow-soft-lg hover:shadow-gold-lg transition-all duration-300 hover:scale-105 min-w-[200px]"
          >
            😜 Of course YES
          </Button>
        </div>

        {/* Subtext */}
        <p className={`mt-12 text-lg text-rose-600 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          (There's only one right answer... and you know what it is! 💕)
        </p>
      </div>

      {/* Heart burst effect */}
      {showBurst && <HeartBurst />}

      {/* Modal */}
      <ProposalModal open={showModal} onOpenChange={setShowModal} />
    </section>
  );
}
