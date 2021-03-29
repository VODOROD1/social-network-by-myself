import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import AsideContainer from './components/Aside/AsideContainer';
import News from './components/Content/News/News';
import Music from './components/Content/Music/Music';
import UsersContainer from './components/Content/Users/UsersContainer';
import Settings from './components/Content/Settings/Settings';
import LoginContainer from './components/Content/Login/LoginContainer'
import Preloader from './common/Preloader/Preloader'
import suspenseHOC from './common/HOC/suspenseHOC'

const ProfileContainer = React.lazy(() => import('./components/Content/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Content/Dialogs/DialogsContainer'))


class App extends React.Component {

  constructor(props) {
    super(props)
    props.setInitialize()
  }

  render() {
    return (
      <>
      {
        this.props.initialized ?
        (<div className="app-wrapper">
          <HeaderContainer />
          <AsideContainer />
          <div className='app-wrapper-content'>
            <Route path='/profile/:userId?' key={1} 
                    render={suspenseHOC(ProfileContainer)}
            />
            <Route path='/dialogs' key={2} 
                    render={suspenseHOC(DialogsContainer)}
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
                    render={() => {return <LoginContainer />}}/>
          </div>
        </div>) :
        <Preloader />
      }
      </>
    );
  }
}

export default App;

// export default compose(
//   withRouter,
//   connect(mapStateToProps, mapDispatchToProp)
// )(App)
