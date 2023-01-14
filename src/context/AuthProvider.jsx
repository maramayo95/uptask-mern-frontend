import axios from 'axios'
import {useState,createContext, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [auth,setAuth] = useState({})
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(()=> {
        const authenticateUser = async () => {
            const token = localStorage.getItem('token')

            if(!token){
                setLoading(false)
                return
            }
            
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const {data} = await axios('/api/usuarios/perfil', config )
                setAuth(data)  
                navigate('/projects') 
            } catch (error) {
                setAuth({})
            } 
            
            setLoading(false)


        }
        authenticateUser()
    }, [])

    
    
    
    return (
        <AuthContext.Provider value={{
            auth,
            setAuth,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    )
}


export {
    AuthProvider
}

export default AuthContext