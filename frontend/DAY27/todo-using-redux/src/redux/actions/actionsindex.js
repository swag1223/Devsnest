// const getTodo = (input) => {
//     return {
//         type: "GET_TODO",
//         payload: input,
//     }

// };

const addTodo = (input) => {
    return {
        type: "ADD_TODO",
        payload: input,
    };
};

const deleteTodo = (index) => {
    return {
        type: "DELETE_TODO",
        payload: index,
    };
};

export { addTodo, deleteTodo };