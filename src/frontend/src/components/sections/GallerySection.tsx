import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Plus, Image as ImageIcon } from 'lucide-react';
import { toast } from 'sonner';

const initialImages = [
  '/assets/gallery/Snapchat-869212999.jpg',
  '/assets/gallery/Snapchat-261174748.jpg'
];

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

export default function GallerySection() {
  const { ref, isVisible } = useScrollReveal();
  const [images, setImages] = useState<string[]>(initialImages);

  const handleAddPhotos = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const newImages: string[] = [];
    let hasError = false;

    Array.from(files).forEach((file) => {
      // Validate file type
      if (!ALLOWED_TYPES.includes(file.type)) {
        toast.error(`${file.name} is not a supported image format`);
        hasError = true;
        return;
      }

      // Validate file size
      if (file.size > MAX_FILE_SIZE) {
        toast.error(`${file.name} is too large. Maximum size is 5MB`);
        hasError = true;
        return;
      }

      // Create blob URL
      const imageUrl = URL.createObjectURL(file);
      newImages.push(imageUrl);
    });

    if (newImages.length > 0) {
      setImages((prev) => [...prev, ...newImages]);
      toast.success(`Added ${newImages.length} photo${newImages.length > 1 ? 's' : ''} to gallery`);
    }

    // Reset input
    event.target.value = '';
  };

  return (
    <section 
      id="gallery" 
      ref={ref}
      className="relative py-20 px-4"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-rose-600 mb-4">
            Our Memories Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blush-400 via-rose-400 to-gold-400 mx-auto rounded-full" />
        </div>

        {/* Carousel */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-4">
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-soft-lg bg-white/50 backdrop-blur-sm">
                      <img
                        src={image}
                        alt={`Memory ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white/90 hover:bg-white border-rose-200" />
            <CarouselNext className="right-2 bg-white/90 hover:bg-white border-rose-200" />
          </Carousel>
        </div>

        {/* Add photos button */}
        <div className={`flex justify-center mt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <label htmlFor="photo-upload">
            <Button
              type="button"
              size="lg"
              className="bg-gradient-to-r from-blush-400 to-rose-400 hover:from-blush-500 hover:to-rose-500 text-white shadow-soft cursor-pointer"
              onClick={() => document.getElementById('photo-upload')?.click()}
            >
              <Plus className="w-5 h-5 mr-2" />
              Add More Photos
            </Button>
          </label>
          <input
            id="photo-upload"
            type="file"
            accept="image/jpeg,image/jpg,image/png,image/webp"
            multiple
            onChange={handleAddPhotos}
            className="hidden"
          />
        </div>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Photos are stored for this session only (max 5MB each)
        </p>
      </div>
    </section>
  );
}
