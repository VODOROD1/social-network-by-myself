import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import AppWithProvider from './AppContainer'

// setInterval(() => {
//     store.dispatch({type: 'TEST_ACTION'})
// },1000)

  ReactDOM.render(<AppWithProvider />,document.getElementById('root'))


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
