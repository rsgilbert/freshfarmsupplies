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
    const { itemlist, status } = useSelector(selectAllItems)  
    const history = useHistory()

    
    const renderItemList = itemlist.map(item => {
        return (
            <Item
                item={item}
                key={item.id} 
                />
        )
    })

    

    const goToNewItem = () => history.push("/admin/new")

    if(status !== 'succeeded') {
        return <Loading />
    }

    const getDateString = () => new Date().getTime().toString()
    return (
        <div>
             <div className="admin-heading">
                <PageTitle title="Admin" />
                <Link to={ `/admin/items/${getDateString()}` } 
                    className="new-link">
                    <ActionButton title="New" className="action-new"/>
                </Link>
            </div>
            <div class="itemlist">                
                {renderItemList}
            </div>
        </div>
    )
}