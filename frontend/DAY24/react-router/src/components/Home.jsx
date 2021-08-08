import { useContext } from "react";
import LoginContext from "./Context";

function Home() {
    const {login , setLogin} = useContext(LoginContext)    
    return (
        <>
            <h1>Home</h1>
            <p>If not LoggedIn , can't access Profile and Dashboard</p>
            <button onClick={() => {
                login === false ? setLogin(true) : setLogin(false)
            }}>{ login === false ? "Login" : "Logout"}</button>
        </>
    )
}

export default Home;