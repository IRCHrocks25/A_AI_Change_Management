import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { RegistrationFormModal } from '../components/RegistrationFormModal';
import { VideoModal } from '../components/VideoModal';

interface RegistrationFormContextType {
  openForm: () => void;
  closeForm: () => void;
  isOpen: boolean;
}

interface VideoModalContextType {
  openVideo: () => void;
  closeVideo: () => void;
  isVideoOpen: boolean;
}

const RegistrationFormContext = createContext<RegistrationFormContextType | undefined>(undefined);
const VideoModalContext = createContext<VideoModalContextType | undefined>(undefined);

export function RegistrationFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openForm = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeForm = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  const openVideo = useCallback(() => {
    setIsVideoOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeVideo = useCallback(() => {
    setIsVideoOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  return (
    <RegistrationFormContext.Provider value={{ openForm, closeForm, isOpen }}>
      <VideoModalContext.Provider value={{ openVideo, closeVideo, isVideoOpen }}>
        {children}
        <RegistrationFormModal isOpen={isOpen} onClose={closeForm} />
        <VideoModal isOpen={isVideoOpen} onClose={closeVideo} />
      </VideoModalContext.Provider>
    </RegistrationFormContext.Provider>
  );
}

export function useRegistrationFormContext() {
  const context = useContext(RegistrationFormContext);
  if (context === undefined) {
    throw new Error('useRegistrationFormContext must be used within a RegistrationFormProvider');
  }
  return context;
}

export function useVideoModalContext() {
  const context = useContext(VideoModalContext);
  if (context === undefined) {
    throw new Error('useVideoModalContext must be used within a RegistrationFormProvider');
  }
  return context;
}


