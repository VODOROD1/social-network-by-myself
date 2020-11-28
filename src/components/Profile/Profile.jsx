import  React from 'react';
import ProfileInfo from './ProfileInfo';
import MyPosts from '../Posts/MyPosts.jsx';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}

export default Profile;