import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function AnimatedPage({ children }) {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' });
    else window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, hash]);
  return <div className="page-transition">{children}</div>;
}
