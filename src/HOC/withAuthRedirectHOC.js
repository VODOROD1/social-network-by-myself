import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Preloader from '../common/Preloader/Preloader'
import {setCurrentPageAC} from '../redux/auth-reducer'

const withAuthRedirectHOC = (Comp) => {
    let WrappedComp = class extends React.Component {
        constructor(props) {
            super(props)
        }
        render() {
            debugger
            console.log(this.props.match.path)
            console.log(this.props.match.url)
                if(this.props.isAuth ) {
                    return <Comp {...this.props}/>
                } else {
                    let action = setCurrentPageAC(this.props.match.path)
                    this.props.setCurrentPage(action)
                    return <Redirect to={'/auth'}/>
                }
        }
    }

    const mapStateToProps = (state) => {
        return {
            isAuth: state.stateOfAuth.isAuth
        }
    }
    
    const mapDispatchToProps = (dispatch) => {
        return {
            setCurrentPage: (action) => {
                dispatch(action)
            }
        }
    }
    
    return connect(mapStateToProps,mapDispatchToProps)(withRouter(WrappedComp))
    // где withRouter библиотека для доступа к поисковой строке
}

export default withAuthRedirectHOC

