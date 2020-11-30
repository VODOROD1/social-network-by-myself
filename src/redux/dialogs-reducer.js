const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
  switch(action.type) {
    case ADD_NEW_MESSAGE:
      state.messages.push(state.newMessageText)
      state.newMessageText = ''
      break;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessageText
      break;
    default:
      break;
  }
}

// Далее идут action creators
export const updateNewMessageTextAC = (newText) => {
  return {
    type: 'UPDATE_NEW_MESSAGE_TEXT', 
    newMessageText: newText
  }
}

export const addNewMessageAC = () => {
  return {
    type: 'ADD_NEW_MESSAGE'
  }
}

export default dialogsReducer;