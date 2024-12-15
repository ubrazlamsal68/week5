import ReactDOM from 'react-dom';
import React from 'react';
import AddNumbers from './AddNumbers'; // Correct the import

ReactDOM.render(
  <AddNumbers num1={5} num2={10} />, // Correct the syntax for passing props
  document.getElementById('root')
);
