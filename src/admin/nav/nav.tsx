import AuthLinks from "../components/authlinks";
import AdminLinks from "../components/links";
import AppLogo from "../components/logo"
const ADMIN_NAV = () => {
    return (
        <>
            <nav>
                <AppLogo />
                <AdminLinks />
                <AuthLinks />
            </nav>
        </>
    )
}

export default ADMIN_NAV;
