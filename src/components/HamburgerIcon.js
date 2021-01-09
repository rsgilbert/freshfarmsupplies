import React from 'react'
import {  Link } from 'react-router-dom'
import hamburger from '../icons/hamburger.svg'
import './Icon.css'


export const HamburgerIcon = props => {
    return (
        <div>
            <Link to='/info'>
            <img 
                className="icon" 
                src={ hamburger } 
                alt="menu"/>
            </Link>
        </div>
    )

}