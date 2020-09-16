import React from 'react'
import './Item.css'
import { useHistory } from 'react-router-dom'



export const Item = ({ item }) => {
    const history = useHistory()
    const picture = item.pictures && item.pictures[0]

    const goToItemPage = () => {
        history.push(`/items/${item.id}`)
    }


    return (
        <figure className="item-figure" onClick={goToItemPage}>
            <img 
                src={picture}
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