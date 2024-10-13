import { Link } from "react-router-dom"
import Links from "../links/link"

const AdminLinks = () => {
    return (
        <>
            <ul>
                {Links?.map(({ label, href }) => (
                    <li>
                        <Link to={href}>{label}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default AdminLinks;