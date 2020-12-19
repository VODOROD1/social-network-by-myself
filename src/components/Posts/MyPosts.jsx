import  React from 'react';
import Post from './Post/Post';
import {Field,reduxForm} from 'redux-form'
import {requairedValid,maxLengthCreator} from '../../common/validation/formValidation'
// import Textarea from '../../common/customFields/Textarea'
import {Textarea} from '../../common/customFields/CustomFields'

const maxLength10 = maxLengthCreator(10)

const NewPostForm = (props) => {
  // debugger;
  return (
    <form onSubmit={props.handleSubmit}>
      <Field fieldValue={'Some val'} name='newPostText' placeholder='Enter your post' component={Textarea} type='text'
        validate={[requairedValid,maxLength10]}/>
        <button>Add post</button>
    </form>
  )
}

const NewPostReduxForm = reduxForm({form: 'newPost'})(NewPostForm)

const MyPosts = (props) => {
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