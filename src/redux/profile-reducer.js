

const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
  posts: 
      [
        {
          postText: 'Hi, how are you?',
          likesCount: 11
        },
        {
          postText: "It's my first post",
          likesCount: 12
        },
        {
          postText: 'BlaBla',
          likesCount: 13
        },
        {
          postText: 'Dada',
          likesCount: 14
        }
      ],
      newPostText: ''
}

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_NEW_POST:
      return {...state, posts: [...state.posts, 
        {
          postText: state.newPostText, 
          likesCount: 0
        }
      ], newPostText: ''}
    case UPDATE_NEW_POST_TEXT:
      return {...state, newPostText: action.newPostText}
    default:
      return state
  }
}
// Далее идут action creators
export const addNewPostACT = () => {
  return {
    type: 'ADD_NEW_POST'
  }
}
export const updateNewPostTextAC = (newText) => {
  return {
    type: 'UPDATE_NEW_POST_TEXT',
    newPostText: newText
  }
}

export default profileReducer;