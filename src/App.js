import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import SignIn from './Pages/SignIn';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Test from './Pages/Test';
import Search from './Pages/Search';
import Recruiters from './Pages/Recruiters';
import Contact from './Pages/Contact';
import Statistics from './Pages/Statistics';
import Noti from './Pages/Noti';
function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/signin" element={<SignIn setLoggedIn={setLoggedIn} setEmail={setEmail} />} /> 
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/companies" element={<Recruiters/>}/>
          <Route path="/statistics" element={<Statistics/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/notifications" element={<Noti/>}/>
          <Route path="/test" element={<Test/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;