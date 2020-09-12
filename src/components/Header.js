import React from 'react'
import './Header.css'
import { useHistory, Link } from 'react-router-dom'
import logo from '../logo.png'
import { Cart } from './Cart'
import { SearchIcon } from './SearchIcon'

export const Header = props => {
    const history = useHistory()
    const goToHome = () => { history.push("/") }

    return (
        <div className="header-complexity">

            <div className="header-placeholder"></div>
            <header className="header">  
                <div className="header-container">
                    <div className="header-start">
                        <Link to="/">
                            <img className="header-logo"
                                src={logo} alt="logo" />
                        </Link>
                        
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
        </div>
    )
}