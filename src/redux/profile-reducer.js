const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profileReducer = (state, action) => {
  switch(action.type) {
    case ADD_NEW_POST:
      state.posts.push(
        {
          postText: state.newPostText, 
          likesCount: 0
        }
      )
      state.newPostText = ''
      return 
      break;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newPostText
      break;
    default:
      break;
  }
}

// Далее идут action creators
export const updateNewPostTextAC = (newText) => {
  return {
    type: 'UPDATE_NEW_POST_TEXT',
    newPostText: newText
  }
}

export const addNewPostACT = () => {
  return {
    type: 'ADD_NEW_POST'
  }
}

export default profileReducer;