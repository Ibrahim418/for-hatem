import React, {useState,useEffect} from 'react'
import { loginUser} from '../actions/authaction'
import { useDispatch,useSelector} from 'react-redux'


const Login = ({history}) => {
    const [info , setInfo] = useState({
        email :"",
        password: "",
    })
    const dispatch = useDispatch()

    const handleChange =(e)=>{
        setInfo({...info , [e.target.name]: e.target.value})
    }
    const login = (e) =>{
        e.preventDefault()
        dispatch (loginUser(info))
    }

    const auth = useSelector (state => state.auth)

    useEffect (() => {
        if (auth.isAuth){
        history.push("/Feed")
        }
    },[auth.isAuth])

    return (
        <form onSubmit={login}>
       <div>
        <label>email</label>
        <input type="text" name = "email" onChange={handleChange}/>
        </div>
         <div>
        <label>password</label>
        <input type="password" name = "password" onChange={handleChange}/>
        </div>
        <button type="submit">LOGIN</button>
    </form>
    )
}

export default Login
