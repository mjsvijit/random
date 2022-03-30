import React from 'react'
import { AuthContext } from '../Contexts/AuthContext';

export const Login = () => {
    const {login} = React.useContext(AuthContext);
  const [formDetails, setFormDetails] = React.useState({
      email:"",
      password:""
  });

  const handleChange=(e)=>{
      const {name,value}=e.target;
      setFormDetails({
          ...formDetails,
          [name]:value
      });
  };

  const handleSubmit = (e)=>{
      e.preventDefault();
      fetch(`https://reqres.in/api/login`,{
       
            method:"post",
            body: JSON.stringify(formDetails),
            headers:{"Content-Type": "application/json"}
      })
      .then((res)=> res.json())
      .then((res)=>  login(res.token))
  };
  const {email,password} =formDetails;
  
    return (
   

    <form onSubmit={handleSubmit}>
    
    <h1>Login Page</h1>
    <input name='email' type="text" placeholder="Email" value={email} onChange={handleChange}/>
     <br />
     
     <input name='password' type="text" placeholder='Password' value={password} onChange={handleChange} />

     <br />

     <input type="submit" value="LOGIN"/>
  
    </form>
      
   
  )
}
