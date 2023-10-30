import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
 import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import App from './App';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode: render ra 2 lần để đảm bảo chắc chắn về tính hiển thị
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

 
