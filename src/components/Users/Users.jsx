import React from 'react'
import styles from './Users.module.css'
import Pagination from '../../common/Pagination/Pagination'
import User from './User'

const Users = (props) => {

  React.useEffect(() => {       // Берем общее количество пользователей
    props.setTotalCount()
  },[])
  React.useEffect(() => {       // берем профили пользователей
    props.setUsers(props.currentPage)
  },[props.currentPage])
  //////////////////////////////////////////////////////////////////
  const follow = (userId) => {
    props.follow(userId)
  }

  const unfollow = (userId) => {
    props.unfollow(userId)
  }

  return (
    <div className={styles.usersWrapper}>
      {/* <p className={styles.title}>USERS</p> */}
      <div className={styles.pagination}><Pagination pagesCount={props.pagesCount} currentPage={props.currentPage} selectPage={props.selectPage}/></div>
      {/* <p className={styles.pagination}>{pages.length !== 0 ? pages : 'Pagination are counted!'}</p> */}
      {props.users !== undefined ? 
      props.users.map(user => <User arrFollowingInProgress={props.arrFollowingInProgress} userData={user} follow={follow} unfollow={unfollow}/>) : 
      'Users are downloaded!'}
    </div>
  )
}

export default Users;