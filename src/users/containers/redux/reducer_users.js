import axios from 'axios'
import {addMessage} from '../../../ui/redux/reducer_messages'

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';
const RESET_USERS = 'RESET_USERS'


const INITIAL_STATE = {
  users:[],
  isLoading: false,
  isError: false,
}

const fetchRequested = () => ({ type: FETCH_USERS_REQUESTED });
const fetchFailed = () => ({ type: FETCH_USERS_FAILED });
const fetchSucceeded = (data) => ({
  type: FETCH_USERS_SUCCEEDED,
  payload: data
});
export const resetUsers = () => ({type:RESET_USERS})


export const removeUsers = ()=> {
  return function(dispatch){
    dispatch(resetUsers());
    dispatch(addMessage({message:'users have been removed', type:'warning'}));
  }
}


export const fetchUsers = (initialValue) => {
  return function(dispatch){
    dispatch(fetchRequested());
    axios
      .get(`https://randomuser.me/api/?results=${initialValue}`)
      .then(response => {
        dispatch(fetchSucceeded(response.data.results));
        if(initialValue === 10){
          dispatch(addMessage({message:'Users have been loaded', type:'info'}));
        }else if(initialValue === 1){
          dispatch(addMessage({message: 'User have been added', type:'danger'}))
        }
      })
      .catch(error => {
        console.log(error)
        dispatch(fetchFailed())
      });
  };
};

export default (state=INITIAL_STATE, action) => {
  switch(action.type){
  case FETCH_USERS_REQUESTED:
    return{
      ...state,
      isLoading: true,
      isError: false,
    }
  case FETCH_USERS_SUCCEEDED:
    if(action.payload.length===10){
      return{
        ...state,
        isLoading: false,
        isError:false,
        users: action.payload
      }
    }else if(action.payload.length===1){
      return{
        ...state,
        isLoading: false,
        isError:false,
        users: state.users.concat(action.payload)
      }
    }
    case FETCH_USERS_FAILED:
      return{
        ...state,
        isLoading: false,
        isError:true,
      }
      case RESET_USERS:
        return{
          ...state,
          isLoading: false,
          isError:false,
          users:[]
        }
      default: return state
}
}