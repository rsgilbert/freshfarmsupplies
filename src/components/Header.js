import React from 'react'
import './Header.css'
import { useHistory } from 'react-router-dom'
import logo from '../logo.png'
import { Cart } from './Cart'
import { SearchIcon } from './SearchIcon'

export const Header = props => {
    const history = useHistory()

    const goToHome = () => history.push("/")
    return (
        <header className="header">  
            <div className="header-container">
                <div className="header-start">
                    <img className="header-logo" src={logo} alt="logo" />
                </div>    
                <ul className="header-links header-end">
                    <li>
                        <SearchIcon />
                    </li>
                    <li>
                        <Cart />
                    </li>
                </ul>
            </div>
        </header>
    )
}