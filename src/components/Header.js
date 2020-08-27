import React from 'react'
import './Header.css'
import logo from '../logo.jpg'
import { useHistory } from 'react-router-dom'
import { Info } from './info'


export const Header = props => {
    const history = useHistory()

    const goToHome = () => history.push("/")
    return (
        <header className="header" onClick={goToHome}>  
            <img className="header-logo" src={logo} alt="logo" />
            <h1 className="header-title">{ Info.name }</h1>
            <ul className="header-links">
                <li>
                    <a>CV</a>
                </li>
                <li>
                    <a>Blog</a>
                </li>
            </ul>
        </header>
    )
}