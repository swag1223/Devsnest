const initialState = {
    username: "",
    email: ""
};

function getInputsReducer(state = initialState, action) {
    //console.log(action);
    if (action.type === "GET_USERNAME")
        return {
            ...state,
            username: action.payload
        };
    if (action.type === "GET_EMAIL")
        return {
            ...state,
            email: action.payload
        };
    return state;
}

export default getInputsReducer;


//no need to combine reducers as in this case we only have one reducer so we can directly use it in store