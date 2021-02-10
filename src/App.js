import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Home from './home/components/Home'
import Users from './users/components/Users'
import Message from './ui/Message'
import UserForm from './users/containers/UserForm'

function App() {

  const handelForm = (values) => {
    console.log('values',values)

  }
  return (
    <div className="App">
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
            </ul>
          </nav>
        </div>
        <Message/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/users'>
            <Users/>
          </Route>
        </Switch>
        <UserForm onSubmit={handelForm}/>
      </Router>
    </div>
  );
}

export default App;
