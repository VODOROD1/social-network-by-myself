import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import usersReducer from './users-reducer'

let reducers = combineReducers({
  stateOfProfilePage: profileReducer,
  stateOfDialogsPage: dialogsReducer,
  stateOfUsersPage: usersReducer,
});

const store = createStore(reducers);

export default store;