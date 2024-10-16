import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome , faPlus, faEye, faTrademark} from "@fortawesome/free-solid-svg-icons";

const Navlinks = [
    {
        label : 'Home',
        href : '.',
        icon : <FontAwesomeIcon icon={faHome} />
    }, 

    {
        label : 'Create product',
        href : 'create',
        icon : <FontAwesomeIcon icon={faPlus} />
    }, 

    {
        label : 'View Products',
        href : 'products',
        icon : <FontAwesomeIcon icon={faEye} />
    }, 

    {
        label : 'View Trades',
        href : 'trades',
        icon : <FontAwesomeIcon icon={faTrademark} />
    }, 



]

export default Navlinks;