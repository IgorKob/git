// 0.
// https://prodocs.cometchat.com/docs/js-quick-start
// https://github.com/cometchat-pro-tutorials/react-customer-support-live-widget

// https://www.freecodecamp.org/news/building-a-modern-chat-application-with-react-js-558896622194/
// https://github.com/WigoHunter/react-chatapp
// https://www.freecodecamp.org/news/how-to-build-a-chat-application-using-react-redux-redux-saga-and-web-sockets-47423e4bc21a/
// https://www.freecodecamp.org/news/build-a-desktop-chat-app-with-react-electron-and-chatkit-744d168e6f2f/
// https://www.freecodecamp.org/news/how-to-build-a-react-js-chat-app-in-10-minutes-c9233794642b/
// https://www.freecodecamp.org/news/want-to-learn-react-js-heres-my-free-course-which-teaches-it-through-building-a-chat-app-c86333e5b88c/
// https://www.freecodecamp.org/news/how-to-build-a-real-time-chatroom-with-firebase-and-react-hooks-eb892fa72f1e/



// chatbot
// https://www.freecodecamp.org/news/how-to-build-a-chatbot-with-react/






// 1.
import React from 'react'

// chat
// import 'bootstrap/dist/css/bootstrap.css';
import { CometChat } from '@cometchat-pro/chat';
// import config from './config';


// kim chat: Ініціалізуйте CometChat
let apiKey = "66ab65450e765d1454139037029876f5be0c0761";
var appID = "272404d680a44ef";
var region = "eu";
var appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
CometChat.init(appID, appSetting).then(
  () => {
    console.log("Initialization completed successfully");
    // You can now call login function.
  },
  error => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);



// // Створити користувача
let apiKey1 = "user1_16080356002e8e6cf5f7bdbe3a71986bcc4f34c1";
var uid1 = "user1";
var name1 = "Admin";
// var user1 = new CometChat.User(uid1);
// user1.setName(name1);
// CometChat.createUser(user1, apiKey).then(
//     user1 => {
//         console.log("user created", user1);
//     },error => {
//         console.log("error", error);
//     }
// )

// // Створити користувача 2
let apiKey2 = "user2_160804190337b1d0c006a8dbedcd9873f11ceb7a";
var uid2 = "user2";
var name2 = "Admin2";
// var user2 = new CometChat.User(uid2);
// user2.setName(name2);
// CometChat.createUser(user2, apiKey).then(
//     user2 => {
//         console.log("user created", user2);
//     },error => {
//         console.log("error", error);
//     }
// )


// зареєструвати в CometChat
// CometChat.login(uid1, apiKey).then(
//   user1 => {
//     console.log("Login1 Successful:", { user1 });    
//   },
//   error => {
//     console.log("Login1 failed with exception:", { error });    
//   }
// );
 
// // зареєструвати в CometChat 2
CometChat.login(uid2, apiKey).then(
  user2 => {
    console.log("Login2 Successful:", { user2 });    
  },
  error => {
    console.log("Login2 failed with exception:", { error });    
  }
);




///////////////////////////////////////////////////

// // Відправити повідомлення
// // var receiverID = "SUPERHERO2";
// var messageText = "Hello";
// var receiverType = CometChat.RECEIVER_TYPE.USER;

// var textMessage = new CometChat.TextMessage(uid1, messageText, receiverType);

// CometChat.sendMessage(textMessage).then(
//   message => {
//     console.log("Message1 sent successfully:", message);
//     // Do something with message
//   },
//   error => {
//     console.log("Message1 sending failed with error:", error);
//     // Handle any error
//   }
// );
// kim
const myff = () => {
  setTimeout(()=>{
// var receiverID = "SUPERHERO2";
var messageText = "Hello user2";
var receiverType = CometChat.RECEIVER_TYPE.USER;

var textMessage = new CometChat.TextMessage(uid2, messageText, receiverType);

CometChat.sendMessage(textMessage).then(
  message => {
    console.log("Message1 sent successfully:", message);
    // Do something with message
  },
  error => {
    console.log("Message1 sending failed with error:", error);
    // Handle any error
  }
);
  }, 2000);
}

// myff();




// Отримувати повідомлення
// var listenerID = "UNIQUE_LISTENER_ID";
// CometChat.addMessageListener(
//   uid2, 
//   new CometChat.MessageListener({
//     onTextMessageReceived: message => {
//       console.log("Message11 received successfully:", message);
//       // Handle text message
//     }
//   })
//  );
const myff2 = () => {
    setTimeout(()=>{
          CometChat.addMessageListener(
            uid2, 
            new CometChat.MessageListener({
              onTextMessageReceived: message => {
                console.log("Message11 received successfully:", message);
                // Handle text message
              }
            })
           );
    }, 1000);
}
myff2()


const ChatContainer = (props) => {
    return (
        <div>
            chat
        </div>
    )
}

export default ChatContainer;
