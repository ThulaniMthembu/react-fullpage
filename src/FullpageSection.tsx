import React, { useEffect, useRef, ReactNode, CSSProperties } from 'react';
import { useFullpageContext } from './FullpageContext';

interface FullpageSectionProps {
  children: ReactNode;
  style?: CSSProperties;
}

const FullpageSection: React.FC<FullpageSectionProps> = ({ children, style = {} }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { subscribe, unsubscribe } = useFullpageContext();

  useEffect(() => {
    const callback = () => {};
    subscribe(callback);
    return () => unsubscribe(callback);
  }, [subscribe, unsubscribe]);

  return (
    <div
      ref={ref}
      style={{
        ...style,
        height: '100vh',
        width: '100%',
      }}
    >
      {children}
    </div>
  );
};

export default FullpageSection;