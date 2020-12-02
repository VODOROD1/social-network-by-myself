import  React from 'react';
import Post from './Post/Post';

const MyPosts = (props) => {

  const updateNewPostText = (e) => {
    props.updateNewPostText(e.target.value)
  }
  const addNewPost = (e) => {
    props.addNewPost()
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