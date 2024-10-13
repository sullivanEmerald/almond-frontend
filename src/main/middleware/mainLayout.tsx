import { Outlet } from "react-router-dom";
import { MainHeader } from "../components/header";
const MainLayout = () => {
    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    )
}

export default MainLayout;