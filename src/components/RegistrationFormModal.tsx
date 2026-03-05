import { useState, useEffect } from 'react';

interface RegistrationFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationFormModal({ isOpen, onClose }: RegistrationFormModalProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Load the form embed script
      const script = document.createElement('script');
      script.src = 'https://l.industryrockstars.ch/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
      setIsLoaded(true);

      return () => {
        // Cleanup script on unmount
        const existingScript = document.querySelector('script[src="https://l.industryrockstars.ch/js/form_embed.js"]');
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-[32px] overflow-hidden shadow-2xl m-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg"
          aria-label="Close registration form"
        >
          <svg
            className="w-5 h-5 text-gray-600"
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

        {/* Event Information Header */}
        <div className="px-6 pt-6 pb-4 border-b border-gray-200 text-center">
          <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[#0d1353] text-xl md:text-2xl mb-2">
            AI Change Management Workshop
          </h2>
          <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[#0d1353] text-base md:text-lg">
            Saturday 14th March 2026 9:00 AM PST
          </p>
        </div>

        {/* Form iframe */}
        <div className="w-full" style={{ height: '593px' }}>
          <iframe
            src="https://l.industryrockstars.ch/widget/form/fzCQlAmoUcjf5ymPGPzp"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '32px',
            }}
            id="inline-fzCQlAmoUcjf5ymPGPzp"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="AI Change Management"
            data-height="593"
            data-layout-iframe-id="inline-fzCQlAmoUcjf5ymPGPzp"
            data-form-id="fzCQlAmoUcjf5ymPGPzp"
            title="AI Change Management"
          />
        </div>
      </div>
    </div>
  );
}
