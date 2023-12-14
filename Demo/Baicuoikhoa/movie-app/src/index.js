import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import store from './redux-tookit/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ToastContainer/>
     <App/>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
 