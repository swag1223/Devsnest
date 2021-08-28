const addNote = (input : string) => {
    return {
        type: "ADD_NOTE",
        payload: input
    }
}

const deleteNote = (id: number) => {
    return {
        type: "DELETE_NOTE",
        payload: id
    }
}

export { addNote, deleteNote };