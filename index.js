import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./app"; // Correct import
import reportWebVitals from "./reportWebVitals"; // Add this line

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>
);

export default App;

reportWebVitals();