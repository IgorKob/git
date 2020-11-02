import React from 'react';
import classes from './messages.module.css';
import Dialog from "../Dialog/Dialog";
import {Redirect} from "react-router-dom";

const Messages = (props) => {
// debugger

  let newMessage = React.createRef();
  let addMessage = () => {
    props.addMessageActionCreator();
  }

  let newMessageChange = () => {
    // debugger
    let text = newMessage.current.value;
    props.newMessageChangeActionCreator(text);
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