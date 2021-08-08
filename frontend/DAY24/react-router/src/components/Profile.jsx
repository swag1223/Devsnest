import { useContext } from "react";
import { Redirect } from "react-router-dom";
import LoginContext from "./Context";

function Profile() {
    const {login , setLogin} = useContext(LoginContext)
    return (
        <div>
            <h1>Profile</h1>
            {login === true ? <p>This is private route</p> : <Redirect to="/"/>}
        </div>
        
    )
}

export default Profile;
