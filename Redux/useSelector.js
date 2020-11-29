// useSelector гачок дозволяє нашому компоненту витягувати будь-які фрагменти даних, які йому потрібні, із стану магазину Redux.

// 1.
export const selectCount = state => state.counter.value
const count = useSelector(selectCount)

// 2.
const countPlusTwo = useSelector(state => state.counter.value + 2)