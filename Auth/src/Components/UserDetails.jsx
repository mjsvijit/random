import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

export const UserDetails = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null)

    useEffect(()=>{
        fetch(`https://reqres.in/api/users/${id}`)
        .then((res)=> res.json())
        .then((res)=> setUser(res));

    }, []);

  return (
    <div>
    <h1>UserDetails</h1>
    <h3> {user.data.email}</h3>
    
    </div>
  )
}
