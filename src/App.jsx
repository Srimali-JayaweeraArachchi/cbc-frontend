import { useState } from 'react'
import './App.css'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminHomePage from './pages/adminHomePage'
import { Toaster } from 'react-hot-toast'
import ResponseTest from './pages/admin/responseTest'
import { GoogleOAuthProvider } from '@react-oauth/google'



function App() {
  const [count, setCount] = useState(0)



  return (
    <div className='bg-primary'>
     <BrowserRouter>
      <Toaster position='top-right'/>
      <GoogleOAuthProvider clientId='628048246616-sdcdojfkm91mho1k9reu0ubou2je7323.apps.googleusercontent.com'>
      <Routes path="/*">          
        <Route path="/*" element={<HomePage/>}/>   
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/admin/*" element={<AdminHomePage/>}/>
        <Route path="/response" element={<ResponseTest/>}/>             
      </Routes>
      </GoogleOAuthProvider>
     </BrowserRouter>
    </div>
  )
}

export default App
