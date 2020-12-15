import  React from 'react';
import Post from './Post/Post';
import {Field,reduxForm} from 'redux-form'
import {requairedValid,maxLengthCreator} from '../../validation/profileValidation'
import Textarea from '../../common/customFields/Textarea'

const maxLength10 = maxLengthCreator(10)

const NewPostForm = (props) => {
  // debugger;
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name='newPostText' placeholder='Enter your post' component={Textarea} type='text'
        validate={[requairedValid,maxLength10]}/>
        <button>Add post</button>
    </form>
  )
}

const NewPostReduxForm = reduxForm({form: 'newPost'})(NewPostForm)

const MyPosts = (props) => {

  // const updateNewPostText = (e) => {
  //   props.updateNewPostText(e.target.value)
  // }
  const addNewPost = (formData) => {
    props.addNewPost(formData.newPostText)
  }
  return (
    <div>
      <NewPostReduxForm onSubmit={addNewPost}/>
      {props.posts.map(post => <Post postText={post.postText} 
                              likesCount={post.likesCount}/>)}
    </div>
  )

}

export default MyPosts;