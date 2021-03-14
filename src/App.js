import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Content/Profile/Profile';
import Dialogs from './components/Content/Dialogs/Dialogs';
import News from './components/Content/News/News';
import Music from './components/Content/Music/Music';
import Users from './components/Content/Users/Users';
import Settings from './components/Content/Settings/Settings';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <Navbar friends={this.props.state.sideBar.friends}/>
        <div className='app-wrapper-content'>
          <Route path='/profile' key={1} 
                  render={() => 
                      <Profile 
                          posts={this.props.state.profilePage.posts} 
                          newPostText={this.props.state.profilePage.newPostText}
                          dispatch={this.props.dispatch} 
                          addPost={this.props.addPost}
                      />}
          />
          <Route path='/dialogs' key={2} 
                  render={() => 
                      <Dialogs 
                            dialogItems={this.props.state.dialogsPage.dialogItems} 
                            messages={this.props.state.dialogsPage.messages}
                            dispatch={this.props.dispatch} 
                            newMessageText={this.props.state.dialogsPage.newMessageText}
                      />}
          />
          <Route path='/news' key={3} 
                  render={() => <News />}/>
          <Route path='/music' key={4} 
                  render={() => <Music />}/>
          <Route path='/users' key={5} 
                  render={() => <Users />}/>
          <Route path='/settings' key={6} 
                  render={() => <Settings />}/>
        </div>
      </div>
    );
  }
}

export default App;

// export default compose(
//   withRouter,
//   connect(mapStateToProps, mapDispatchToProp)
// )(App)
