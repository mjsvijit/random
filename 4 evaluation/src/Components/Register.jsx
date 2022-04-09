import React from 'react'
import { AuthContext } from '../Contexts/AuthContext';

export const Register = () => {
  const {login} = React.useContext(AuthContext);
  
  
  const [ragisterFormDetails, setRagisterFormDetails] = React.useState({
      name:"",
      email:"",
      password:"",
      username:"",
      mobile:"",
      discription:""
  });
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setRagisterFormDetails({
        ...ragisterFormDetails,
        [name]:value
    });
};

const handleSubmit = (e)=>{
  e.preventDefault();
  fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
   
        method:"post",
        body: JSON.stringify(ragisterFormDetails),
        headers:{"Content-Type": "application/json"}
  })
  .then((res)=> res.json())
  .then((res)=>  login(res.token))
};

const {name,email,password,username,mobilenumber,description} =ragisterFormDetails;

  return (
    <div>
    


        <form onSubmit={handleSubmit}> 
        <h1>Ragister your self</h1>

         <input name="name" type="text" placeholder="Name" value={name} onChange={handleChange}/>
         <br />
         <input  name='email' type="email" placeholder='Email' value={email} onChange={handleChange}/>
         <br />
         <input name="password" type="password" placeholder='Password' value={password}  onChange={handleChange}/>
         <br />
         <input name='username' type="text" placeholder="user-name" value={username} onChange={handleChange}/>
         <br />
         <input name="mobilenumber" type="number" placeholder='Mobile Number' value={mobilenumber} onChange={handleChange}/>
         <br />
         <input name='description' type="text" placeholder="Description" value={description} onChange={handleChange}/>
        <br />
         <input type="submit" value="LOGIN"/>
       </form>
      
       
      
   
        
       
    
    </div>
  )
}
