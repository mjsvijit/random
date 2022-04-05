import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { incCount,decCount,resetCount } from '../../React-Redux_file/action';


export const Counter = () => {
      const {count} = useSelector((state)=> state.count);
      const dispatch= useDispatch();

  return (
    <div>
            <h1>count:{count}</h1>
            <button onClick={()=>dispatch(incCount(1))}>INC_COUNT</button>
            <button onClick={()=>dispatch(decCount(1))}>INC_COUNT</button>
            <button onClick={()=>dispatch(resetCount())}>INC_COUNT</button>
    
    </div>
  )
}