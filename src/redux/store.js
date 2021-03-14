import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

export const store = {
  _callSubscriber() {
    console.log('no subscribers (observers)')
  },
  _state: {
    dialogsPage: {
      dialogItems: ['Sveta', 'Kostya', 'Sasha', 'Vitalyi', 'Dasha', 'Sergei', 'Nastya'],
      messages: ['message1', 'message2', 'message3', 'message4', 'message5', 'message6', 'message7'],
      newMessageText: ''
    },

    profilePage: {
      posts: 
      [
        {
          id: 1,
          postText: 'Hi, how are you?',
          likesCount: 11
        },
        {
          id: 2,
          postText: "It's my first post",
          likesCount: 12
        },
        {
          id: 3,
          postText: 'BlaBla',
          likesCount: 13
        },
        {
          id: 4,
          postText: 'Dada',
          likesCount: 14
        }
      ],
      newPostText: ''
    },
    
    sideBar: {
      friends:
      [
        {
          name: 'Kolya',
          ava: ''
        },
        {
          name: 'Sveta',
          ava: ''
        },
        {
          name: 'Petya',
          ava: ''
        },
      ]
    }
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  /////////////////////////////////////////////
  // идут обработчики событий
  dispatch(action) {
    profileReducer(this._state.profilePage,action)
    dialogsReducer(this._state.dialogsPage,action)
    this._callSubscriber(this)
  },
}
