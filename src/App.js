import React from 'react';
import {Route,withRouter} from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import AuthContainer from './components/auth/AuthContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/Auth' key={0}
                  render={() => <AuthContainer />}/>
          <Route path='/profile/:userId?' key={1} 
                  render={() => <ProfileContainer />}
          />
          <Route path='/dialogs' key={2} 
                  render={() => <DialogsContainer />}
          />
          <Route path='/news' key={3} 
                  render={() => <News />}
          />
          <Route path='/music' key={4} 
                  render={() => <Music />}
          />
          <Route path='/users' key={5} 
                  render={() => <UsersContainer />}
          />
          <Route path='/settings' key={6} 
                  render={() => <Settings />}
          />
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
