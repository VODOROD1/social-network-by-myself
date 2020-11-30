import  React from 'react';
import ProfileInfo from './ProfileInfo';
import MyPosts from '../Posts/MyPosts.jsx';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts} addNewPost={props.addNewPost}
              newPostText={props.newPostText} dispatch={props.dispatch}/>
    </div>
  )
}

export default Profile;