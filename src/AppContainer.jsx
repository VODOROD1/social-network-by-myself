import React from 'react'
import App from './App'
import {connect} from 'react-redux'
import {setInitializeTC} from './redux/reducers/app-reducer'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/redux-store'

const AppContainer = (props) => {

    const setInitialize = () => { // Запрос на взятие аутентификационных данных
        let thunk = setInitializeTC()
        props.setInitialize(thunk)
    }

    return (
        <App setInitialize={setInitialize} initialized={props.initialized}/>
    )
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}
 
const mapDispatchToProp = (dispatch) => {
    return {
        setInitialize: (thunk) => {
            dispatch(thunk)
        }
    }
}

const ConnectedAppContainer = connect(mapStateToProps,mapDispatchToProp)(AppContainer)

const AppWithProvider =  (props) => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <ConnectedAppContainer />
            </Provider>
        </BrowserRouter>
    )
}

export default AppWithProvider