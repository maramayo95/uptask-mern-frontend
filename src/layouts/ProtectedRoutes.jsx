import { Outlet, Navigate } from "react-router-dom"
import useAuth from '../hooks/useAuth'
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"

const ProtectedRoutes = () => {
  const { auth, loading } = useAuth()

  if (loading) return 'Loading...'
  return (
    <>
      {auth._id ?
        <div className="bg-gray-100">
          <Header />

          <div className="flex">
            <div className="hidden md:flex md:min-h-screen ">
              <Sidebar />
            </div>

            <main className="p-10 flex-1">
              <Outlet />
            </main>
          </div>

        </div>



        : <Navigate to="/" />}
    </>
  )
}

export default ProtectedRoutes