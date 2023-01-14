import {useState,useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'
import Alert from '../components/Alert'


const ConfirmAccount = () => {
  const [alert, setAlert] = useState({})
  
  const [confirmAccountState, setConfirmAccountState] = useState(false)
  const {token} = useParams()
 
  useEffect( ()  => {
    const controller = new AbortController();
    const confirmAccountPromise = async () => {
      if(!confirmAccountState){
        try {
          const url = `/api/usuarios/confirmar/${token}`
          const {data} = await axios(url, {
            signal: controller.signal
          })
          setAlert({
            msg: data.msg,
            error:false
          })
          setConfirmAccountState(true)
        } catch (error) {
          setAlert({
            msg: error.response.data.msg,
            error: true
          })
        }
        setTimeout(()=>{
          setAlert({})
       
        } ,2000)
       
      }
    }
    confirmAccountPromise()
    return () => controller.abort()
  } ,[])

  const {msg} = alert


  return (
    <div className='mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white'>
        <h1 className="text-center text-sky-600 font-black text-4xl md:text-6xl md:text-left ">
        Confirma tu cuenta y comienza a crear tus {" "}
        <span className="text-slate-700"> Proyectos</span>
      </h1>

      <div>
        {msg && <Alert alert={alert}/>}

        {confirmAccountState && (
            <Link
            className="block text-center my-5 text-slate-500 uppercase text-sm hover:text-slate-900"
            to="/"
          >
            Inicia Sesion
          </Link>
        )}
      </div>
    </div>
  )
}

export default ConfirmAccount