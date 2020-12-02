// useSelector гачок дозволяє нашому компоненту витягувати будь-які фрагменти даних, які йому потрібні, із стану магазину Redux.
// Селектори - це функції, які отримують Redux state як аргумент і повертають деякі дані

// 1.
export const selectCount = state => state.counter.value
const count = useSelector(selectCount)

// 2.
const countPlusTwo = useSelector(state => state.counter.value + 2)


// 3.                    createSelector -  Запам'ятовувані селектори (Memoized selectors)
// мемоїзацією - Ми хочемо зберегти попередній набір входів та обчислений результат, 
// і якщо входи однакові, поверніть попередній результат, замість того, щоб перераховувати його знову.

// Мемоізація - це свого роду кешування - зокрема, збереження результатів дорогого розрахунку 
// та повторне використання цих результатів, якщо ми побачимо ті самі введені дані пізніше.
// Запам'ятовувані селекторні функції - це селектори, які зберігають найновіше значення результату, 
// і якщо ви викличете їх кілька разів з однаковими входами, повернуть одне і те ж значення результату.

// Запам'ятовувані селектори є цінним інструментом для підвищення продуктивності програми React + Redux, 
// оскільки вони можуть допомогти нам уникнути непотрібних рендерингів, а також уникнути потенційно складних або дорогих обчислень, якщо вхідні дані не змінилися.
import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'

export const selectAllPosts = state => state.posts.posts

export const selectPostById = (state, postId) =>
  state.posts.posts.find(post => post.id === postId)

export const selectPostsByUser = createSelector(
  [selectAllPosts, (state, userId) => userId],
  (posts, userId) => posts.filter(post => post.user === userId)
)





// 4.                      shallowEqual
// повернення нових посилань на масив у селекторах призводить до того, що компоненти повторно рендераться щоразу, 
// навіть якщо значення в стейті однакові

// React-Redux має функцію shallowEqual порівняння, 
// за допомогою якої ми можемо перевірити, чи елементи всередині масиву незмінні.
import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import TodoListItem from './TodoListItem'

const selectTodoIds = state => state.todos.map(todo => todo.id)

const TodoList = () => {
  // якщо список ідентифікаторів буде вважатися однаковим, і <TodoList>його не потрібно буде повторно відтворювати.
  const todoIds = useSelector(selectTodoIds, shallowEqual)

  const renderedListItems = todoIds.map(todoId => {
    return <TodoListItem key={todoId} id={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}