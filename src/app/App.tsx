import LandingPage from "../imports/LandingPage";
import { RegistrationFormProvider } from "../context/RegistrationFormContext";

export default function App() {
  return (
    <RegistrationFormProvider>
      <div className="w-full overflow-x-hidden">
        <LandingPage />
      </div>
    </RegistrationFormProvider>
  );
}
