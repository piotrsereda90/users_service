import React from 'react'

import {connect} from 'react-redux'
import UserForm from '../users/containers/UserForm'
import {addMessage} from '../ui/reducer_messages'


const ContactForm = ({addMessage}) => {

  const handelForm = (values) => {

    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    const body = values;

    const options = {
      method: "POST",
      headers,
      mode: "cors",
      body: JSON.stringify(body),
    }
    fetch(process.env.REACT_APP_FORM_URL, options)
      .then(response => {
        if (response.ok) {
          return console.log(response.json())
        }
        throw new Error('Network response was not ok');
      })
      .then(data => {
        if (data.success) {
          return addMessage({ message: "Message was sent", type: "info" });
        }
        throw new Error('Send ERROR');
      })
      .catch(err => {
        addMessage({  message: "Message not send. Error occurred", type: "danger" });
        console.error('error', err)
      })
  }

  return (
    <UserForm onSubmit={handelForm}/>
   );
}

const mapDispatchToProps = (dispatch) => ({
  addMessage: (message, type) => dispatch(addMessage(message, type))
})
export default connect(null, mapDispatchToProps) (ContactForm);