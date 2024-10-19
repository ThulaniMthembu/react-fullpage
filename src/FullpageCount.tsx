import React, { CSSProperties } from 'react';
import { useFullpageContext } from './FullpageContext';

interface FullpageCountProps {
  style?: CSSProperties;
}

const FullpageCount: React.FC<FullpageCountProps> = ({ style = {} }) => {
  const { slidesCount } = useFullpageContext();

  return <span style={style} data-testid="fullpage-count">{slidesCount}</span>;
};

export default FullpageCount;