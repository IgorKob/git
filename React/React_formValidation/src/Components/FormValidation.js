import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Error = styled.span`
  color: red;
`;

const FormValidation = (props) => {
    debugger
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [isBtnSubmit, setIsBtnSubmit] = useState(true);

    useEffect(() => {
        if (name.length > 0 && email.length > 0 && String(phone).length > 0) {
            setIsBtnSubmit(nameError || emailError || phoneError);
        }
    }, [nameError, emailError, phoneError]);

    const onSubmitForm = () => {
      alert('Send message')
    };

    const valid = (target) => {
        switch (target.name) {
            case 'name':
                return setNameError(!/[a-zA-Z]{5,}/gi.test(target.value));            
            case 'email':
                return setEmailError(!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$/gi.test(target.value));
            case 'phone':
                return setPhoneError(!/([0-9]|\s){2,}/gi.test(target.value));
            default:
                return;
          }
    };

    const handleChangle = ({target}) => {
        valid(target);
        switch (target.name) {
            case 'name':
                return setName(target.value);            
            case 'email':
                return setEmail(target.value);
            case 'phone':
                return setPhone(target.value);
            default:
                return;
        }
    };

    return (
        <form onSubmit={onSubmitForm}>

            <label htmlFor='name'>Name</label>
            <input type='text' name='name' onChange={handleChangle} value={name}/>
            {nameError && <Error>Must be 5 chars or more</Error>}<br></br>

            <label htmlFor='email'>Email</label>
            <input type='email' name='email' onChange={handleChangle} value={email}/>
            {emailError && <Error>Must be a valid email</Error>}<br></br>
            
            <label htmlFor='phone'>Phone</label>
            <input type='text' name='phone' onChange={handleChangle} value={phone} />
            {phoneError && <Error>Must be 2 chars or more, only numbers and spaces allowed</Error>}<br></br>

            <button type='submit' disabled={isBtnSubmit}>Submit</button>
        </form>
    )
}

export default FormValidation;
