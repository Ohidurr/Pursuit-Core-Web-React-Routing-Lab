import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    
        return(
    
            <nav>
                <NavLink exact to={"/"}>HOME</NavLink> 
                <NavLink to={"/dogs"}>dogs</NavLink>
    
            </nav>
        )
    }

export default NavBar