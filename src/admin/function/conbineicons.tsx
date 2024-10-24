import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import iconDefinition from "../types/icon"

export const conbineIcons : React.FC<iconDefinition> =  (iconFirst, iconSecond) => {
    return (
        <>
            <span>
                <FontAwesomeIcon icon={iconFirst} />
                <FontAwesomeIcon icon={iconSecond} />
            </span>
        </>
    )
}