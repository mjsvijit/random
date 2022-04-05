
import { INC_COUNT,DEC_COUNT,RESET_COUNT,ADD_TODO } from "./action.jsx"

// = { todos: [{ id:1, name:"Learn React", status:true}] }

// ={count:0}


export const reducer = (store, action) => {
   switch(action.type){
    case ADD_TODO:
        return {
          
         ...store,
         todos:[...store.todos,action.payload]

        }
       
        case INC_COUNT: 
        return {
            ...store,
            count:store.count+action.payload
        }

        case DEC_COUNT:
            return {
                ...store,
                count:store.count-action.payload
            }

            case RESET_COUNT:
                return {
                    ...store,
                    count:0
                }
  default:
      return store
}
}
