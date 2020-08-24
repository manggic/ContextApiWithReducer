import React, { useContext } from  "react";
import MyContext from "./context"
import { SUB_NUMBER } from "./action.types";

export const Sub =()=>{
    const { num, dispatch  } = useContext(MyContext);
    const handleAdd = ()=>{
         dispatch({
             type: SUB_NUMBER,
             payload : num.count - 1 
         })
    }
    return(
      <button onClick={  handleAdd } > SUB</button>
    )  
}  


