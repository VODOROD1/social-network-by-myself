import React from 'react'
import { connect } from 'react-redux'
import {compose} from 'redux'
import Users from './Users'
import {followTC,unfollowTC,setCurrentPageAC,
        setUsersTC} from '../../../redux/reducers/users-reducer'
import preloaderHOC from '../../../common/HOC/preloaderHOC' 
import Preloader from '../../../common/Preloader/Preloader'
import {getUsers,getPageSize,getTotalUsersCount,getCurrentPage,getIsFetching,
        getPreloaderFlag,getFollowingInProgress} from '../../../redux/selectors/users-selector'

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
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        preloaderFlag: getPreloaderFlag(state),
        followingInProgress: getFollowingInProgress(state)
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
