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
        <header className="header" onClick={goToHome}>  
            <ul className="header-links header-links-start">
                <li>
                    <img className="header-logo" src={logo} alt="logo" />
                </li>
            </ul>
            <ul className="header-links header-links-end">
                <li>
                    <SearchIcon />
                </li>
                <li>
                    <Cart />
                </li>
            </ul>
        </header>
    )
}