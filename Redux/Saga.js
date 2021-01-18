// https://flaviocopes.com/redux-saga/
// https://scastiel.dev/posts/2019-08-03-lost-redux-saga-reimplement-them/
// yarn add redux-saga

// function*
// Генератори - це особливий тип функцій, що має можливість призупиняти себе і відновлюватись згодом, 
// дозволяючи тим часом запускати інший код.


// 1.
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)


// 2.
import handleNewMessage from './sagas'
//...
sagaMiddleware.run(handleNewMessage)


// 3.
import { takeEvery } from 'redux-saga/effects'
// Коли проміжне програмне забезпечення виконує handleNewMessageсагу, воно зупиняється на yield takeEvery інструкції 
// і чекає ( звичайно, асинхронно ), поки ADD_MESSAGEдія не буде надіслана . 
// Потім він запускає зворотний виклик, і сага може відновитись .
const handleNewMessage = function* handleNewMessage(params) {
  const socket = new WebSocket('ws://localhost:8989')
  yield takeEvery('ADD_MESSAGE', (action) => {
    socket.send(JSON.stringify(action))
  })
}

export default handleNewMessage




// 
// Усередині сага-коду ви генеруєте ефекти, використовуючи кілька спеціальних допоміжних функцій, наданих redux-sagaпакетом:
takeEvery() - дозволяє одночасно запускати кілька екземплярів завдання, навіть коли попередні завдань ще не завершені.
takeLatest() - Якщо попереднє завдання все ще виконується під час запуску іншого завдання, попереднє завдання буде автоматично скасовано.
take() - зупинить роботу Генератора, доки не буде надіслано відповідне дію:  const action = yield take('ACTION_NAME'); 
call() - створюється звичайний обєкт, що описує виклик функції  call(fn, ...args), 
// const products = yield Api.fetch('/products')
// const products = yield call(Api.fetch, '/products')
put() - створює ефект диспетчеризації: yield put({ type: 'PRODUCTS_RECEIVED', products })

Redux-Saga пропонує кілька базових ефектів, які ми реалізуємо самі:
select: прочитати стан за допомогою селектора
call: виклик функції (потенційно асинхронної)
put: відправити дію
take: чекати дії із певним типом дії
fork: створити нову сагу з новим контекстом виконання
export const take = (actionType) => ({ type: 'take', actionType })
export const select = (selector) => ({ type: 'select', selector })
export const call = (fn, ...args) => ({ type: 'call', fn, args })
export const put = (action) => ({ type: 'put', action })
export const fork = (saga, ...args) => ({ type: 'fork', saga, args })


// takeEvery() це буде викликати postMessageToServer функцію, нескінченно
import { takeEvery } from 'redux-saga/effects'

function* watchMessages() {
  yield takeEvery('ADD_MESSAGE', postMessageToServer)
}


// takeLatest() який дуже схожий на, takeEvery()але дозволяє виконувати лише один обробник функцій за раз, 
// уникаючи паралельності. Якщо інша дія буде запущена, коли обробник все ще працює, він скасує її та 
// запустить знову з останніми доступними даними.


// take()відрізняється тим, що він чекає лише один раз. Коли відбувається дія, яку вона очікує, обіцянка вирішується, 
// і ітератор відновлюється, тому він може перейти до наступного набору інструкцій.




// put()  Відправляє акцію до магазину Redux. Замість того, щоб переходити до магазину Redux або 
// диспетчерської дії до саги, ви можете просто використовувати put():
yield put({ type: 'INCREMENT' })
yield put({ type: "USER_FETCH_SUCCEEDED", data: data })



// call()  Коли ви хочете викликати якусь функцію в сазі
// call() дозволяє обернути цей виклик функції та повертає об’єкт, який можна легко перевірити:
call(delay, 1000)
// повертається
{ CALL: {fn: delay, args: [1000]}}




// Паралельний запуск ефектів можливий за допомогою all()і race(), які сильно відрізняються від того, що вони роблять.

//                               all()
// Якщо ви пишете
import { call } from 'redux-saga/effects'

const todos = yield call(fetch, '/api/todos')
const user = yield call(fetch, '/api/user')
// другий fetch()виклик не буде виконаний, доки перший не вдасться.
// Щоб виконати їх паралельно, оберніть їх у all():
import { all, call } from 'redux-saga/effects'

const [todos, user]  = yield all([
  call(fetch, '/api/todos'),
  call(fetch, '/api/user')
])
// all()не буде вирішено, поки обидва не call()повернуться.



//                               race()
// race()відрізняється від того all(), що не чекає повернення всіх викликів помічників. 
// Це просто чекає, коли хтось повернеться, і все готово.
import { race, call, take } from 'redux-saga/effects'

function* someBackgroundTask() {
  while(1) {
    //...
  }
}

yield race([
  bgTask: call(someBackgroundTask),
  cancel: take('CANCEL_TASK')
])
// коли CANCEL_TASKвипущено дію, ми зупиняємо інше завдання, яке в іншому випадку виконувалось би вічно.



// 1.
function* fetchProducts() {
  try {
    const products = yield call(Api.fetch, '/products')
    yield put({ type: 'PRODUCTS_RECEIVED', products })
  }
  catch(error) {
    yield put({ type: 'PRODUCTS_REQUEST_FAILED', error })
  }
}


// 2.
function* loginFlow() {
  while (true) {
    yield take('LOGIN')
    // ... perform the login logic
    yield take('LOGOUT')
    // ... perform the logout logic
  }
}


// 3.
function* genFunc() {
  console.log('First');
  yield; // (A)
  console.log('Second'); // (B)
}
// 33.1
> let genObj = genFunc(); 
> genObj.next()
First
{ value: undefined, done: false }
// genFunc тепер призупинено в рядку (A). Якщо ми next()знову зателефонуємо , 
// виконання поновлюється, і рядок (B) виконується:
// 33.2
> genObj.next()
Second
{ value: undefined, done: true }
// функція закінчена, виконання залишило тіло і подальші виклики genObj.next() не мають ефекту.


// 4. Thunk in saga
function loadTodos() {
  return dispatch => {
    dispatch({ type: 'FETCHING_TODOS' });
    fetch('/todos').then(todos => {
      dispatch({ type: 'FETCHED_TODOS', payload: todos });
    }); 
  }
}
// or 
import { call, put } from 'redux-saga';
function* loadTodos() {
  yield put({ type: 'FETCHING_TODOS' });
  const todos = yield call(fetch, '/todos');
  yield put({ type: 'FETCHED_TODOS', payload: todos });
}
// У попередньому прикладі сага loadTodos запускалася під час запуску, але що, 
// якщо ми хотіли б запускати цю сагу кожного разу, коли в магазин надсилається спеціальна дія. 
// У цьому випадку наш код буде виглядати так:
function* watchTodos() {
  while (yield take('FETCH_TODOS')) {
    yield fork(loadTodos);
  }
}
// Нам потрібно оновити кореневу saga const createStoreWithSaga = applyMiddleware(
  sagaMiddleware([watchTodos])
)(createStore);



// 5.
function * hello () { 
  yield take ('BEGIN_REQUEST') 
  yield put ({type: 'SHOW_WAITING_MODAL'}) 
  const response = yield call (myApiFunctionThatWrapsFetch) 
  yield put ({type: 'PRELOAD_IMAGES', response.images}) 
  yield put ( {type: 'USAGE_TRACK', Activity: 'API_CALL'}) 
  yield yield ({type: 'HIDE_WAITING_MODAL'}) 
}}
// Зачекайте, поки через Redux відбуватиметься дія BEGIN_REQUEST .
// Відправлення в SHOW_WAITING_MODAL дію через Redux.
// Зателефонуйте API і отримайте відповідь.
// Відправте дію через Redux, щоб хтось почав завантажувати деякі зображення.
// Бачите візерунок тут?
// Так, я впевнений, що ти.





// 6.
function *emailSaga() {
  ...
  const action = yield take([ // (A)
      `DISCARD_DRAFT`,
      `SEND_EMAIL`
  ]);
  if (action.type === `DISCARD_DRAFT`) { // (B)
      //discard the draft
  } else {
      //send the email
  }
}
// (А) takeЕфект чекає будь-якої з двох дій, і сага призупиняється, поки не буде отримана одна з них.
// (Б) Сага перевіряє typeотриману дію і потім продовжує відповідно.

// or
function *emailSaga() {
  const { discard, send } = yield race({ // (A)
      discard: take(`DISCARD_DRAFT`),
      send: take(`SEND_EMAIL`)
  })
  if (discard) {
      //discard the draft
  } else {
      //send the email
  }
}
// (A) Ми створюємо гонку між 2 takeефектами, тобто гонка закінчується, коли закінчується будь-який з 2 takeефектів.
// Важливою семантичною відмінністю між take([...])і raceє те
// take([...])чекає, поки надійде перша відповідна дія .
// race чекає закінчення першого гоночного ефекту .



// 7.
// Наприклад, вважаємо, що ми пишемо сагу про додавання пісень до списку відтворення. 
// Сага повинна дозволити користувачеві додати скільки завгодно пісень. 
// Однак воно повинно зупинити це завдання, коли отримано конкретну дію (наприклад SAVE_PLAYLIST).
// Цю ситуацію можна змоделювати, як показано нижче
function *addToPlaylist() {
  while (true) { //(A)
      const action = yield take([
          `ADD_SONG`,
          `SAVE_PLAYLIST`
      ]);
      if (action.type === `ADD_SONG`) {
          //add the song to the playlist
      } else {
          break; //(B)
      }
   }
}
// (A) while Цикл підтримує виконання завдання.
// (B) Як тільки SAVE_PLAYLIST отримано, ми вириваємося з циклу, зупиняючи завдання.
// ПРИМІТКА:
// Цю ситуацію також можна змоделювати за допомогою takeEvery ефекту, як показано нижче
function *addToPlaylist() {
  const addTask = yield takeEvery(`ADD_SONG`, function*() { // (A)
      //add the song to the playlist
  });
  yield take(`SAVE_PLAYLIST`); // (B)
  yield cancel(addTask); // (C)
}
// (А) Ми починаємо постійно виконуване завдання addTask(з використанням takeEvery), яке отримує кожну ADD_SONGдію та додає його до списку відтворення.
// (Б) Сага триває і тепер чекає SAVE_PLAYLISTдії.
// (C) Після того, як SAVE_PLAYLISTбуде отримано сага скасовуєaddTask то він припиняє прослуховування ADD_SONGдій.





// 8.
function *bookFlight() { // (A)
  let breakLoop = false;
  let step = 0; // (B)
  const backTask = yield takeEvery(`BACK`, function*() { // (C)
      if (step > 0) {
           step--;
      }
  })
  while (true) { // (D)
      switch (step) { // (E)
          case 0: {
              yield call(selectFlight); // (F)
              step++; // (G)
              break;
          }
          case 1: {
              yield call(fillDetails);
              step++;
              break;
          }
          case 2: {
              yield call(paymentSaga);
              step++;
              break;
          }
          case 3: {
              breakLoop = true; // (H)
              yield cancel(backTask); // (I)
              break;
          }
      }
      if (breakLoop) { // (J)
          break;
      }
  }
}
// (A) батько-епопея називається bookFlight.
// (B) Встановіть stepна 0тобто почати з першим дитиною-сагою selectFlight.
// (C) Почніть завдання, щоб прослухати кожну BACKдію та зменшити його stepна час 1.
// (D) Запустіть нескінченний whileцикл, щоб батьківська сага працювала безперервно.
// (E) Оператор switchоцінює струм stepі виконує правильну дочірню сагу.
// (F) Виконати selectFlight дитячу сагу для step 0.
// (G) Збільште значення stepby, 1щоб перейти до наступного кроку.
// (H) Якщо значення stepє, 3тобто всі кроки виконані, батьківська сага повинна закінчити.
// (I) Скасувати завдання прослуховувати BACKдії.
// (J) Оцінює, чи слід закінчувати чи продовжувати батьківську сагу .




// 9.
function* userSaga() {
  const selectUserId = (state) => state.userId
  const userId = yield select(selectUserId)
  const user = yield call(getUser, userId)
  yield put({ type: 'getUserSuccess', payload: user })
}

function* mySaga() {
  yield* takeEvery('getUser', userSaga)
}


// 10.
function* usersSaga() {
  while (true) {
    yield take('getUser')
    // do something for user
  }
}

function* documentsSaga() {
  while (true) {
    yield take('getDocuments')
    // do something with documents
  }
}

function* mySaga() {
  yield fork(usersSaga)
  yield fork(documentsSaga)
}