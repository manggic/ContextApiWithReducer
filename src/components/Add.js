import React, { useContext } from  "react";
import MyContext from "./context"
import { ADD_NUMBER } from "./action.types";

export const Add =()=>{

    const { num, dispatch  } = useContext(MyContext);

    const handleAdd = ()=>{
         dispatch({
             type: ADD_NUMBER,
             payload : num.count + 1 
         })
    }
    return(
      <button onClick={  handleAdd } > ADD</button>
      
    )  
}  


