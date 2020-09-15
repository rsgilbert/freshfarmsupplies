import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import * as firebase from "firebase/app"
import "firebase/firestore"
import "firebase/storage"
import { newitemUpdated, selectNewItemInfo } from '../newitem/newitemSlice'
import { Picture } from '../../components/Picture'
import './PicturesPage.css'
import { getIdFromWindow, getIdFromPath } from '../../functions'

export const PicturesPage = props => {
    const [pictureFiles, setPictureFiles] = useState([])
    const info = useSelector(selectNewItemInfo)
    const [pictures, setPictures] = useState([])
    const id = getIdFromPath(3)

    const storage = firebase.storage()
    const db = firebase.firestore()

    const uploadToDb = async pictureLinks => {
        console.log("now uploading")
        console.log("links are", pictureLinks)
        
        await db
            .collection("items")
            .doc(id)
            .set({ pictures: ["K"] }, { merge: true })
    }

    const uploadOneFile = async file => {
        const storageRef = storage.ref().child(file.name)
                const uploadTask = storageRef.put(file)
                
                uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
                    snapshot => {
                        switch(snapshot.state) {
                            case firebase.storage.TaskState.RUNNING:
                                console.log("Uploading ", file.name)
                                break
                        }
                }, error => {
                    console.log(error)
                }, async () => {
                const downloadURL = await uploadTask.snapshot.ref.getDownloadURL()
                links.push(downloadURL)
    }

    const savePictures = async () => {
        const links = []
        Promise.all(
            pictureFiles.map(async pictureFile => {
                const storageRef = storage.ref().child(pictureFile.name)
                const uploadTask = storageRef.put(pictureFile)
                
                uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
                    snapshot => {
                        switch(snapshot.state) {
                            case firebase.storage.TaskState.RUNNING:
                                console.log("Uploading ", pictureFile.name)
                                break
                        }
                }, error => {
                    console.log(error)
                }, async () => {
                const downloadURL = await uploadTask.snapshot.ref.getDownloadURL()
                links.push(downloadURL)
                })      
            })   
        ).then(() => {
            uploadToDb(links)
        })
        return links
    }

    const uploadFile = input => {
        const fileinput = document.getElementById("file-input")
        const file = fileinput.files[0]
        const newPictures = [...pictures, picture]
        const newPictureFiles = [...pictureFiles, file]
        setPictureFiles(newPictureFiles)
        // console.log(newPictures)
        setPictures(newPictures)
    }
    // const readFiles = input => {
    //     const fileinput = document.getElementById("file-input")
    //     // console.log(fileinput.files)
    //     const file = fileinput.files[0]
    //     const picture = window.URL.createObjectURL(file)
    //     const newPictures = [...pictures, picture]
    //     const newPictureFiles = [...pictureFiles, file]
    //     setPictureFiles(newPictureFiles)
    //     // console.log(newPictures)
    //     setPictures(newPictures)
    // }
    
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
        <div className="newitempagepictures">
            <div className="pictures-heading">
                <h1>Pictures</h1>
                <button 
                    onClick={onSubmitForm} 
                    className="success-button picture-save" type="submit">
                    save
                </button>
            </div>
            <div className="picturelist">
                <form onSubmit= {onSubmitForm}
                    className="picture-form">    
                        <label htmlFor="file-input"
                            className="upload-label">
                            Upload
                        </label>
                        <input type="file" 
                            id="file-input"
                            className="inputfile"
                            onChange={readFiles} 
                            />  
                </form>
                { renderPictures() }
            </div>
        </div>
    )
}