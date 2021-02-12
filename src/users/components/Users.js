import React from 'react'

import {connect} from 'react-redux'
import {fetchUsers} from '../containers/redux/reducer_users'
import '../style/users.scss'

const Users = ({users,fetchUsers}) => {

  !users&&fetchUsers()
console.log(users)
  return (
  <div className='usersContainer'>
    {users.map((user)=> (
      <div className='user' key={user.login.uuid}>
        <div>
          {<img src={ user.picture.large} alt="user_picture"/>}
        </div>
        <div>
          <p>{user.name.first} {user.name.last}</p>
          <p>{user.location.country}</p>
        </div>
      </div>
    ))}
  </div>
  );
}

const mapStateToProps =(state)=> ({
  users: state.users.users
})
const mapDispatchToProps =(dispatch)=> ({
  fetchUsers: ()=> dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);