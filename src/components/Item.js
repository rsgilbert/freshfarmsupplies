import React from 'react'
import './Item.css'
import { useHistory } from 'react-router-dom'



export const Item = ({ item }) => {
    const history = useHistory()

    const goToItemPage = () => {
        history.push(`/items/${item.id}`)
    }


    return (
        <figure class="item-figure" onClick={goToItemPage}>
            <img 
                src={item.pictures[0]}
                alt="item-image"
                />
            <figcaption>
                <div className="item-name">
                    { item.name}
                </div>
                <div className="item-price"> 
                    { item.price.toLocaleString() }
                </div>
            </figcaption>
        </figure>
    )
}