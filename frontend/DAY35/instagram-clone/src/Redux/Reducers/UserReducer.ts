import { userType } from "../Actions";

const initialUser = {
    username: "",
    profilePhoto: ""

}

export interface actionType {
    type: "UPDATE_USER",
    payload: userType
}
const userReducer = (state: userType = initialUser, action: any) => {
    switch (action.type) {
        case "UPDATE_USER":
            return action.payload;
        default:
            return state
    }

}

export default userReducer;