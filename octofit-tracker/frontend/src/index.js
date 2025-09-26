


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Log the codespace REST API base for debugging
console.log('Codespace REST API base:', `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/`);

reportWebVitals();
