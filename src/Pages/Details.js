import { useState } from "react"
import { useLocation } from "react-router-dom"



const Details=()=>{
const[read,setRead]=useState(0)
const location=useLocation()
    return(
        <div
        className="flex w-[100%] h-full bg-blue-50  h-full flex-col content-around items-center justify-around justify-items-center justify-self-center"
        >
            <div className="flex flex-row w-[100%] h-32  content-around items-center justify-around justify-items-center justify-self-center m-20">
         <div>
           <p className="flex text-2xl text-black font-bold m-2">
          Author:  {location.state.props.author}
           </p></div>
           <div>
           <img src="https://uploads-ssl.webflow.com/61e60131d76cdc84804f0cc3/61e60131d76cdcc14d4f0cfe_Illustration.png" 
        alt="topblog"
        // onClick={()=>FetchPoems()} 
          className="flex w-48 h-48 mb-20 hover:w-52 hover:h-52 hover:border-2 hover:border-blue-100 rounded-full"
        /></div>
        <div className="flex w-[350px] h-32 mt-9">
           <p className="flex text-2xl text-black font-bold m-2">
        title: {location.state.props.title}
           </p> </div> 
           </div>
           {/* */}
        <div className="flex w-[100%] h-full bg-blue-50 content-around  justify-around justify-items-center justify-self-center ">
        <p className="flex w-[60%]" >
           {location.state.props.lines}
           </p> 
        </div>


           {/* {
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
           } */}
           
         
         
      
           
        </div>
    )
}
export default Details