import { Route, Routes } from 'react-router-dom'
import './App.css'
import Signin from './pages/Signin/Signin'
import Signup from './pages/Signup/Signup'
import DashboardLayout from './Layouts/DashboardLayout'
import Dashboard from './pages/Dashboard/Dashboard' 
import ProtectedRoute from './pages/Auth/ProtectedRoute'
import { Toaster } from "@/components/ui/sonner"

function App() {
  

  return(
    <>
    <Routes>
      <Route path="/" element={<Signup />}/>
      <Route path="/signin" element={<Signin />}/>
      <Route path='/admin' element={
      <ProtectedRoute>
          <DashboardLayout />
      </ProtectedRoute>}>
        {/* <Route element={<ProtectedRoute />} /> */}
          <Route index element={<Dashboard />} />
        {/* /</Route> */}
      </Route>
    </Routes>
    <Toaster position='top-center' />
    </>
  )
}

export default App
