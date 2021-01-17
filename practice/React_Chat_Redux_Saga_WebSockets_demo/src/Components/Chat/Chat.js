import React, { useState } from 'react'
import classes from './Chat.module.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addMessage, addUser } from '../../Redux/ActionCreators';
import handleNewMessage, { sagaMiddleware } from '../../Redux/sagas';
import setupSocket from '../../Sockets/Sockets';


export default function Chat(props) {

    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [message, setMessage] = useState('');
    
    const user = useSelector(state => state.chat.user)
    const users = useSelector(state => state.chat.users)
    const messages = useSelector(state => state.chat.messages)

    const dispatch = useDispatch();


    const handleChangeLogin = ({target}) => {
        setUsername(target.value)
    }

    const handleChangePass = ({target}) => {
        setPass(target.value)
    }

    const onSubmitLogin = (e) => {

        e.preventDefault();
        const id = users.length;
        dispatch(addUser(id, username));

        // start 
        const socket = setupSocket(dispatch, username);
        sagaMiddleware.run(handleNewMessage, {socket, username});

    }



    const handleChange = ({target}) => {
        setMessage(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addMessage(message, username));
        setMessage('');
    }



    return (
        <div className={classes.wrapper}>

            {user.name.length === 0 ? (            

                    <div className={classes.login_wrapper}>
                        <form onSubmit={onSubmitLogin} className={classes.login_form}>
                            <input value={username} onChange={handleChangeLogin} placeholder='Name...' />
                            <input value={pass} onChange={handleChangePass} placeholder='Password...' />
                            <input type="submit" value="Login" />
                        </form>
                    </div>

                ) : (

                    <div className={classes.chat_wrapper}>

                        <div className={classes.users}>
                            {users.map(el => (<div key={el.id}><b>{el.name}</b></div>))}
                        </div>
                    
                        <div className={classes.messages}>
                            {messages.map(el => (<div key={el.id}><b>{el.author}</b>: {el.message}</div>))}
                        </div>
            
                        <div className={classes.addMessage}>
                            <form onSubmit={handleSubmit}>
                                <label>
                                New message:
                                <textarea className={classes.textarea} value={message} onChange={handleChange} />
                                </label>
                                <input type="submit" value="Send" />
                            </form>
                        </div>

                    </div>

                ) }

        </div>
    )
}
