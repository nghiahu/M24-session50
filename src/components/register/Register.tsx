import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    let [email,setEmail] = useState<string>('')
    let [pass,setPass] = useState<string>('')
    const navigate = useNavigate()
    const handleChangeEmail=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
    }
    const handleChangePass=(e:React.ChangeEvent<HTMLInputElement>)=>{
      setPass(e.target.value)
    }
    const register=()=>{
      const user={
        email: email,
        pass:pass
      }
        navigate('/login',{state:user})
    }
    return (
      <div>Register <br />
        <label htmlFor="">Email</label> 
        <input type="email" onChange={handleChangeEmail}/> <br />
        <label htmlFor="">Pass</label>
        <input type="text" onChange={handleChangePass}/> <br />
        <label htmlFor="">Confirm Pass</label>
        <input type="text"/> <br />
        <button className='bg-red-500' onClick={register}>Register</button>
      </div>
    )
  }
