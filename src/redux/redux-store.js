import {createStore,combineReducers, applyMiddleware} from 'redux'
import dialogsReducer from './reducers/dialogs-reducer'
import profileReducer from './reducers/profile-reducer'
import sidebarReducer from './reducers/sidebar-reducer'
import usersReducer from './reducers/users-reducer'
import authReducer from './reducers/auth-reducer'
import appReducer from './reducers/app-reducer'
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {composeWithDevTools } from 'redux-devtools-extension'

let reducers = combineReducers({
        dialogs: dialogsReducer,
        profile: profileReducer,
        sidebar: sidebarReducer,
        users: usersReducer,
        auth: authReducer,
        app: appReducer,
        form: formReducer
    }
)

let store = createStore(reducers, composeWithDevTools (
    applyMiddleware(thunkMiddleware)
))

window.store = store

export default store