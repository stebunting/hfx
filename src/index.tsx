import React from 'react';
import { createRoot } from 'react-dom/client';
import App from 'src/App';

const container = document.getElementById('root');
if (!container) {
  throw new Error('root element undefined');
}

const root = createRoot(container);
root.render(<App />);
