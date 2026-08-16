import { LanguageProvider } from './context/LanguageContext';
import { Background } from './components/Background';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <Background />
      <div className="relative z-10">
        <Header />
        <main className="bg-black/70">
          <Hero />
          <Experience />
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
