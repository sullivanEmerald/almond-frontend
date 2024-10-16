import { Routes, Route } from "react-router-dom";
import ADMIN_PAGES from "@/admin/adminpages/allpages";
import Adminlayout from "@/admin/middleware/adminlayout";
import '@/admin/styles/main.css'
import MainLayout from "../middleware/mainlayout";
import { routes, admin, items} from "../apis/panel";

const { HOME, CREATE, LOGIN, REGISTER } = ADMIN_PAGES;

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="admin">
                {/* Login route without AdminLayout */}
                <Route element={<MainLayout />}>
                    <Route index element={<LOGIN />} />
                    <Route path={routes.register} element={<REGISTER />} />
                </Route>

                {/* Other admin routes with AdminLayout */}
                <Route element={<Adminlayout />}>
                    <Route path={admin.dashboard} element={<HOME />} />
                    <Route path={items.create} element={<CREATE />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default AdminRoutes;