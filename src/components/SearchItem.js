import React from 'react'
import './SearchItem.css'
import { useHistory } from 'react-router-dom'



export const SearchItem = ({ item }) => {
    const history = useHistory()

    const goToItemPage = () => {
        history.push(`/items/${item.id}`)
    }


    return (
        <figure class="searchitem-figure" onClick={goToItemPage}>
            <img 
                src={item.pictures[0]}
                alt="searchitem-image"
                />
            <figcaption>
                <div className="searchitem-name">
                    <h1>{ item.name}</h1>
                </div>
                <div className="searchitem-price"> 
                    <h2>{item.price.toLocaleString()}</h2>
                </div>
                <p  className="searchitem-info">{ item.specs }</p>
                <p>{ item.description }</p>
            </figcaption>
        </figure>
    )
}