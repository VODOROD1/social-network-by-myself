import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Preloader from '../common/Preloader/Preloader'

const withAuthRedirectHOC = (Comp) => {
    let WrappedComp = class extends React.Component {
        constructor(props) {
            super(props)
        }
        render() {
            if(this.props.isAuth !== undefined){
                if(this.props.isAuth ) {
                    return <Comp {...this.props}/>
                } else {return <Redirect to={'/auth'}/>}
            } else {return <Preloader />}
        }
    }

    const mapStateToProps = (state) => {
        return {
            isAuth: state.stateOfAuth.isAuth
        }
    }
    
    const mapDispatchToProps = (dispatch) => {
        return {}
    }
    
    return connect(mapStateToProps,mapDispatchToProps)(WrappedComp)

}

export default withAuthRedirectHOC

