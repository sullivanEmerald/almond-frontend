import { Link } from "react-router-dom"

const AppLogo = () => {
    return (
        <>
            <Link to={'/admin'} className='projectLinks'>
                Almond
            </Link>
        </>
    )
}

export default AppLogo;