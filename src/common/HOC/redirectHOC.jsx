import React from 'react'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'

const redirectHOC = (WrappedComp) => {
    const newComp = class extends React.Component {
        render() {
            return (
                <>
                {
                    this.props.isAuth ? 
                    <WrappedComp {...this.props}/> :
                    <Redirect to='/login' />
                }
                </>
            )
        }
    }

    const mapStateToProps = (state) => {
        return {
            isAuth: state.auth.isAuth
        }
    }

    return connect(mapStateToProps,{})(newComp)
}

export default redirectHOC