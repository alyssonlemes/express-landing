import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { NovidadesPage } from "./components/NovidadesPage";
import { SearchPage } from "./components/SearchPage";
import { LanguageProvider } from "./i18n";



export function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="site">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/novidades" element={<NovidadesPage />} />
            <Route path="/buscar" element={<SearchPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}
