function todoReducer(state =[], action) {
    //console.log(action);
    if (action.type === "ADD_TODO") {
         return [
            ...state,
            action.payload,

        ]
            
    }
       
        
    else if (action.type === "DELETE_TODO") {
        return state.filter((todo, index) => index !== action.payload);
    }
        
    return state;

}

export default todoReducer;