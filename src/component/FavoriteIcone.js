import { useState } from "react"
import {BsFillSuitHeartFill} from "react-icons/bs"
import { useLocation } from "react-router-dom"

const Icons=({author,title,lines})=>{
    const [favorite,setFavorite]=useState(0)
    const [list,setList]=useState([])
    const setFavorite1=()=>{

        setFavorite(1)
        let temp=[...list]
        const items={title,author,lines}
        console.log("temp",temp);
        temp.push(items)
        console.log("temp2",temp);
        setList([...temp])
    }
    console.log("lll",list);
    const Deleteitem=(id)=>{
        let temp=[...list]
        const items={title,author,lines}
        // console.log("temp",temp);
        temp.pop(items)
        // console.log("temp2",temp);
        setList([...temp])
    }
    return(
        <div>
            <>
         {
                favorite===0?(
                  <BsFillSuitHeartFill  onClick={()=>setFavorite(1)}  color="black"/>
                
                ):(
                  <BsFillSuitHeartFill onClick={()=>setFavorite1()} color="red"/>
                )
              }
              </>
           {list.map((i,index)=>{
            return(
                <div>
                    <p>{i.title} </p>
                    <button onClick={()=>Deleteitem(i.title)}  >
                        delete
                    </button>
                    </div>
            )
           })} 
        </div>
    )
}
export default Icons