import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PolicyPages from './pages/PolicyPages'
import PageNotFound from './pages/PageNotFound'
import Register from './pages/Auth/Register'
import LoginPage from './pages/Auth/LoginPage'

import PrivateRoute from './components/routes/PrivateRoute'
import Dashboard from './pages/user/Dashboard'
import ForgotPassword from './pages/Auth/ForgotPassword'
import AdminRoute from './components/routes/AdminRoute'
import AdminDashboard from './pages/Admin/AdminDashboard'
import CreateCategory from './pages/Admin/CreateCategory'
import CreateProduct from './pages/Admin/CreateProduct'
import Orders from './pages/user/Orders'
import Profile from './pages/user/Profile'
// import { ToastContainer,} from 'react-toastify';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/dashboard' element={<PrivateRoute/>}>
        <Route path='user' element={<Dashboard/>}/>
        <Route path='user/orders' element={<Orders/>}/>
        <Route path='user/profile' element={<Profile/>}/>
      </Route>
      <Route path='/dashboard' element={<AdminRoute/>}>
        <Route path='admin' element={<AdminDashboard/>}/>
        <Route path='admin/create-category' element={<CreateCategory/>}/>
        <Route path='admin/create-product' element={<CreateProduct/>}/>
        <Route path='admin/users' element={<AdminDashboard/>}/>

      </Route>
      <Route path='/forgot-password' element={<ForgotPassword/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<LoginPage/>} />      
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/contact' element={<ContactPage/>} />
      <Route path='/policy' element={<PolicyPages/>} />
      <Route path='/*' element={<PageNotFound/>} />
    </Routes>
    </>
  )
}

export default App
