import{combineReducers} from 'redux'
import reducer_users from './users/containers/reducer/reducer_users'
import reducer_messages from './ui/reducer_messages'
import { reducer as formReducer } from 'redux-form'

const rootReducers = combineReducers({
  users:reducer_users,
  message: reducer_messages,
  form: formReducer,
});
export default rootReducers