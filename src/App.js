import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import {Route} from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'
import {setInitializedTC} from './redux/app-reducer'
import {getInitializedBoolVal} from './redux/selectors/app-selector'
import Preloader from './common/Preloader/Preloader'
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import AuthContainer from './components/auth/AuthContainer';
import withSuspenseHOC from './HOC/withSuspenseHOC'
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let thunk = setInitializedTC()
    this.props.setInitialize(thunk)
  }

  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' key={1} 
                  render={() => {
                    let Profile = withSuspenseHOC(ProfileContainer)
                    return <Profile />
                  }}
          />
          <Route path='/dialogs' key={2} 
                  render={() => {
                    let Dialogs = withSuspenseHOC(DialogsContainer)
                    return <Dialogs/>
                  }}
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
          <Route path='/auth' key={7}
                  render={() => <AuthContainer />}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: getInitializedBoolVal(state)
  }
}

const mapDispatchToProp = (dispatch) => {
  return {
    setInitialize: (thunk) => {
      dispatch(thunk)
    }
  }
}

const WrappedApp = compose(
  connect(mapStateToProps,mapDispatchToProp),
  withRouter
)(App)

const ProvidedApp = (props) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <WrappedApp />
      </Provider>
    </BrowserRouter>
  )
}

export default ProvidedApp

// export default compose(
//   withRouter,
//   connect(mapStateToProps, mapDispatchToProp)
// )(App)
