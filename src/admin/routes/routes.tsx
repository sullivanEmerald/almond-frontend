import { Routes, Route } from "react-router-dom";
import ADMIN_PAGES from "../adminpages/allpages";
import Adminlayout from "../middleware/adminlayout";
import '@/admin/styles/main.css'

const { HOME, CREATE, LOGIN } = ADMIN_PAGES;

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="admin">
                {/* Login route without AdminLayout */}
                <Route index element={<LOGIN />} />
                
                {/* Other admin routes with AdminLayout */}
                <Route element={<Adminlayout />}>
                    <Route path="dashboard" element={<HOME />} />
                    <Route path="create" element={<CREATE />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default AdminRoutes;