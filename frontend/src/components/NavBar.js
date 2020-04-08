import React from 'react'
import {NavLink} from 'react-router-dom'
import '../style/NavBar.css'

const NavBar = () => 
    <div className='nav-container'>
        <NavLink className="creation-link"
            to='/reptile-creation'
            exact>Reptile Creation
        </NavLink>
        <NavLink className="create-feed-link"
            to='/feed-creation'
            exact>Feeding Creation
        </NavLink>
        <NavLink className="home-link"
            to='/user'
            exact>Home
        </NavLink>
        <NavLink className="reptiles-link"
            to='/reptile'
            exact>View Reptiles
        </NavLink>
        <NavLink className="feeds-link"
            to='/feeds'
            exact>View Feedings
        </NavLink>
    </div>


export default NavBar