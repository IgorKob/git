1.)
  const sleep = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms)
  })
}

sleep(2000).then(() => console.log('2s'))
sleep(5000).then(() => console.log('5s'))

2.)
  Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('Коли виконаються всі проміси тоді буде виведений цей текст')
  })

3.)
  Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('Проміси будуть виконуватися попорядку')
  })


// // async/await
// //login
// export const Loginkim = (email, password, rememberMe) => (dispatch) => {
//
//   authAPI.login(email, password, rememberMe)
//     .then((response) => {
//       if (response.data.resultCode === 0) {
//         // let {userId, email, login} = data.data;
//         dispatch(getAuthUserData());
//       } else {
//         let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
//         dispatch(stopSubmit('login',{_error: message}));
//       }
//     });
// }
export const Loginkim = (email, password, rememberMe) => async (dispatch) => {
 let response = await authAPI.login(email, password, rememberMe);
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login',{_error: message}));
      }
}
