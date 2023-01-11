import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { store } from './app/store';
import App from './App';
import {API} from './services/API'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ApiProvider api={API}>
           <App /> 
        </ApiProvider>
    </Provider>
);
