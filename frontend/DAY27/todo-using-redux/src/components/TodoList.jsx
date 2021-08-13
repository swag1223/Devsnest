import {useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '../redux/actions/actionsindex';

function TodoList() {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todoReducer);

    return (
        <div>
            {todos.map((todo, index) => (
                <div key={index}>
                    <p>{todo.title}</p>
                    <button onClick={() => dispatch(deleteTodo(index))}>Delete</button>

                </div>
            ))}

        </div>
            
    )
}

export default TodoList;