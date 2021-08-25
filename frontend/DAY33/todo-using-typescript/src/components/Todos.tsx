import React from 'react'
import { useState } from 'react';
import TodoList from './TodoList';

interface TodoType {
  title: string;
    done: boolean;
}

const Todos = () => {
    const [todos, setTodos] = useState<TodoType[]>([]);
    const [input, setInput] = useState<string>("");

    const deleteHandler = (title: string): void => {
        setTodos(todos.filter((todo, idx) => {
            return todo.title !== title;
        }))
    }
    return (
        <div className="todos">
            <input type="text" value={input} placeholder="Add a ToDo"
                onChange={(e) => {
                setInput(e.target.value);

                }}
            />

            <button onClick={() => {
                setTodos([...todos, { title: input, done: false}]);
                setInput("");
            }}>Add</button>
            {todos.map((todo, index) => (
                <TodoList title={todo.title} done={todo.done} key={index} deleteHandler={deleteHandler}/>

      ))}
            
        </div>
    )
}

export default Todos
