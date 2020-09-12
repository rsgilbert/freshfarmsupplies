import React from 'react'
import './Item.css'



export const Item = ({ item }) => {

    return (
        <figure class="item-figure">
            <img 
                src={item.pictures[0]}
                alt="item-image"
                />
            <figcaption>
                <div className="item-name">
                    { item.name}
                </div>
                <div className="item-price"> 
                    {item.price}
                </div>
            </figcaption>
        </figure>
    )
}