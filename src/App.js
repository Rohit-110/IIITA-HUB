import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import SignIn from './Pages/SignIn';
import Signup from './Pages/SignUp';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Test from './Pages/Test';
function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/signin" element={<SignIn setLoggedIn={setLoggedIn} setEmail={setEmail} />} /> 
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/test" element={<Test/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;