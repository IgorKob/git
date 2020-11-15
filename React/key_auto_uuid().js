// щоб створити для нас унікальний Id.
npm install uuid
import uuid from 'uuid/v4';
const initialTodos = [
    {
        id: uuid(),
        task: 'Learn React',
        complete: true,
    },
    {
        id: uuid(),
        task: 'Learn Firebase',
        complete: true,
    },
    {
        id: uuid(),
        task: 'Learn GraphQL',
        complete: false,
    },
];
////
{todos.map(todo => (
    <li key={uuid()}>{todo.task}</li>
))}