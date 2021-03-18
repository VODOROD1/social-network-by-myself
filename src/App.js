import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import AsideContainer from './components/Aside/AsideContainer';
import ProfileContainer from './components/Content/Profile/ProfileContainer';
import DialogsContainer from './components/Content/Dialogs/DialogsContainer';
import News from './components/Content/News/News';
import Music from './components/Content/Music/Music';
import UsersContainer from './components/Content/Users/UsersContainer';
import Settings from './components/Content/Settings/Settings';
import Login from './components/Content/Login/Login'

class App extends React.Component {

  render() {
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <AsideContainer />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' key={1} 
                  render={() => 
                      <ProfileContainer />}
          />
          <Route path='/dialogs' key={2} 
                  render={() => 
                      <DialogsContainer />}
          />
          <Route path='/news' key={3} 
                  render={() => <News />}/>
          <Route path='/music' key={4} 
                  render={() => <Music />}/>
          <Route path='/users' key={5} 
                  render={() => <UsersContainer />}/>
          <Route path='/settings' key={6} 
                  render={() => <Settings />}/>
          <Route path='/login' key={7}
                  render={() => {return <Login />}}/>
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
