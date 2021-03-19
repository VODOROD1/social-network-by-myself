import React from 'react'
import App from './App'
import {connect} from 'react-redux'
import {setInitializeTC} from './redux/reducers/app-reducer'

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

export default connect(mapStateToProps,mapDispatchToProp)(AppContainer)

