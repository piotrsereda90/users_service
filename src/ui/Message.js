import React,{useEffect} from 'react'
import{connect} from 'react-redux'
import{removeMessage} from './reducer_messages'

const Message = ({message, type, isDisplayed, removeMessage}) => {
  
  const handelClosePopup = ()=> removeMessage()
  useEffect(()=>{
    const setInfo = setTimeout(() => {
      console.log(isDisplayed)
      if(isDisplayed){
      removeMessage()
      }
    }, 3000);
    return ()=> clearTimeout(setInfo)
  })
  
  return ( 
    <div style={{display: isDisplayed?'block': 'none'}} className={`type-${type}`}>
     <span>{message}</span><button onClick={handelClosePopup}>X</button>
    </div>);
}


const mapStateToProps = (state) => ({
message: state.message.message,
type: state.message.type,
isDisplayed: state.message.isDisplayed
})
const mapDispatchToProps =(dispatch) => ({
removeMessage: ()=>dispatch(removeMessage())
})
export default connect(mapStateToProps, mapDispatchToProps)(Message);

