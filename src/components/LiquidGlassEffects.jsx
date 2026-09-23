import { useEffect } from 'react';

// One delegated listener for droplets, including dynamically mounted route content.
export default function LiquidGlassEffects() {
  useEffect(() => {
    const root = document.querySelector('.portfolio-shell');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const timers = new Map();
    const ripple = (event) => {
      if (reduced.matches || !(event.target instanceof Element)) return;
      if (event.type === 'keydown' && (event.repeat || !['Enter', ' '].includes(event.key))) return;
      const node = event.target.closest('.depth-card, .glass-button, .primary-action, .secondary-action, .hero-socials > a');
      if (!node || node.matches(':disabled') || event.target.closest('input, textarea, select')) return;
      if (event.type === 'keydown' && !event.target.closest('button, a')) return;
      const rect = node.getBoundingClientRect();
      const x = event.type === 'keydown' ? rect.width / 2 : event.clientX - rect.left;
      const y = event.type === 'keydown' ? rect.height / 2 : event.clientY - rect.top;
      node.style.setProperty('--drop-x', `${x}px`);
      node.style.setProperty('--drop-y', `${y}px`);
      node.classList.remove('liquid-pressed');
      void node.offsetWidth;
      node.classList.add('liquid-pressed');
      clearTimeout(timers.get(node));
      timers.set(node, setTimeout(() => {
        node.classList.remove('liquid-pressed');
        node.style.removeProperty('--drop-x');
        node.style.removeProperty('--drop-y');
        timers.delete(node);
      }, 700));
    };
    root?.addEventListener('pointerdown', ripple);
    root?.addEventListener('keydown', ripple);
    return () => {
      root?.removeEventListener('pointerdown', ripple);
      root?.removeEventListener('keydown', ripple);
      timers.forEach((timer, node) => {
        clearTimeout(timer);
        node.classList.remove('liquid-pressed');
        node.style.removeProperty('--drop-x');
        node.style.removeProperty('--drop-y');
      });
    };
  }, []);

  return <div className="liquid-atmosphere" aria-hidden="true">
    <span className="water-drop drop-one" /><span className="water-drop drop-two" />
    <span className="water-drop drop-three" /><span className="water-drop drop-four" />
    <span className="water-drop drop-five" />
  </div>;
}
