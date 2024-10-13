import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

export const Categories = () => {
    return (
        <>
            <div>
                <FontAwesomeIcon icon={faList} />
                <span className="ms-2">Categories</span>
            </div>
        </>
    )
}