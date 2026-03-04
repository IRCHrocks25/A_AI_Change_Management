import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { RegistrationFormModal } from '../components/RegistrationFormModal';

interface RegistrationFormContextType {
  openForm: () => void;
  closeForm: () => void;
  isOpen: boolean;
}

const RegistrationFormContext = createContext<RegistrationFormContextType | undefined>(undefined);

export function RegistrationFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeForm = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, []);

  return (
    <RegistrationFormContext.Provider value={{ openForm, closeForm, isOpen }}>
      {children}
      <RegistrationFormModal isOpen={isOpen} onClose={closeForm} />
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
