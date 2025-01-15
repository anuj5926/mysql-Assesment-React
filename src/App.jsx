import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './component/Login'
import Dashboard from './component/Dashboard'
import AdminLogin from './component/AdminLogin'
import AdminRegistartion from './component/AdminRegistartion'
import CustomerRegistartion from './component/CustomerRegistartion'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route exact path="/AdminLogin" element={<AdminLogin />} />
          <Route exact path="/CustomerRegistration" element={<CustomerRegistartion />} />
          <Route exact path="/AdminRegistration" element={<AdminRegistartion />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
