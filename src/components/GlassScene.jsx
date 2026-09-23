import { useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Pause, Play } from 'lucide-react';
import useDepth from './ui/useDepth';

export default function GlassScene() {
  const ref = useDepth(16);
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  return (
    <div className={`glass-scene ${paused || reduced ? 'scene-paused' : ''}`}>
      <div className="scene-topline"><span>IDEAS → INTERFACES</span><span>KA / DEV</span></div>
      <div ref={ref} className="scene-stage" aria-hidden="true">
        <div className="scene-grid" />
        <div className="cube-position"><div className="glass-cube">
          <div className="cube-face cube-front"><span>&lt;/&gt;</span><small>BUILD</small></div>
          <div className="cube-face cube-back"><span>AI</span><small>IMAGINE</small></div>
          <div className="cube-face cube-right"><span>{'{ }'}</span><small>CONNECT</small></div>
          <div className="cube-face cube-left"><span>KA</span><small>CREATE</small></div>
          <div className="cube-face cube-top"><span>+</span></div>
          <div className="cube-face cube-bottom"><span>✳</span></div>
        </div></div>
        <div className="scene-tag tag-react"><span>01</span> React & Next.js</div>
        <div className="scene-tag tag-api"><span>02</span> Node & APIs</div>
        <div className="scene-tag tag-ai"><span>03</span> Generative AI</div>
      </div>
      <div className="scene-bottom"><span>Built in layers. Connected by code.</span>
        {!reduced && <button type="button" onClick={() => setPaused(!paused)} aria-label={paused ? 'Play 3D animation' : 'Pause 3D animation'} aria-pressed={paused}>{paused ? <Play size={16} /> : <Pause size={16} />}</button>}
      </div>
    </div>
  );
}
