import './App.scss';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './home/components/Home'
import Users from './users/components/Users'
import Message from './ui/components/Message'
import HandelForm from './form/containers/HandelForm';

function App() {

  return (
    <div className="App">
      <div className='Wrapper'>
        <Router>
          <div className='routing'>
            <nav>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/users'>Users</Link>
                </li>
                <li>
                  <Link to='/form'>Form</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/users'>
              <Users/>
            </Route>
            <Route path='/form'>
              <HandelForm/>
            </Route>
          </Switch>
          <Message/>
        </Router>
      </div>
    </div>
  );
}

export default App;
