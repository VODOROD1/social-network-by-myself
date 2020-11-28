import  React from 'react';
import Post from './Post';

const MyPosts = (props) => {
  let [posts, setPosts] = React.useState(
    [
      {
        postText: 'Hi, how are you?',
        likesCount: 12
      },
      {
        postText: "It's my first post",
        likesCount: 12
      },
      {
        postText: 'BlaBla',
        likesCount: 13
      },
      {
        postText: 'Dada',
        likesCount: 14
      }
    ]
  )
  return (
    <div>
      <textarea placeholder='Enter your post'></textarea>
      <button>Add post</button>
      {posts.map(post => <Post postText={post.postText} 
                              likesCount={post.likesCount}/>)}
        
    </div>
  )
}

export default MyPosts;