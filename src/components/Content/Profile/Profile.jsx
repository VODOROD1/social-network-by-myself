import  React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './Posts/MyPosts';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} 
                  updateStatus={props.updateStatus} isOwner={props.isOwner}
                  savePhoto={props.savePhoto}/>
      <MyPosts posts={props.posts} 
              // newPostText={props.newPostText}
              addNewPost={props.addNewPost}
              // updateNewPostText={props.updateNewPostText}
      />
    </div>
  )
}

export default Profile;