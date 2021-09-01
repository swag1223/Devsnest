
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome} from '@fortawesome/free-solid-svg-icons'
import { faComment, faCompass, faHeart } from "@fortawesome/free-regular-svg-icons"
import { useSelector } from "react-redux";

const Navbar = () => {
    const user = useSelector((state :any)=> state.user )
    return (
        <div>
            <div className="navbar_container">
                <img className="navbar_instalogo" src="/images/logoinsta.png" alt="instragram-logo" />
                <div className="navbar_search"><input type="text"
                    placeholder="Search"/>
                </div>
                
                <div className="navbar_menuicons">
                    <FontAwesomeIcon icon={faHome} size="lg" className="navbar-icon"/>
                    <FontAwesomeIcon icon={faComment} size="lg" className="navbar-icon"/>
                    <FontAwesomeIcon icon={faCompass} size="lg" className="navbar-icon"/>
                    <FontAwesomeIcon icon={faHeart} size="lg" className="navbar-icon"/>
                    <img src={user.profilePhoto} alt="profilephoto"/>
                   
                
                </div>
            </div>


        </div>

    )
    
}

export default Navbar;