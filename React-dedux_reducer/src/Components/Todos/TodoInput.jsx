import React from 'react'
import {v4 as uuid} from "uuid"
import { useDispatch } from "react-redux"
import { addTodo } from '../../React-Redux_file/action'



export const TodoInput = () => {
    const [name, setName] = React.useState("");
    const dispatch = useDispatch();
    // const todos = useSelector((state)=> state.todos.todos)

    const handleAdd = () =>{
        const payload ={
            name,
            status:false,
            id:uuid()
        }
              dispatch(addTodo(payload));
              setName("");
    };


  return (
    <div> 
    <div>
        <input 
           placeholder='Enter item'
           value={name} 
           onChange={(e)=>setName(e.target.value)}
           />
    
           <button onClick={handleAdd}>ADD</button>

    </div>
 
    </div>
  )
}
