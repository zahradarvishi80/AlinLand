import { useState } from "react"
import { useLocation } from "react-router-dom"



const Details=()=>{
const[read,setRead]=useState(0)
const location=useLocation()
    return(
        <div
        className="flex w-[100%]  bg-blue-50  h-full flex-col justify-start items-start"
        >
            <div className="flex flex-col m-5">
           <p className="flex text-xl text-black font-bold m-2">
          Author:  {location.state.props.author}
           </p>
           <p className="flex text-xl text-black font-bold m-2">
        title: {location.state.props.title}
           </p>
           {
            read===0?(
                <> 
                <button onClick={()=>setRead(1)} className="flex m-5 hover:text-xl">reading</button>
            
                <div className="flex-row w-[100%] flex-wrap justify-between justify-items-center justify-self-auto grid grid-cols-3 gap-4">
                 <p className="flex  h-30 text-xl text-black font-thin m-2">
                 {location.state.props.lines.slice(0,40)}
                </p> 
                <p className="flex  h-30 text-xl text-black font-thin m-2">
                 {location.state.props.lines.slice(40,80)}
                </p> 
                <p className="flex  h-30 text-xl text-black font-thin m-2">
                 {location.state.props.lines.slice(80,120)}
                </p> 
                </div>    
                </>
            ):(
        
                     <div className="flex justify-center flex-col w-[100%]"> 
                <button onClick={()=>setRead(0)} className="flex m-5 hover:text-xl">reading</button>
                <div className="w-[30%] flex-wrap justify-around items-around justify-items-center">
                <p className="flex  h-30 text-xl text-black font-thin m-2">
                 {location.state.props.lines}
                </p> 
                    </div>

                </div>
                 
            )
           }
           
           </div>
         
      
           
        </div>
    )
}
export default Details