// https://flaviocopes.com/redux-saga/


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
takeEvery()
takeLatest()
take()
call()
put()




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
