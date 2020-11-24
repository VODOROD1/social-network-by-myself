import logo from './logo.svg';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs.jsx';

function App() {
  return (
    <div className="app-wrapper">
      <header className='header'>
        <img src='' />
      </header>
      <div className='nav'>
        <nav>
          <div>
            Profile
          </div>
          <div>
            Message
          </div>
        </nav>
      </div>
      <div className='content'>
        <Dialogs />
      </div>
    </div>
  );
}

export default App;
