import React , { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './App/store'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>

 
    <BrowserRouter>
    <Suspense fallback={<div>Loading....</div>}>
      <App />
    </Suspense>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
