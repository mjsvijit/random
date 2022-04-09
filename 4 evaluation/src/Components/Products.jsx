import React,{useEffect, useContext,useState} from 'react'
import { Link, Navigate } from 'react-router-dom';
import {AuthContext} from "../Contexts/AuthContext"
export const Products = () => {
  const {isAuth} = useContext(AuthContext);

   const [users, setUsers] = useState([]);
   
   useEffect(() => {
       fetch(`https://reqres.in/api/users?page=2`)
       .then((res)=> res.json())
       .then((res)=>setUsers(res.data))
       .catch((err)=> console.log(err));
   }, []);

   console.log(isAuth);

   if(!isAuth){
     return <Navigate to="/login" />
   }
  return (
   <table>
     <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>More Details</th>
        </tr>
     </thead>
     <tbody>
        { users.map((user) => (
          <tr key={user.id}>
          <td>{user.first_name}</td>
          <td>{user.email}</td>
          <td>
            <Link to={`/users/${user.id}`}>More Details..</Link>
          </td>
          </tr>
        ))}
     
     </tbody>
   
   </table>
  )
}
