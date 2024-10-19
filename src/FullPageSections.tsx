import React, { ReactNode, CSSProperties } from 'react';
import { useFullpageContext } from './FullpageContext';

interface FullPageSectionsProps {
  children: ReactNode;
  style?: CSSProperties;
}

const FullPageSections: React.FC<FullPageSectionsProps> = ({ children, style = {} }) => {
  const { translateY, transitionTiming } = useFullpageContext();

  return (
    <div
      style={{
        ...style,
        height: '100%',
        width: '100%',
        position: 'relative',
        transform: `translate3d(0, ${translateY}px, 0)`,
        transition: `transform ${transitionTiming}ms cubic-bezier(0.645, 0.045, 0.355, 1.000)`,
      }}
    >
      {children}
    </div>
  );
};

export default FullPageSections;