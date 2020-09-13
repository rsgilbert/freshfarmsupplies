import React from 'react'


import './Icon.css'


export const Icon = props => {
    return (
        <div>
            <img 
                className="icon" 
                src={ props.icon } 
                alt="menu"/>
        </div>
    )

}