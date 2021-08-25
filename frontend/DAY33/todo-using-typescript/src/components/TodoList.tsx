import React from 'react'


interface TodoListProps {
    title: string;
    done: boolean;
    deleteHandler(title: string): void;
    
}

const TodoList = ({ title, done , deleteHandler }: TodoListProps) => {
    
    return (
        <div className="todoList">
            <div className="title">{title}</div>
            <button onClick={() => {
                deleteHandler(title)
            }}>Delete</button>
            
        </div>
    )
}

export default TodoList
