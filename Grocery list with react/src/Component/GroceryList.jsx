import React from 'react'

export const GroceryList = ({item,handleDelete,id}) => {
  return (
    <div>
        
        <div>
        
        <h3><li>Item :{item}</li> </h3>
        <button onClick={()=>handleDelete(id)}>Delete item</button>

        
        </div>
    
    </div>
  )
}
