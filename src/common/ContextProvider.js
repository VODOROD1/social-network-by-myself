import {createContext} from 'react';

let Context = createContext();

const ContextProvider = (props) => {
  return (
    <Context.Provider store={props.store}>
      {props.children}
    </Context.Provider>
  )
} 

export default ContextProvider;