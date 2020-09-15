import React from 'react'
import './AdminPage.css'
import { useSelector } from 'react-redux'
import { selectAllItems } from '../itemlist/itemlistSlice'
import { Item } from '../../components/Item'
import { CategoriesSidebar } from '../../components/CategoriesSidebar'
import { useHistory } from 'react-router-dom'



export const AdminPage = props => {
    const itemlist = useSelector(selectAllItems)
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

    return (
        <div className="picturelist">
            <button className="new-item" onClick={goToNewItem}>
                New
            </button>
            <div class="itemlist">                
                {renderItemList}
            </div>
        </div>
    )
}