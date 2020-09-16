import React, { useState } from 'react'
import { getIdFromPath } from '../../functions'
import { useSelector, useDispatch } from 'react-redux'
import { selectItem, selectAllItems } from '../itemlist/itemlistSlice'
import classNames from 'classnames'
import * as firebase from "firebase/app"
import "firebase/firestore"
import './EditPage.css'
import { Loading } from '../../components/Loading'
import { PageTitle } from '../../components/PageTitle'

export const EditPage = props => {
    const id = getIdFromPath(3)
    const db = firebase.firestore()
    const docRef = db.collection("items").doc(id)
    const [item, setItem] = useState({})
    docRef.get()
        .then(doc => {
            setItem(doc.data())
        })

    // const { status, item } = useSelector(state => selectItem(state, id))
    const pictures = (item && item.pictures) ? item.pictures : [] 
    const [currentPictureIdx, setCurrentPictureIdx] = useState(0)
    const dispatch = useDispatch()


    
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

    // if(status !== 'succeeded') {
    //     return <Loading />
    // } 


    return (
        <div className="editpage">
            <PageTitle title="Edit" />
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
                    </div>
                    <div className="item-actions">
                    
                        <button className="buy-it-now">
                            BUY IT NOW
                        </button>
                    </div>

                    <div className="item-info">
                        
                        <p>
                            {item.description}
                        </p>
                    </div>
                
                </div>
            </div>
        </div>
        
    )
}