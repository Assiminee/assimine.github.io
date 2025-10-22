import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { LanguageProvider } from './contexts/LanguageContext';
import { en } from './translations/en';
import { fr } from './translations/fr';

createRoot(document.getElementById("root")!).render(
  <LanguageProvider translations={{ en, fr }}>
    <App />
  </LanguageProvider>
);
