import React from 'react'

import search from './search.svg'
import './SearchIcon.css'


export const SearchIcon = props => {


    return (
        <div>
            <img 
                className="searchicon" 
                src={ search } 
                alt="cart"/>
        </div>
    )

}