import React, { CSSProperties } from 'react';
import { useFullpageContext } from './FullpageContext';

interface FullpageNumberProps {
  style?: CSSProperties;
}

const FullpageNumber: React.FC<FullpageNumberProps> = ({ style = {} }) => {
  const { currentSlide } = useFullpageContext();

  return <span style={style} data-testid="fullpage-number">{currentSlide + 1}</span>;
};

export default FullpageNumber;