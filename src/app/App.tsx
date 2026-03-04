import LandingPage from "../imports/LandingPage";
import { RegistrationFormProvider } from "../context/RegistrationFormContext";

export default function App() {
  return (
    <RegistrationFormProvider>
      {/* Full-viewport shell — each section manages its own max-width inner container.
          The body background is white so that on large monitors the area outside
          any section's coloured background looks intentional. */}
      <div className="w-full overflow-x-hidden bg-white">
        <LandingPage />
      </div>
    </RegistrationFormProvider>
  );
}
