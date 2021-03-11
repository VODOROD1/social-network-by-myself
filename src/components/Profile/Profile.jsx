import  React from 'react';
import ProfileInfo from './ProfileInfo';
import MyPostsContainer from '../Posts/MyPostsContainer.jsx';

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo profile={props.profile} userId={props.userId} setPhoto={props.setPhoto}/>
      <MyPostsContainer dispatch={props.dispatch} 
      stateOfProfilePage={props.stateOfProfilePage}/>
    </div>
  )
}

export default Profile;