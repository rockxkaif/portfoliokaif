import useDepth from './useDepth';

export function Card({ children, className = '' }) {
  const ref = useDepth();
  return (
    <div ref={ref} className={`depth-card ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={`depth-content p-4 sm:p-5 ${className}`}>
      {children}
    </div>
  );
}
