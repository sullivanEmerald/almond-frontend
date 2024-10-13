import { Routes, Route } from "react-router-dom";
import mainRoutes from "../pageobeject.js/components";
import MainLayout from "../middleware/mainLayout";
import '@/global/style/global.css'
const { HOME } = mainRoutes;


const AppRoutes: React.FC = (): JSX.Element => {
    return (
        <>
                <Routes>
                    <Route path='/' element={<MainLayout />} >
                        <Route index element={<HOME />} />
                        <Route path="about" element={<p>Sullivan the greatest software Engineer</p>} />
                    </Route>
                </Routes>
        </>
    )
}

export default AppRoutes;