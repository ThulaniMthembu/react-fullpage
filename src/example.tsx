import React from 'react';
import { Fullpage, FullPageSections, FullpageSection, FullpageNavigation } from './index';

const Example: React.FC = () => {
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection>
          <h1>Section 1</h1>
        </FullpageSection>
        <FullpageSection>
          <h1>Section 2</h1>
        </FullpageSection>
        <FullpageSection>
          <h1>Section 3</h1>
        </FullpageSection>
      </FullPageSections>
      <FullpageNavigation />
    </Fullpage>
  );
};

export default Example;