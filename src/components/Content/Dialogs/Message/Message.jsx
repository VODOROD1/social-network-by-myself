import  React from 'react';
import styles from './Message.module.css';

const Message = (props) => {
  return (
    <div className={styles.message}>
      {props.message}
    </div>
  )
}

export default Message;



// const FuncTest = (props) => {

//   const [state,dispatch] = React.useReducer(reducer,initialState)
//   // const [count,setCount] = React.useState(0)
//   const [count,step] = state

//   React.useEffect(() => {
//     const id = setInterval(() => {
//       dispatch({type: 'INCREASE_COUNT'})
//     },1000)
//     // return () => {
//     //   clearInterval(id)
//     // }
//   },[dispatch])

//   return (
//     <div>
//       <span>{count}</span>
//       <input type='text' onChange={(e) => {setStep(e.target.value)}} />
//     </div>
//   )
// }

