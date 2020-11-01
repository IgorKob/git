// import React from 'react';
// import classes from './FindUser.module.css';
// import * as axios from 'axios';
// import {followBtn, unfollowBtn} from "../../Redux/findUser_reducer";
//
// const FindUser = (props) => {
//   // debugger
//
//   let addUsers = () => {
//     if (props.users.length === 0) {
//       axios.get('https://social-network.samuraijs.com/api/1.0/users')
//         .then((response) => {
//           props.setUsers(response.data.items);
//         });
//     }
//   }
//   // if (props.users.length === 0) {
//   //   props.setUsers([
//   //     {
//   //       id: 1,
//   //       fullName: 'Admin',
//   //       src: 'https://source.unsplash.com/random',
//   //       followBtn: true,
//   //       text: 'My follow is ...',
//   //       location: {country: 'Urkaine', city: 'Lviv'},
//   //     },
//   //     {
//   //       id: 2,
//   //       fullName: 'Admin',
//   //       src: 'https://source.unsplash.com/random',
//   //       followBtn: false,
//   //       text: 'My car ...',
//   //       location: {country: 'Urkaine', city: 'Kyiv'},
//   //     },
//   //     {
//   //       id: 3,
//   //       fullName: 'Admin',
//   //       src: 'https://source.unsplash.com/random',
//   //       followBtn: true,
//   //       text: 'My asd...',
//   //       location: {country: 'Urkaine', city: 'Lviv'},
//   //     },
//   //   ]);
//   // }
//
//   return (
//     <div>
//       <h3>Users</h3>
//       <button onClick={addUsers}>Add users</button>
//       {props.users.map(el=>(
//         <div key={el.id} className={classes.user_wrapper}>
//           <div className={classes.user_box_left}>
//             <img src={el.photos.small || 'https://source.unsplash.com/random'} alt="" className={classes.user_img}/>
//             {el.followBtn
//               // ? <button onClick={() => { props.unfollowBtn(el.id)}} className={classes.user_follow_btn}>UnFollow</button>
//               ? <button onClick={() => {
//                 axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
//                   withCredentials: true,
//                   headers: {
//                     "API-KEY": "B1775-34F43-RF43F43-F43F4F4-F34F4F"
//                   }
//                 }
//                 )
//                   .then((response) => {
//                     debugger
//                     // this.props.setTotalUsersCount(response.data.totalCount);
//                     if (response.data.resultCode === 0) {
//                       // let {userId, email, login} = response.data.data;
//                       props.unfollowBtn(el.id);
//                     }
//                  })
//               }} className={classes.user_follow_btn}>UnFollow</button>
//
//               // : <button onClick={() => { props.followBtn(el.id)}} className={classes.user_follow_btn}>Follow</button>
//               : <button onClick={() => {
//                 axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
//                   withCredentials: true,
//                   headers: {
//                     "API-KEY": "b42f819d-5616-4291-8f0c-3ab9e7dd1f79"
//                   }
//                 })
//                   .then((response) => {
//                     debugger
//                     // this.props.setTotalUsersCount(response.data.totalCount);
//                     if (response.data.resultCode === 0) {
//                       // let {userId, email, login} = response.data.data;
//                       props.followBtn(el.id);
//                     }
//                   });
//               }} className={classes.user_follow_btn}>Follow</button>
//             }
//
//           </div>
//           <div className={classes.user_box_right}>
//             <div className={classes.user_box_right_1}>
//               <h5 className={classes.user_fullname}>{el.name}</h5>
//               <div className={classes.user_text}>{el.status}</div>
//             </div>
//             <div className={classes.user_box_right_2}>
//               <h5 className={classes.user_country}>{'el.location.country'}</h5>
//               <div className={classes.user_city}>{'el.location.city'}</div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }
//
// // export default FindUser;