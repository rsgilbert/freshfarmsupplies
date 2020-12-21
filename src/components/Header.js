import React from 'react'
import './Header.css'
import { useHistory, Link } from 'react-router-dom'
import logo from '../logo.jpg'
import { Cart } from './Cart'
import { SearchIcon } from './SearchIcon'
import { HamburgerIcon } from './HamburgerIcon'
import { AccountIcon } from './AccountIcon'

export const Header = props => {
    const history = useHistory()
    const goToHome = () => { history.push("/") }

    return (
        <div className="header-complexity">

            <div className="header-placeholder"></div>
            <header className="header">  
                <div className="header-container">
                    <ul className="header-links header-start">
                        <li>
                            <HamburgerIcon />
                        </li>
                        <li>
                            <SearchIcon />
                        </li>
                    </ul>

                    <div className="header-center">
                        <Link to="/">
                            <img className="header-logo"
                                src={logo} alt="logo" />
                        </Link>                        
                    </div>

                    <ul className="header-links header-end">
                        <li>
                            <AccountIcon />
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