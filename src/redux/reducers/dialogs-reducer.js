const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const initialState = {
  dialogItems: ['Sveta', 'Kostya', 'Sasha', 'Vitalyi', 'Dasha', 'Sergei', 'Nastya'],
  messages: ['message1', 'message2', 'message3', 'message4', 'message5', 'message6', 'message7'],
}

const dialogsReducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_NEW_MESSAGE:
      // state.messages.push(state.newMessageText)
      // state.newMessageText = ''
      return {...state,
            messages: [...state.messages, action.newDialogText],
          }
    // case UPDATE_NEW_MESSAGE_TEXT:
    //   state.newMessageText = action.newMessageText
    //   return {...state,
    //           newMessageText: action.newMessageText
    //         }
    default:
      return state
  }
}

// Далее идут action creators
// export const updateNewMessageTextAC = (newText) => {
//   return {
//     type: 'UPDATE_NEW_MESSAGE_TEXT', 
//     newMessageText: newText
//   }
// }

export const addNewMessageAC = (newDialogText) => {
  return {
    type: 'ADD_NEW_MESSAGE',
    newDialogText
  }
}

export default dialogsReducer;