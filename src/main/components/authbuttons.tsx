import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';

export const AuthButtons = () => {
    return (
        <>
            <Link to='/login' className="projectLinks">
                <FontAwesomeIcon icon={faRightToBracket} />
                <span className="ms-2">Login</span> 
            </Link>
        </>
    );
};
