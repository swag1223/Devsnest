
export interface userType {
    username: string,
    profilePhoto: string,
}


const updateUser = () => {
    return (dispatch:any) => {
        fetch("/data/user.json")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                dispatch({
                    type: "UPDATE_USER",
                    payload: data,
                })
            })
        
    }
}

export { updateUser };