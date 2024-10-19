import React, { createContext, useContext } from 'react';

export interface FullpageContextType {
  translateY: number;
  currentSlide: number;
  slidesCount: number;
  subscribe: (callback: () => void) => void;
  unsubscribe: (callback: () => void) => void;
  goto: (slide: number) => void;
  transitionTiming: number;
}

export const FullpageContext = createContext<FullpageContextType | null>(null);

export const useFullpageContext = (): FullpageContextType => {
  const context = useContext(FullpageContext);
  if (context === null) {
    throw new Error('useFullpageContext must be used within a FullpageProvider');
  }
  return context;
};