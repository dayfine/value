import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './app';
import Hello from './Hello'

console.log('hi')
console.log(React)
ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById('root') as HTMLElement
);
