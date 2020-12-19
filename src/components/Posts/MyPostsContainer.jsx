import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {addNewPostAC} from '../../redux/profile-reducer';
import {getPosts} from '../../redux/selectors/profile-selector'

const MyPostsContainer = (props) => {
  
  const addNewPost = (newPostText) => {
    let action = addNewPostAC(newPostText)
    props.addNewPost(action)
  }
  return (
    <MyPosts addNewPost={addNewPost}
    posts={props.posts}
    newPostText={props.newPostText} />
  )
}
const mapStateToProps = (state) => ({
  posts: getPosts(state)
})
const mapDispatchToProps = (dispatch) => ({
  addNewPost: function (action) {
    dispatch(action)
  },
})
export default connect(mapStateToProps,mapDispatchToProps)(MyPostsContainer);