import  React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './Posts/MyPosts';

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