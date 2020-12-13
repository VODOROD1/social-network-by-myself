import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
  stateOfProfilePage: profileReducer,
  stateOfDialogsPage: dialogsReducer,
  stateOfUsersPage: usersReducer,
  stateOfAuth: authReducer,
});

const store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;