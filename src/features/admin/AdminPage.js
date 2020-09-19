import React from 'react'
import './AdminPage.css'
import { useSelector } from 'react-redux'
import { selectAllItems } from '../itemlist/itemlistSlice'
import { Item } from '../../components/Item'
import { CategoriesSidebar } from '../../components/CategoriesSidebar'
import { useHistory, Link } from 'react-router-dom'
import { Loading } from '../../components/Loading'
import { PageTitle } from '../../components/PageTitle'
import { ActionButton } from '../../components/ActionButton'



export const AdminPage = props => {
    const history = useHistory()



    // if(status !== 'succeeded') {
    //     return <Loading />
    // }

    return (
        <div>
             <div className="admin-heading">
                <PageTitle title="Admin" />
                <Link to={ `/admin/items/` } 
                    className="new-link">
                    <ActionButton title="New" className="action-new"/>
                </Link>
            </div>
       
        </div>
    )
}