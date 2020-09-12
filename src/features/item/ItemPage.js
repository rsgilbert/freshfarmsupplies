import React, { useState } from 'react'
import { getIdFromWindow } from '../../functions'
import { useSelector } from 'react-redux'
import { selectItem } from '../itemlist/itemlistSlice'
import './ItemPage.css'

export const ItemPage = props => {
    const id = getIdFromWindow()
    const item = useSelector(state => selectItem(state, id))
    const pictures = item.pictures
    const [currentPictureIdx, setCurrentPictureIdx] = useState(0)
    const [quantity, setQuantity] = useState(1)
    
    const onQuantityChanged = e => setQuantity(e.target.value)
    const renderNonCurrentPictures = () => pictures.map((picture, index) => {
        const changeCurrentPicture = () => setCurrentPictureIdx(index)
        
        if(pictures[currentPictureIdx] !== picture) {
            return (
                <li  
                    className="item-thumbnail"
                    onClick={changeCurrentPicture}
                    key={index}
                    >
                    <img 
                        src={picture}
                        className="thumbnail-picture"
                        />
                </li>
            )
        } 
    })

    return (
        <div className="itempage">
            <div>
                <div className="item-images">
                    <div>
                        <img    
                            className="item-current-image"
                            src={pictures[currentPictureIdx]}
                            />
                    </div>
                    <div className="thumbnails">
                        <ul className="thumbnail-list">
                            { renderNonCurrentPictures() }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="item-details">
                <div>
                    <h1>
                        {item.name}
                    </h1>
                    <p>
                        { item.specs}
                    </p>
                    <h2>{item.price}</h2>
                    <div>
                        <form className="quantity-form">
                            <label  
                                htmlFor="quantity"
                                className="quantity-header">
                                Quantity
                            </label>
                            <div className="quantity-input">
                                <input
                                    type="number"
                                    name="quantity"
                                    placeholder="Quantity"
                                    value={ quantity }
                                    onChange={onQuantityChanged}
                                    />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="item-actions">
                    <button className="add-to-cart">
                        ADD TO CART
                    </button>
                    <button className="buy-it-now">
                        BUY IT NOW
                    </button>
                </div>

                <div className="item-info">
                    
                    <p>
                        {item.description}
                    </p>
                    <p>{item.quantity} </p>
                </div>
                

            </div>
        </div>
    )
}