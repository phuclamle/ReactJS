import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import {BrowserRouter} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
      <BrowserRouter>
      <ToastContainer/>
      <App />
    
    </BrowserRouter>
    </React.Fragment>
);

 