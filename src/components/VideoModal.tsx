import { useEffect, useRef, useState } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      // Force reload iframe when modal opens
      if (iframeRef.current) {
        // Remove and re-add iframe to force reload
        const currentSrc = iframeRef.current.src;
        iframeRef.current.src = '';
        setTimeout(() => {
          if (iframeRef.current) {
            // Use Google Drive embed URL format - this works better for video playback
            iframeRef.current.src = 'https://drive.google.com/file/d/1wBzB2g5TP3kXI11Kw7SMCl9Mhyo4bIrL/preview';
          }
        }, 100);
      }
    } else {
      // Reset when modal closes
      setIsLoading(false);
    }
  }, [isOpen]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-black rounded-lg overflow-hidden shadow-2xl m-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
          aria-label="Close video"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-20">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        )}

        {/* Video iframe */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            ref={iframeRef}
            src="https://drive.google.com/file/d/1wBzB2g5TP3kXI11Kw7SMCl9Mhyo4bIrL/preview"
            className="absolute inset-0 w-full h-full border-0"
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
            onLoad={handleIframeLoad}
            title="Video"
            style={{ minHeight: '400px' }}
          />
        </div>
      </div>
    </div>
  );
}

