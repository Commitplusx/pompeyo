import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { X, ZoomIn } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Helper to handle image fallback
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallbackSrc: string) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = fallbackSrc;
  };

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="py-12 md:py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" className="text-center mb-8 md:mb-12">
          <span className="text-brand-orange font-bold tracking-wider uppercase text-sm">Nuestras Instalaciones</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">Galería Pompeyo Express</h2>
          <p className="mt-4 text-base md:text-lg text-gray-500">
            Ubicados en el corazón de Comitán, listos para servirte.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">

          {/* 1. The Yellow Building Photo */}
          <ScrollReveal direction="up" delay={0} className="md:col-span-1 md:row-span-2 relative rounded-2xl overflow-hidden group shadow-lg cursor-pointer" onClick={() => openLightbox("/pompeyo-logo.jpg")}>
            <img
              src="/pompeyo-logo.jpg"
              onError={(e) => handleImageError(e, "https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")}
              alt="Base Pompeyo Express Edificio Amarillo"
              className="w-full h-full object-contain bg-gradient-to-br from-yellow-400 to-orange-500 p-8 transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <ZoomIn className="text-white w-10 h-10" />
            </div>
          </ScrollReveal>

          {/* 2. The Front View */}
          <ScrollReveal direction="up" delay={200} className="md:col-span-2 md:row-span-1 relative rounded-2xl overflow-hidden group shadow-lg cursor-pointer" onClick={() => openLightbox("/pompeyo-frente.jpg")}>
            <img
              src="/pompeyo-frente.jpg"
              onError={(e) => handleImageError(e, "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80")}
              alt="Unidades Nissan Versa Frente"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <ZoomIn className="text-white w-10 h-10" />
            </div>
          </ScrollReveal>

          {/* 3. The Angled Side View */}
          <ScrollReveal direction="up" delay={300} className="md:col-span-1 md:row-span-1 relative rounded-2xl overflow-hidden group shadow-lg cursor-pointer" onClick={() => openLightbox("/pompeyo-lado.jpg")}>
            <img
              src="/pompeyo-lado.jpg"
              onError={(e) => handleImageError(e, "https://images.unsplash.com/photo-1621993202323-2433e8c74146?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")}
              alt="Taxis Vista Lateral"
              className="w-full h-full object-contain bg-gradient-to-br from-yellow-400 to-orange-500 p-8 transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <ZoomIn className="text-white w-10 h-10" />
            </div>
          </ScrollReveal>

          {/* 4. The Full Fleet Lineup */}
          <ScrollReveal direction="up" delay={400} className="md:col-span-1 md:row-span-1 relative rounded-2xl overflow-hidden group shadow-lg cursor-pointer" onClick={() => openLightbox("/pompeyo-flota.jpg")}>
            <img
              src="/pompeyo-flota.jpg"
              onError={(e) => handleImageError(e, "https://images.unsplash.com/photo-1565514020176-7c50a5839b23?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")}
              alt="Flota Completa"
              className="w-full h-full object-contain bg-gradient-to-br from-yellow-400 to-orange-500 p-8 transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
              <ZoomIn className="text-white w-10 h-10" />
            </div>
          </ScrollReveal>

        </div>

        <p className="text-center text-sm text-gray-400 mt-6 italic">
          * Imágenes reales de nuestras unidades y base en Comitán.
        </p>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Vista ampliada"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
          />
        </div>
      )}
    </section>
  );
};