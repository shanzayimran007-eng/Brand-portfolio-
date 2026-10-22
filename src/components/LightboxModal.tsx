import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Maximize2 } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: {
    src: string;
    title: string;
    category?: string;
    liveUrl?: string;
  }[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && currentIndex > 0) onNavigate(currentIndex - 1);
      if (e.key === 'ArrowRight' && currentIndex < images.length - 1)
        onNavigate(currentIndex + 1);
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || !images[currentIndex]) return null;

  const current = images[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300 p-4 md:p-8"
      onClick={onClose}
    >
      {/* Top action bar */}
      <div
        className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <div className="text-xs uppercase tracking-wider text-[#C6A878] font-medium">
            {current.category || 'Portfolio Preview'}
          </div>
          <span className="text-white/40" aria-hidden="true">·</span>
          <span className="text-sm font-medium text-white/90">
            {current.title}
          </span>
          <span className="text-white/40" aria-hidden="true">·</span>
          <span className="text-xs text-white/60">
            {currentIndex + 1} of {images.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {current.liveUrl && (
            <a
              href={current.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors"
              title="Open live website in new tab"
            >
              <span>View Live</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#C6A878]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex - 1);
          }}
          aria-label="Previous Image"
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-105 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {currentIndex < images.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex + 1);
          }}
          aria-label="Next Image"
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-all hover:scale-105 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Image container with natural aspect ratio */}
      <div
        className="relative max-w-5xl max-h-[85vh] flex items-center justify-center p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.src}
          alt={current.title}
          className="max-h-[80vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-white/10"
        />
      </div>

      {/* Caption at bottom */}
      <div
        className="absolute bottom-4 inset-x-0 text-center text-xs text-white/60 pointer-events-none"
      >
        Use <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/90">ESC</kbd> to close · Click arrows or use keyboard left/right
      </div>
    </div>
  );
};
