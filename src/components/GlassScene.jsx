import { useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Pause, Play } from 'lucide-react';
import GlassOrb from './GlassOrb';
export default function GlassScene() {
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  return <div className="glass-scene cinematic-scene">
    <GlassOrb paused={paused || reduced} />
    <div className="orb-caption"><span>CODE. CREATE. CONNECT.</span>{!reduced && <button type="button" onClick={() => setPaused(!paused)} aria-label={paused ? 'Play 3D animation' : 'Pause 3D animation'} aria-pressed={paused}>{paused ? <Play size={15} /> : <Pause size={15} />}</button>}</div>
  </div>;
}
