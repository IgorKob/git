import React from 'react';
import classes from './messages.module.css';
import Dialog from "../Dialog/Dialog";
import {addMessageActionCreator, newMessageChangeActionCreator} from "../../Redux/messagesPages_reducer";



const Messages = (props) => {
// debugger

  let newMessage = React.createRef();
  let addMessage = () => {
    // let text = newMessage.current.value;
    // alert(text);
    // debugger
    // props.addMessage(text);
    // props.addMessage();
    // debugger
    // props.dispatch(addMessageActionCreator());
    props.addMessageActionCreator();
  }

  let newMessageChange = () => {
    // debugger
// alert(newMessage.current.value)
    let text = newMessage.current.value;
    // props.newMessageChange(text);

    // let action = {type: 'NEW-MESSAGE-CHANGE', text: text};
    // props.dispatch(newMessageChangeActionCreator(text));
    props.newMessageChangeActionCreator(text);
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
          {/*<div className={classes.messages_item}>asd</div>*/}
          {/*<div className={classes.messages_item}>dsad</div>*/}
          {props.igor.map(el => (
            <div className={classes.messages_item} key={el.id}>{el.message}</div>
          ))}
          <textarea ref={newMessage}
                    onChange={newMessageChange}
                    value={props.messStart}
                    className={classes.textarea}
                    name=""
                    id=""
                    rows="5"
          ></textarea>
          <button onClick={addMessage} className={classes.btn}>Send</button>
        </div>
      </div>
    </>
  );
}

export default Messages;