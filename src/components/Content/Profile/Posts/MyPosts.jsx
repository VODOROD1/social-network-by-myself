import React from 'react';
import styles from './MyPosts.module.css'
import Post from './Post/Post';
import getKey from '../../../../common/key/createKey'
import {Field,reduxForm} from 'redux-form'
import {Textarea} from '../../../../common/FormsControls/FormsControls'
import {isRequire,maxLengthCreator} from '../../../../common/validators/validators'


const validateMaxLength30 = maxLengthCreator(30)

const newPostForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
          <div>
            <Field component={Textarea} name={'newPostText'} {...props}
                    validate={[isRequire,validateMaxLength30]}/>
          </div>
          <div>
            <button>Add post</button>
          </div>
      </form>
    )
}

const NewPostReduxForm = reduxForm({form: 'newPostForm'})(newPostForm)

const MyPosts = (props) => {
  console.log('MyPosts render!')
  return (
    <div className={styles.wrapper}>
        <NewPostReduxForm onSubmit={props.addNewPost} placeholder='Enter your post' />
          
        {props.posts.map(post => <Post postText={post.postText} 
                              likesCount={post.likesCount} key={getKey(post.postText)}/>)}
    </div>
  )

}

export default React.memo(MyPosts);