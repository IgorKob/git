import React from 'react';
import classes from './messages.module.css';
import Dialog from "../Dialog/Dialog";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreater, required} from "../../utils/validators";
import {Textarea} from "../all/FormsControls/FormsControls";
import { initialStateMessType } from '../../Redux/messagesPages_reducer';

type PropsType = {
  addMessageActionCreator: (newMessage: string) => void,
  isAuth: boolean,
  igor: Array<initialStateMessType>
}

const Messages: React.FC<PropsType> = (props) => {

  let newMessage = React.createRef();

  let addNewMessage = (value: any) => {
    props.addMessageActionCreator(value.newMessage);
  }
 
  if (props.isAuth === false) {
    return (<Redirect to={'/login'} />)
  }


  return (
    <>
      <div className={classes.messages_wrapper}>
        <div className={classes.messages_dialogs}>
          <div className={classes.messages_dialog}>
            <Dialog name={'Igor'} />
          </div>
          <div className={classes.messages_dialog}>
            <Dialog name={'Oleg'} />
          </div>
        </div>
        <div className={classes.messages_items}>
          <div>
            {props.igor.map(el => (
              <div className={classes.messages_item} key={el.id}>{el.message}</div>
            ))}
          </div>

          <AddMessageFormRedux onSubmit={addNewMessage}/>

        </div>
      </div>
    </>
  );
}


let maxLength30 = maxLengthCreater(30);

type AddMessageFormType = {
  handleSubmit: any
}

const AddMessageForm: React.FC<AddMessageFormType> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={Textarea}
             name='newMessage'
             placeholder='Add message..'
             validate={[required, maxLength30]}
      />
          <button className={classes.btn}>Send</button>
      </form>
  );
}

const AddMessageFormRedux = reduxForm({form: 'MessageFormPage'})(AddMessageForm);

export default Messages;