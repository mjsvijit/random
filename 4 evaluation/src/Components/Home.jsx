import React,{useContext} from 'react'
import {AuthContext} from "../Contexts/AuthContext"
import { Navigate } from 'react-router-dom';

export const Home = () => {
  const {isAuth} = useContext(AuthContext);



   if(!isAuth){
     return <Navigate to="/login" />
   }
  return (
    <div>Home</div>
  )
}
