import  React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

  return (
    <div className={styles.wrapper}>
      <textarea onInput={props.updateNewPostText} 
                placeholder='Enter your post' 
                value={props.newPostText}>      
      </textarea>
      <div>
        <button onClick={props.addNewPost}>Add post</button>
      </div>
          {props.posts.map(post => <Post postText={post.postText} 
                              likesCount={post.likesCount}/>)}
      </div>
  )

}

export default MyPosts;