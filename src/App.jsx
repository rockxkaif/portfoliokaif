import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HomePremium from './pages/HomePremium';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import Projects from './pages/Projects';
import AnimatedPage from './components/AnimatedPage';

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
        <Route path="/premium" element={<AnimatedPage><HomePremium /></AnimatedPage>} />
        <Route path="/skills" element={<AnimatedPage><Skills /></AnimatedPage>} />
        <Route path="/experience" element={<AnimatedPage><Experience /></AnimatedPage>} />
        <Route path="/certificates" element={<AnimatedPage><Certificates /></AnimatedPage>} />
        <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
        <Route path="/projects" element={<AnimatedPage><Projects /></AnimatedPage>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-950 transition-colors duration-300">
        <Navbar />
        <main className="flex-grow" role="main">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
