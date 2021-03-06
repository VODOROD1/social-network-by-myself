import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import appReducer from './app-reducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
  stateOfProfilePage: profileReducer,
  stateOfDialogsPage: dialogsReducer,
  stateOfUsersPage: usersReducer,
  stateOfAuth: authReducer,
  stateOfApp: appReducer,
  form: formReducer,
});

const store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;