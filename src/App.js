import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from './Pages/SignIn';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Search from './Pages/Search';
import Recruiters from './Pages/Recruiters';
import Contact from './Pages/Contact';
import Statistics from './Pages/Statistics';
import Noti from './Pages/Noti';
import AlumHome from './Pages/alumHome';
import AlumContact from './Pages/alumContact';
import AlumProfile from './Pages/alumProfile';
import ExploreProfile from './Pages/exploreProfile';
import StuOrAdmin from './Pages/StudentorAdmin';
import AdminSignIn from './Pages/adminSignIn';
import AdminContact from './Pages/adminContact';
import AdminProfile from './Pages/adminProfile';
import AdminNoti from './Pages/adminNoti';
import AdminHome from './Pages/adminHome';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StuOrAdmin/>} /> 
          <Route path="/signin" element={<SignIn/>} /> 
          <Route path="/home" element={<Home/>} />
          <Route path="/admin/signin" element={<AdminSignIn/>} /> 
          <Route path="/admin/contact" element={<AdminContact/>} /> 
          <Route path="/admin/profile" element={<AdminProfile/>} /> 
          <Route path="/admin/notifications" element={<AdminNoti/>} /> 
          <Route path="/admin/home" element={<AdminHome/>} /> 
          <Route path="/alumHome" element={<AlumHome />}/>
          <Route path="/alumContact" element={<AlumContact/>}/>
          <Route path="/alumProfile" element={<AlumProfile/>}/>
          <Route path="/exploreProfile" element={<ExploreProfile/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/companies" element={<Recruiters/>}/>
          <Route path="/statistics" element={<Statistics/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/notifications" element={<Noti/>}/>
        </Routes>
        <Toaster/>
      </BrowserRouter>
    </div>
  )
}
export default App;