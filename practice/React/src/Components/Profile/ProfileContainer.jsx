import React from 'react';
import classes from './profile.module.css';
import Post from "../Post/Post";
import {addPostActionCreator, newPostTextActionCreator} from "../../Redux/postPages_reduce";
import Profile from "./Profile";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";




// // {id : 0, name: 'Admin', text : 'my post', like : 1},
// const ProfileContainer = (props) => {
//   debugger
//
//   // let newPostElement = React.createRef();
// //   let addPost = () => {
// //     // debugger
// //
// //     // let text = newPostElement.current.value;
// //     // props.addPost(text);
// //     // props.addPost();
// //     // props.dispatch({type: 'ADD-POST'});
// //
// //     // props.store.dispatch(addPostActionCreator());
// //     props.dispatch(addPostActionCreator());
// //     // newPostElement.current.value = '';
// //     // props.addPost();
// //
// //   }
// //
// //   let newPostText = (text) => {
// //     // let text = newPostElement.current.value;
// //     // props.newPostText(text);
// // // debugger
// // //     let action = {type: 'NEW-POST-TEXT', text: text};
// // //     props.dispatch(action);
// //     let action = newPostTextActionCreator(text);
// //     props.dispatch(action);
// //     // let text = newPostElement.current.value;
// //     // props.newPostText(text);
// //
// //   }
//   // debugger
//   return (
//
//     // <Profile newPostText={newPostText}
//     //          addPost={addPost}
//     //          posts={props.store.postPages.posts}
//     //          newPost={props.store.postPages.newPost}
//     // />
//
//     <StoreContext.Consumer>
//       {(store) => {
//
//         let addPost = () => {
//           store.dispatch(addPostActionCreator());
//         }
//
//         let newPostText = (text) => {
//           let action = newPostTextActionCreator(text);
//           store.dispatch(action);
//         }
//
//         return (
//           <Profile newPostText={newPostText}
//                    addPost={addPost}
//                    posts={store.getState().postPages.posts}
//                    newPost={store.getState().postPages.newPost}
//           />
//         )}
//       }
//     </StoreContext.Consumer>
//   );
// }

let mapStateToProps = (state) => {
  // debugger
  return {
    postPages: state.postPages.posts,
    newPost: state.postPages.newPost
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    newPostText: (text) => {
      let action = newPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },

  }
}
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

// export default ProfileContainer;
export default ProfileContainer;