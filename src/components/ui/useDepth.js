import { useEffect, useRef } from 'react';

// Event-driven depth: no render loop, no React updates while the pointer moves.
export default function useDepth(strength = 5) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)');
    let frame = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      node.style.removeProperty('--rx');
      node.style.removeProperty('--ry');
      node.style.removeProperty('--px');
      node.style.removeProperty('--py');
    };
    const move = (event) => {
      if (preference.matches || event.pointerType === 'touch' || node.matches(':focus-within')) return;
      cancelAnimationFrame(frame);
      const { clientX, clientY } = event;
      frame = requestAnimationFrame(() => {
        const box = node.getBoundingClientRect();
        const x = Math.min(1, Math.max(0, (clientX - box.left) / box.width));
        const y = Math.min(1, Math.max(0, (clientY - box.top) / box.height));
        node.style.setProperty('--rx', `${(0.5 - y) * strength}deg`);
        node.style.setProperty('--ry', `${(x - 0.5) * strength}deg`);
        node.style.setProperty('--px', `${x * 100}%`);
        node.style.setProperty('--py', `${y * 100}%`);
      });
    };
    node.addEventListener('pointermove', move);
    node.addEventListener('pointerleave', reset);
    node.addEventListener('pointercancel', reset);
    node.addEventListener('focusin', reset);
    preference.addEventListener('change', reset);
    return () => {
      reset();
      node.removeEventListener('pointermove', move);
      node.removeEventListener('pointerleave', reset);
      node.removeEventListener('pointercancel', reset);
      node.removeEventListener('focusin', reset);
      preference.removeEventListener('change', reset);
    };
  }, [strength]);
  return ref;
}
