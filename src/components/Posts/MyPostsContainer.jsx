import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {updateNewPostTextAC,addNewPostAC} from '../../redux/profile-reducer';

const MyPostsContainer = (props) => {
  
  const updateNewPostText = (value) => {
    let action = updateNewPostTextAC(value)
    props.updateNewPostText(action)
  }
  const addNewPost = (newPostText) => {
    let action = addNewPostAC(newPostText)
    props.addNewPost(action)
  }
  return (
    <MyPosts updateNewPostText={updateNewPostText} addNewPost={addNewPost}
    posts={props.posts}
    newPostText={props.newPostText} />
  )
}
const mapStateToProps = (state) => ({
  posts: state.stateOfProfilePage.posts,
  newPostText: state.stateOfProfilePage.newPostText
})
const mapDispatchToProps = (dispatch) => ({
  updateNewPostText: function (action) {
    dispatch(action)
  },
  addNewPost: function (action) {
    dispatch(action)
  },
})
export default connect(mapStateToProps,mapDispatchToProps)(MyPostsContainer);