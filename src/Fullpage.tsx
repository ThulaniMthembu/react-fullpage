import React, { useState, useCallback, useRef, useEffect, ReactNode } from 'react';
import { FullpageContext, FullpageContextType } from './FullpageContext';

interface FullpageProps {
  children: ReactNode;
  transitionTiming?: number;
  onChange?: (state: { number: number; count: number }) => void;
}

const Fullpage: React.FC<FullpageProps> = ({ children, transitionTiming = 700, onChange }) => {
  const [translateY, setTranslateY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);
  const subscribersRef = useRef<(() => void)[]>([]);

  const subscribe = useCallback((callback: () => void) => {
    subscribersRef.current.push(callback);
  }, []);

  const unsubscribe = useCallback((callback: () => void) => {
    subscribersRef.current = subscribersRef.current.filter((cb) => cb !== callback);
  }, []);

  const goto = useCallback((slide: number) => {
    setCurrentSlide(slide);
    setTranslateY(-slide * window.innerHeight);
    if (onChange) {
      onChange({ number: slide + 1, count: subscribersRef.current.length });
    }
  }, [onChange]);

  useEffect(() => {
    setSlidesCount(subscribersRef.current.length);
  }, []);

  const contextValue: FullpageContextType = {
    translateY,
    currentSlide,
    slidesCount,
    subscribe,
    unsubscribe,
    goto,
    transitionTiming,
  };

  return (
    <FullpageContext.Provider value={contextValue}>
      {children}
    </FullpageContext.Provider>
  );
};

export default Fullpage;