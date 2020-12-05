// https://reactgo.com/react-redirect-to-external-url/
// Для переспрямування на зовнішню URL-адресу в React ми можемо використовувати window.location.hrefвластивість.


// 1.   ./Contact.js
import React, { useEffect } from "react";

function Contact() {

  useEffect(() => {
    window.location.href = "https://google.com/contact";
  }, []);

  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}

export default Contact;


// 11.   Contact.js
import React from 'react';

class Contact extends React.Component {
 componentDidMount(){
     window.location.href = "https://google.com/contact";
  }

  render() {
    return (
      <div>
       <h2>Contact</h2>
      </div>
    )
  }
}

export default Contact;



// 2.  ми перенаправляємо користувача на домашню сторінку щоразу, коли користувач надсилає форму.
// ./contact.js
import React from 'react'

class Contact extends React.Component {
  onSubmit = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <form>
        <input placeholder="name" type="name" />
        <input placeholder="email" type="email" />
        <button onClick={this.onSubmit}>Submit</button>
      </form>
    )
  }
}

export default Contact