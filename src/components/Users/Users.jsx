import  React from 'react'
import styles from './Users.module.css'
import User from './User'

const Users = (props) => {

  users:[
    {id:1, followed:false , fullName:'Sveta' , status:'I am Sveta' , location:{city: 'Minsk', country: 'Belarus'}},
    {id:2, followed:true , fullName:'Gena' , status:'I am Gena' , location:{city: 'Moskow', country: 'Russia'}},
    {id:3, followed:false , fullName:'Dima' , status:'I am Dima' , location:{city: 'Kiev', country: 'Ukraine'}}
  ]

  React.useEffect(() => {
    props.setUsers(users)
  })

  const follow = (userId) => {
    props.follow(userId)
  }
  debugger;
  return (
   
    <div className={styles.usersWrapper}>
      <p className={styles.title}>USERS</p>
      {props.users.map(user => <User userData={user} follow={follow}/>)}
    </div>
  )
}

export default Users;