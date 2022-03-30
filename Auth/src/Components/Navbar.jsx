import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components'

const NavbarWrapper = styled.nav`
    display:flex;
    flex-direction:row-reverse;
    background-color:black;
    color:"white";
    padding:20px;
   
`;

export const Navbar = () => {
  
  return (
    <div>
    <NavbarWrapper>
    
    <Link to='/home'>Home</Link>
    <Link to='/register'>Register</Link>   
    <Link to='/products'>Products</Link>
    <Link to='/login'>Login</Link>
    </NavbarWrapper>
    

    </div>
  )
}
