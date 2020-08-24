import React, { useState, useReducer } from 'react';
import MyContext from "./components/context"
import './App.css';
import { Add} from "./components/Add"
import {Sub}  from "./components/Sub"
import   Reducer  from "./components/reducer"
// hooks 
const App = ()=>{
  const [ num , dispatch ] = useReducer(Reducer, { count : 0 });
   return(
          <MyContext.Provider value = { { num, dispatch } } >  
          <h1>{ num.count } </h1>
          <Add />
          <Sub />
          </MyContext.Provider>
   )  
};

export default App;






// const Theme =({ theme } )=>{
//    return(
//        <h1 style={{ backgroundColor  : `${ theme}` }}  > { theme }    </h1>
//    )
   
// }

// const App =()=>{
     
//      const [ theme, setTheme ] = useState('red');

//      const handleToggle =()=>{
//          setTheme( theme === "red"? "blue" : "red" )
//      }

//       return(
//         <>
//         <Theme  theme ={ theme }  /> 
//         <button onClick={ handleToggle }  >Toggle</button> 
//         </>
//       );
// }




