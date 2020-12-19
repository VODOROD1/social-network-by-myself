import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProvidedApp from './App';
import reportWebVitals from './reportWebVitals';
// Здесь store передаем одновременно со state т.к. в данный момент времени требуется
// store в нижних компонентах, но далее удалим
ReactDOM.render(
  <ProvidedApp />,
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
