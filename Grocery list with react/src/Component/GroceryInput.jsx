import React from 'react'

export const GroceryInput = ({handleAdd}) => {

   const [item, setItem] = React.useState("")

  return (
    <div>
       <input placeholder='Enter Item' value={item} onChange={(e)=>setItem(e.target.value)}/>
       <button onClick={()=>handleAdd(item)} >Add Item</button>
    </div>
  )
}
