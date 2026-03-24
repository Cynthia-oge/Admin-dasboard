import { AuthContext } from '@/context/AuthContext'
import React, { useContext } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = () => {
    // const navigate = useNavigate()
    // Reading the state from the user login in the context
    const { isLoggedIn } = useContext(AuthContext)
    if(isLoggedIn){
        return <Outlet />
    }
    
    return <Navigate  to={'/'}/>
}

export default ProtectedRoute