import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Здесь store передаем одновременно со state т.к. в данный момент времени требуется
// store в нижних компонентах, но далее удалим
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

// rerenderEntireTree(store)

// store.subscribe(() => {
//   rerenderEntireTree(this)
// });
// rerenderEntireTree(store.getState())

// store.subscribe(() => {
//   let state = store.getState()
//   rerenderEntireTree(state)
// });

reportWebVitals()
