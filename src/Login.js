import React from 'react'
import { useDispatch } from 'react-redux'
import {login, logout} from './features/user'

export default function Login() {

    const dispatch = useDispatch
  return (
    <div>
        
       <button onClick={()=>dispatch(login({
           email:"alatrechsafa@gmail.com",
           nom:"safa", 
           prenom:"ALATRECH", 
           adress:"Tunis"}))}>
            Se connecter
        </button>  

        <button onClick={()=>dispatch(logout())}>
            Se connecter
        </button>  

        </div>
  )
}
