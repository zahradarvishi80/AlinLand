
import React,{createContext, useState} from "react";

export const MyList=createContext()

export const ContextProvider=({children})=>{

    const[list,setList]=useState([])
    return(
        <MyList.Provider value={[list,setList]} >
        {children}
        </MyList.Provider>
    )
}