import { useState, useEffect } from 'react'
import Alert from '../components/Alert'
import {Link,useParams} from 'react-router-dom'
import axios from 'axios'


const ForgotPasswordToken = () => {
  const [pass, setPass] = useState('')
  const [alert, setAlert] = useState({})
  const [validToken, setValidToken] = useState(false)
  const [modifiedPassword,setModifiedPassword] = useState(false)
  const {token} = useParams()


  useEffect(() => {
    const controller = new AbortController();
    if(!validToken){
      const testToken = async () => {
        try {
          const {data} = await axios(`/api/usuarios/olvide-password/${token}`)
          setValidToken(true)
        } catch (error) {
          setAlert({
            msg: error.response.data.msg,
            error: true
          })
        }
      }
      testToken()
    }
    return () => controller.abort()
  },[])
  
  
  
  const handleSubmit = async e => {
    e.preventDefault()
    if (pass.includes(' ')) {
      setAlert({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }
    if (pass.length < 6) {
      setAlert({
        msg: 'La contraseña debe tener mas de 6 caracteres',
        error: true
      })
      return
    }

    try {
      const url = `/api/usuarios/olvide-password/${token}`  
      const {data} = await axios.post(url, {
        password: pass
      })
      setAlert({
        msg:data.msg,
        error:false
      })
      setModifiedPassword(true)
      setValidToken(false)
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  const {msg} = alert

  return (
    <div>
      <h1 className="text-center text-sky-600 font-black text-4xl md:text-6xl md:text-left ">
        Recupera tu acceso y no pierdas tus{" "}
        <span className="text-slate-700"> Proyectos</span>
      </h1>

      {msg && <Alert alert={alert} />}

      {validToken && (

      <form className="my-10 bg-white shadow-lg p-10" onSubmit={handleSubmit}>
        <div className="my-5">
          <label
            htmlFor="password"
            className="uppercase text-gray-600 block text-xl font-bold"
          >
            password
          </label>
          <input
            id="password"
            type="password"
            value={pass}
            placeholder="password de Registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50 mb-5"
            onChange={e => setPass(e.target.value)}
          />
        </div>

        <input
          type="submit"
          value="Enviar Instrucciones"
          className="bg-sky-700 py-3 w-full text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
        />
      </form>
      )}

      {modifiedPassword && (
      <nav className="lg:flex lg:justify-center bg-slate-500 hover:bg-slate-800 hover:cursor-pointer">
       

        <Link
          className="block text-center my-5 text-white uppercase text-sm "
          to="/"
        >
          Inicia Sesion
        </Link>
      </nav>
      )}

    </div>
  )
}

export default ForgotPasswordToken