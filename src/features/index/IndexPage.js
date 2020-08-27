import React from 'react'
import { Header } from '../../components/Header'
import './IndexPage.css'
import { MyButton } from '../../components/MyButton'
import { useHistory } from 'react-router-dom'
import { Info } from '../../components/info'

export const IndexPage = props => {
    const history = useHistory()


    return (
        <>
            <Header />
            <div className="container">
                <div className="index">
                    <h1>
                        {Info.welcomemessage}
                    </h1>
                    <p>
                        {Info.welcomesubtitle}
                    </p>
                    <form className="index-form">
                        <input 
                            type="text" 
                            className="index-input"
                            placeholder="Message"
                            />

                        <button 
                            className="index-button">
                            SEND
                        </button>

                    </form>
                </div>
            </div>
        </>
    )
}