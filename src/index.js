import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Example1 } from './Example1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Example1 />
  </React.StrictMode>,
);
