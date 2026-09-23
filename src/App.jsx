import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';
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
      <MotionConfig reducedMotion="user">
      <div className="portfolio-shell">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <main id="main-content" className="flex-grow" role="main">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </MotionConfig>
    </ThemeProvider>
  );
}

export default App;

