import  React from 'react';
import Post from './Post/Post';
import {updateNewPostTextAC,addNewPostACT} from '../../redux/profile-reducer';

const MyPosts = (props) => {

  const updateNewPostText = (e) => {
    let action = updateNewPostTextAC(e.target.value)
    props.dispatch(action)
  }
  const addNewPost = (e) => {
    let action = addNewPostACT()
    props.dispatch(action)
  }
  return (
    <div>
      <textarea onInput={updateNewPostText} placeholder='Enter your post' 
                value={props.newPostText}></textarea>
      <div>
        <button onClick={addNewPost}>Add post</button>
      </div>
      {props.posts.map(post => <Post postText={post.postText} 
                              likesCount={post.likesCount}/>)}
    </div>
  )

}

export default MyPosts;