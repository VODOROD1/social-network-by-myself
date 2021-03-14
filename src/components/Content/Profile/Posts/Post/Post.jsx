import  React from 'react';

const Post = (props) => {
  return (
    <div>
      <img src='https://pbs.twimg.com/profile_images/460533834547601408/5bbvogtJ.jpeg' alt='ava'/>
      {props.postText}
      <div>
        Like: {props.likesCount}
      </div>
    </div>
  )
}

export default Post;

