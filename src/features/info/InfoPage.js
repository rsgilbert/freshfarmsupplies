import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './InfoPage.css'
import { useHistory } from 'react-router-dom'
import { Picture } from '../../components/Picture'

export const InfoPage = props => {
  
    return (
        <div className="info">
            <h1>About Freshfarms</h1>
            <div className="info-pictures">
                <div>
                    <Picture picture="/owner.jpg" />
                    <p>Director</p>
                </div>
                <div className="pictures-caption">
                    <Picture picture="/marketingmanager.jpg" />
                    <p>Marketing Manager</p>
                </div>
            </div>
            <p>
                We started operating in January 2018. 
            </p>
            <p>We are mainly dealing in export of agricultural produce namely:</p>
            <ol>
                <li>1. Bananas (Matooke)</li>
                <li>2. Carrots</li>
                <li>3. Beans</li>
                <li>4. Lemons</li>
                <li>5. Ginger</li>
                <li>6. Tomatoes</li>
                <li>7. Green pepper</li>
                <li>8. Fresh beans </li>
            </ol>

        </div>
    )

}   