import { Outlet } from "react-router-dom";
import ADMIN_NAV from "../nav/nav";
const Adminlayout = () => {
    return (
        <> 
            <ADMIN_NAV />
            <Outlet />
        </>
    )
}

export default Adminlayout;