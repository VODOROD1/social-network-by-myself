import  React from 'react';
import styles from './styles/Users.module.css'
import User from './User'
import Pagination from '../../../common/Pagination/Pagination'


const Users = (props) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Users</h1>
      <Pagination 
              pagesCount={props.pagesCount} 
              currentPage={props.currentPage}
              setCurrentPage={props.setCurrentPage}
      />
      {props.users.map((user) => <User 
              user={user}
              key={user.id} 
              follow={props.follow}
              unfollow={props.unfollow}
              followingInProgress={props.followingInProgress}
              />)              
      }
      <button className={styles.showMore}>Show more</button>
    </div>
  )
}

export default Users;



// class ClassTest extends React.Component {
//     state = {count:0}

//     componentDidMount() {
//       this.id = setInterval(() => {
//         this.setState({count: this.state.count + 1})
//       },1000)
//     }
//     componentWillUnmount() {
//       clearInterval(this.id)
//     }

//     render() {
//       return (
//         <div>

//         </div>
//       )
//     }
// }

