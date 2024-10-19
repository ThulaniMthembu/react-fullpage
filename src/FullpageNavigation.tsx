import React, { CSSProperties } from 'react';
import { useFullpageContext } from './FullpageContext';

interface FullpageNavigationProps {
  style?: CSSProperties;
  className?: string;
}

const FullpageNavigation: React.FC<FullpageNavigationProps> = ({ style = {}, className = '' }) => {
  const { currentSlide, slidesCount, goto, transitionTiming } = useFullpageContext();

  return (
    <nav style={style} className={className}>
      {Array.from({ length: slidesCount }, (_, i) => (
        <button
          key={i}
          onClick={() => goto(i)}
          style={{
            transition: `all ${transitionTiming}ms`,
            opacity: currentSlide === i ? 1 : 0.5,
          }}
        />
      ))}
    </nav>
  );
};

export default FullpageNavigation;