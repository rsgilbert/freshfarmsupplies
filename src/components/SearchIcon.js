import React from 'react'

import search from './search.svg'
import './SearchIcon.css'
import { useHistory } from 'react-router-dom'


export const SearchIcon = props => {
    const history = useHistory()

    const goToSearch = () => history.push("/search")

    return (
        <div 
            onClick={goToSearch}>
            <img 
                className="searchicon" 
                src={ search } 
                alt="cart"/>
        </div>
    )

}