import profileReducer, {addNewPostAC,setStatusAC} from '../profile-reducer';

let initialState = {
    posts: 
        [
          {
            postText: 'Hi, how are you?',
            likesCount: 11
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
        ],
    profile: {},
    status: '',
    isFetching: true,
}

test('new post should be added', () => {
    let action = addNewPostAC('New POST!')
    let newState1 = profileReducer(initialState,action)
    expect(newState1.posts[4].postText).toBe('New POST!')
})

test('status should be added', () => {
    let action = setStatusAC('New status from test!')
    let newState2 = profileReducer(initialState,action)
    expect(newState2.status).toBe('New status from test!')
})

