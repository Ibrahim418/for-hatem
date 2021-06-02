import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {registerUser} from '../actions/authaction'

const Register = ({history}) => {
    const [info , setInfo] = useState({
        firstname :"",
        lastname: "",
        email :"",
        phone:"",
        password: "",
    })
    const dispatch = useDispatch()
    const auth = useSelector (state => state.auth)

    useEffect (() => {
        if (auth.isAuth){
        history.push("/Feed")
        }
    },[auth.isAuth])


     const handleChange = e =>{
         setInfo({...info , [e.target.name]: e.target.value})
     }

     const registerNow = e =>{
         e.preventDefault();
         dispatch(registerUser(info))
     }
    return (
        <form onSubmit={registerNow}> 
            <div>
            <label>firstname</label>
            <input type="text" name = "firstname" onChange={handleChange}/>
            </div>
            <div>
            <label>lastname</label>
            <input type="text" name = "lastname" onChange={handleChange}/>
            </div>
            <div>
            <label>email</label>
            <input type="text" name = "email" onChange={handleChange}/>
            </div>
            <div>
            <label>phone</label>
            <input type="text" name = "phone" onChange={handleChange}/>
            </div>
            <div>
            <label>password</label>
            <input type="password" name = "password" onChange={handleChange}/>
            </div>
            <button type="submit">Register</button>
        </form>
    )
}

export default Register
