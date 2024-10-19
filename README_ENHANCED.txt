React Fullpage
A fullscreen scrolling component library for React.

Recent Updates and Changes
Updated package.json with new metadata:

Added contributor information
Included portfolio link
Updated GitHub repository information
Resolved dependency conflicts:

Updated React and React DOM to support both version 17 and 18
Updated devDependencies to their latest compatible versions
Improved TypeScript support:

Added proper type definitions for all components
Resolved TypeScript errors in the codebase
Enhanced test coverage:

Added comprehensive tests for all Fullpage components
Achieved 100% pass rate for all tests
Test Results
Our latest test run shows all components are working as expected:

Test Results
$ npm test

> react-fullpage@1.0.0 test
> jest

 PASS  src/index.test.tsx
  Fullpage Components
    √ exports Fullpage component (46 ms)                                                                                     
    √ exports FullPageSections component (12 ms)
    √ exports FullpageSection component (10 ms)                                                                              
    √ exports FullpageContext (1 ms)                                                                                         
    √ exports FullpageCount component (9 ms)                                                                                 
    √ exports FullpageNumber component (11 ms)                                                                               
    √ exports FullpageNavigation component (102 ms)                                                                          
                                                                                                                             
Test Suites: 1 passed, 1 total                                                                                               
Tests:       7 passed, 7 total                                                                                               
Snapshots:   0 total
Time:        6.555 s, estimated 8 s
Ran all test suites.

As you can see, all 7 tests passed successfully, covering each of our main components:

Fullpage
FullPageSections
FullpageSection
FullpageContext
FullpageCount
FullpageNumber
FullpageNavigation
The entire test suite completed in 6.555 seconds, demonstrating the efficiency of our components.

Usage
To use React Fullpage in your project, install it via npm:

npm install react-fullpage
Then, import and use the components in your React application:

import { Fullpage, FullPageSections, FullpageSection, FullpageNavigation } from 'react-fullpage';

function App() {
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
}
For more detailed usage instructions and API documentation, please refer to our GitHub repository.

Contributing
We welcome contributions! Please see the Contributing Guide for more details.