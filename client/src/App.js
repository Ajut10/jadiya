import {Routes,Route} from 'react-router-dom'

import Hompage from './pages/Hompage';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import PageNotFound from './pages/PageNotFound';
import Register from './pages/Auth/Register';


import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Auth/Login';
import Dashboard from './pages/user/Dashboard';

import PrivateRoute from './components/Routes/Private';
import AdminRoute from './components/Routes/AdminRoute';

import AdminDashboard from './pages/Admin/AdminDashboard';
import CreateProduct from './pages/Admin/CreateProduct';
import CreateCategory from './pages/Admin/CreateCategory';
import Users from './pages/Admin/Users';

import Profile from './pages/user/Profile';
import Orders from './pages/user/Orders';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Hompage/>} />
        <Route path="/dashboard" element={<PrivateRoute/> }>
        <Route path='user' element={<Dashboard/>} /> 
        <Route path='user/profile' element={<Profile/>} /> 
        <Route path='user/orders' element={<Orders/>} /> 
        </Route>
        <Route path="/dashboard" element={<AdminRoute/> }>
        <Route path='admin' element={<AdminDashboard/>} /> 
        <Route path='admin/create-product' element={<CreateProduct/>} /> 
        <Route path='admin/create-category' element={<CreateCategory/>} /> 
        <Route path='admin/users' element={<Users/>} /> 
        </Route>
        
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} /> 
        <Route path='/policy' element={<Policy/>} /> 
        <Route path='/login' element={<Login/>} /> 
        <Route path='/register' element={<Register/>} /> 
        <Route path='*' element={<PageNotFound/>} /> 

      </Routes>
    </>
  );
}

export default App;
