// dispatch - можемо надсилати дії, коли користувач робить щось на зразок натискання на кнопку:
import { useDispatch } from 'react-redux'

const dispatch = useDispatch()

<button
  className={styles.button}
  aria-label="Increment value"
  onClick={() => dispatch(increment())}
>+</button>
