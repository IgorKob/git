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