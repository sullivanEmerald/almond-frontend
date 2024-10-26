// import AppRoutes from '@/main/route/route'
import AdminRoutes from '@/admin/routes/routes';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        {/* <AppRoutes /> */}
        <AdminRoutes />
      </Router>
    </>
  )
}

export default App;
