import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {
  Fullpage,
  FullPageSections,
  FullpageSection,
  FullpageContext,
  FullpageNumber,
  FullpageCount,
  FullpageNavigation,
} from '.';

const mockContextValue = {
  translateY: 0,
  currentSlide: 0,
  slidesCount: 3,
  subscribe: jest.fn(),
  unsubscribe: jest.fn(),
  goto: jest.fn(),
  transitionTiming: 700,
};

describe('Fullpage Components', () => {
  it('exports Fullpage component', () => {
    expect(Fullpage).toBeDefined();
    render(<Fullpage><div>Test</div></Fullpage>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('exports FullPageSections component', () => {
    expect(FullPageSections).toBeDefined();
    render(
      <FullpageContext.Provider value={mockContextValue}>
        <FullPageSections><div>Test Sections</div></FullPageSections>
      </FullpageContext.Provider>
    );
    expect(screen.getByText('Test Sections')).toBeInTheDocument();
  });

  it('exports FullpageSection component', () => {
    expect(FullpageSection).toBeDefined();
    render(
      <FullpageContext.Provider value={mockContextValue}>
        <FullpageSection><div>Test Section</div></FullpageSection>
      </FullpageContext.Provider>
    );
    expect(screen.getByText('Test Section')).toBeInTheDocument();
  });

  it('exports FullpageContext', () => {
    expect(FullpageContext).toBeDefined();
    expect(FullpageContext.Provider).toBeDefined();
    expect(FullpageContext.Consumer).toBeDefined();
  });

  it('exports FullpageCount component', () => {
    expect(FullpageCount).toBeDefined();
    render(
      <FullpageContext.Provider value={{ ...mockContextValue, slidesCount: 5 }}>
        <FullpageCount />
      </FullpageContext.Provider>
    );
    expect(screen.getByTestId('fullpage-count')).toHaveTextContent('5');
  });

  it('exports FullpageNumber component', () => {
    expect(FullpageNumber).toBeDefined();
    render(
      <FullpageContext.Provider value={{ ...mockContextValue, currentSlide: 2 }}>
        <FullpageNumber />
      </FullpageContext.Provider>
    );
    expect(screen.getByTestId('fullpage-number')).toHaveTextContent('3');
  });

  it('exports FullpageNavigation component', () => {
    expect(FullpageNavigation).toBeDefined();
    render(
      <FullpageContext.Provider value={mockContextValue}>
        <FullpageNavigation />
      </FullpageContext.Provider>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});