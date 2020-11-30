import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const rerenderEntireTree = (store) => { 
  ReactDOM.render(
    <BrowserRouter>
        <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>,
    document.getElementById('root')
  )
}

store.subscribe(rerenderEntireTree);

rerenderEntireTree(store);

reportWebVitals();
