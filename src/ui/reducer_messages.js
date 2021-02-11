const ADD_MESSAGE = 'ADD_MESSAGE'
const REMOVE_MESSAGE = 'REMOVE_MESSAGE'

const initialState = {
  message: '',
  type: '',
  isDisplayed: false
}

export const addMessage = (data)=>({
type: ADD_MESSAGE,
payload: data
})

export const removeMessage = () => ({
  type: REMOVE_MESSAGE
})

export default (state=initialState, action) => {
  console.log(action.payload)
switch(action.type){
  case ADD_MESSAGE:
    return{
      ...state,
        message: action.payload.message,
        type: action.payload.type,
        isDisplayed: true
    }
  case REMOVE_MESSAGE:
    return{
      ...state,
      message: '',
      type: '',
      isDisplayed: false

    }
    default: return state
}
}

