import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers, removeUsers} from '../../users/containers/redux/reducer_users'
import UsersNumber from './UsersNumber'
import '../style/home.scss'




const Home = ({fetchUsers, removeUsers, users}) => {


  const numberUserFetched = 1
  const numberUsersFetched = 10

  const loadNewUsers = () => fetchUsers(numberUsersFetched)

  const clearUsers =() => removeUsers()
  const loadOneNewUser =()=> fetchUsers(numberUserFetched)
 
  return (
    <>
      <UsersNumber users={users}/>
      <div className='buttonWrapper'>
        <button onClick={loadNewUsers}>Load</button>
        <button onClick={clearUsers}>Reset</button>
        <button onClick={loadOneNewUser}>Add</button>
      </div>
    </>
   );
}
 const mapDispatchToProps =(dispatch) =>({
  fetchUsers: (numberUsersFetched) => dispatch(fetchUsers(numberUsersFetched)),
  removeUsers: () => dispatch(removeUsers()),
  fetchUsers: (numberUserFetched) => dispatch(fetchUsers(numberUserFetched))
 })

 const mapStateToProps =(state) =>({
   users: state.users.users
 })
export default connect(mapStateToProps, mapDispatchToProps)(Home);