import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { Info } from './info'

export const Footer = props => {


    return (
        <footer className="footer">
            <p className="info-name"> {Info.name } </p>
            <p>{Info.contact }</p>
            <p className="info-email">{ Info.email }</p>
        </footer>
    )
}