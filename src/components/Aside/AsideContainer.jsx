import React from 'react'
import Aside from './Aside'
import {connect} from 'react-redux'

const AsideContainer = (props) => {
    return (
        <Aside friends={props.friends}/>
    )
}

const mapStateToProps = (state) => {
    return {
        friends: state.sidebar.friends
    }
}

const mapDispatchToProp = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProp)(AsideContainer)