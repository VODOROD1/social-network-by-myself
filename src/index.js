import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/redux-store'
import './index.css';
import AppContainer from './AppContainer';
import reportWebVitals from './reportWebVitals';

setInterval(() => {
    store.dispatch({type: 'TEST_ACTION'})
},1000)

  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  )


// export const rerenderEntireTree = (store) => { 
//   ReactDOM.render(
//     <BrowserRouter>
//         <App state={store.getState()} dispatch={store.dispatch.bind(store)}
//               addPost={store.addPost}/>
//     </BrowserRouter>,
//     document.getElementById('root')
//   )
// }

// store.subscribe(rerenderEntireTree);

// rerenderEntireTree(store);

reportWebVitals();
