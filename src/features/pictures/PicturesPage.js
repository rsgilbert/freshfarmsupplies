import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import * as firebase from "firebase/app"
import "firebase/firestore"
import "firebase/storage"
import { newitemUpdated, selectNewItemInfo } from '../newitem/newitemSlice'
import { Picture } from '../../components/Picture'
import './PicturesPage.css'
import { getIdFromWindow, getIdFromPath } from '../../functions'
import { useHistory } from 'react-router-dom'
import { PageTitle } from '../../components/PageTitle'
import { ActionButton } from '../../components/ActionButton'


export const PicturesPage = props => {
    const db = firebase.firestore()
    const storage = firebase.storage()
    

    const info = useSelector(selectNewItemInfo)



    const [pictures, setPictures] = useState([])
    const id = getIdFromPath(3)
    const history = useHistory()


    const savePictures = async () => {        
        db.collection("items")
            .doc(id)
            .set({ pictures }, { merge: true })
            .then(() => {                
                history.push(`/admin/items/${id}`)
            })
    }

    const uploadOneFile = async file => {
        const storageRef = storage.ref().child(file.name)
        return storageRef.put(file)
            .then(snapshot => snapshot.ref.getDownloadURL())
    }

    const uploadPicture = input => {
        const fileinput = document.getElementById("file-input")
        console.log(fileinput.files)
        Object.values(fileinput.files).map(async file => {
            try {
                const picture = await uploadOneFile(file)
                setPictures([...pictures, picture])
            } catch(e) {
                console.log("Error captured: ", e)
            }
        })
    }
    
    const onSubmitForm = async e => {
        e.preventDefault()
        savePictures()
    }

    const renderPictures = () => pictures.map(picture => {
        return (
            <Picture picture={picture} key={picture}/>
        )
    })

    return (
        <div className="pictures-complexity">
            <PageTitle title="Pictures" />
            <div className="newitempagepictures">
                <div className="picturelist">
                    <form onSubmit= {onSubmitForm}
                        className="picture-form">    
                            <label htmlFor="file-input"
                                className="upload-label">
                                Upload
                            </label>
                            <input type="file" 
                                multiple
                                id="file-input"
                                className="inputfile"
                                onChange={uploadPicture} 
                                />  
                    </form>
                    { renderPictures() }
                </div>
                <ActionButton 
                        onClick={onSubmitForm}
                        title="save"
                        />
            </div>
        </div>
    )
}