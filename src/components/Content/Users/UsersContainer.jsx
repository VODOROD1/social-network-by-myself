import React from 'react'
import { connect } from 'react-redux'
import {compose} from 'redux'
import Users from './Users'
import {followTC,unfollowTC,setCurrentPageAC,
        setUsersTC} from '../../../redux/reducers/users-reducer'
import preloaderHOC from '../../../common/HOC/preloaderHOC' 
import Preloader from '../../../common/Preloader/Preloader'

const UsersContainer = (props) => {

    const [pagesCount, setPagesCount] = React.useState(0) 

    React.useEffect(() => { // Устанавливаем пользователей
        let thunk = setUsersTC(props.pageSize,props.currentPage,props.totalUsersCount)
        props.setUsers(thunk)
    },[props.currentPage])

    React.useEffect(() => {     // рассчитываем колво страниц
        let pagesCount = Math.ceil(props.totalCount/props.pageSize)
        setPagesCount(pagesCount)   
    },[props.totalCount])

    const setCurrentPage = (currentPage) => {
        let action = setCurrentPageAC(currentPage)
        props.setCurrentPage(action)
    }

    const follow = (id) => {
        let thunk = followTC(id)
        props.follow(thunk)
    }

    const unfollow = (id) => {
        let thunk = unfollowTC(id)
        props.unfollow(thunk)
    }

    return (
        <>
        {
            props.isFetching ? 
            <Preloader /> :
            <Users users={props.users} 
                    currentPage={props.currentPage}        
                    follow={follow}
                    unfollow={unfollow}
                    pagesCount={pagesCount}   
                    setCurrentPage={setCurrentPage}
                    followingInProgress={props.followingInProgress}
            />
        }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        preloaderFlag: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
}

const mapDispatchToProp = (dispatch) => {
    return {
        follow: (thunk) => { dispatch(thunk) },
        unfollow: (thunk) => { dispatch(thunk) },
        setUsers: (thunk) => { dispatch(thunk) },
        setCurrentPage: (action) => { dispatch(action) },
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProp),
    // preloaderHOC    // Отображение прелоадера
)(UsersContainer)
