import React from 'react'
import { GroceryInput } from './GroceryInput'
import {v4 as uuid} from "uuid"
import { GroceryList } from './GroceryList';


export const Grocery = () => {

   const [list, setList] = React.useState([]);

    const handleAdd = (item) =>{
        const payload ={
            item,
            id:uuid(),
        }
    setList([...list,payload]);     
    }

   const handleDelete =(id)=>{
       const updatedData= list.filter((item)=>item.id !== id);
       setList(updatedData);
   }


  return (
    <div>
        <GroceryInput handleAdd={handleAdd}/>    
        {
            list.map((item,id) =>(
                   <GroceryList {...item} key={item.id} handleDelete={handleDelete} />
            ))}
    
    </div>
  )
}
