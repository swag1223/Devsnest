import { useContext } from "react";
import { Redirect } from "react-router-dom";
import LoginContext from "./Context";
function Dashboard() {
    const {login , setLogin} = useContext(LoginContext)
    return (
        <div>
            <h1>Dashboard : Private Route</h1>
            {login === true ? <p>This is private route</p> : <Redirect to="/" />}
        </div>
    )
}

export default Dashboard;