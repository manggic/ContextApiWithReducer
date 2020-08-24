
import React, { useContext } from "react";
import MyContext from "./context"

import { ADD_NUMBER, SUB_NUMBER}  from "./action.types"

const Reducer = ( state, action )=>{
    
    switch (action.type) {
        case ADD_NUMBER:
            return { count : action.payload } ;
        case  SUB_NUMBER:
          return( { count : action.payload  }  );
        default:
            break;
    }
         
}
export default Reducer;