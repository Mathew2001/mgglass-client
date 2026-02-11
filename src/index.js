import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import rootReducer from './redux/reducers/rootReducer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import './assets/translate/i18n.js';

const store = configureStore({ reducer: rootReducer  });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <App />
      </React.Suspense>
    </Provider>
  </React.StrictMode>
);

