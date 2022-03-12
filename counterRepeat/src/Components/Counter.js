import React from 'react'
import styles from "./Counter.css"
const Counter = () => {
    const [count, setCount] = React.useState(0);
     
    function countdata(data){
            setCount(count + data);
    }

    function double(gdata){
        setCount(count * gdata)
    }
  return (
    <div >
       <h1 >Counter:{ count }</h1>  
       <button onClick={()=>{countdata(2)}}>Add</button>
       <button onClick={()=>{countdata(-2)}}>Sub</button>
       <button onClick={()=>{double(2)}}>Double</button>
    </div>
  )
}

export default Counter
