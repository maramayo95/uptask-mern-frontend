import { Outlet, Navigate } from "react-router-dom"
import useAuth from '../hooks/useAuth'

const ProtectedRoutes = () => {
  const {auth, loading} = useAuth() 

  if(loading) return 'Loading...'
  return (
    <>
      {auth._id? 'Autenticado' : <Navigate to="/"/>} 
    </>
  )
}

export default ProtectedRoutes