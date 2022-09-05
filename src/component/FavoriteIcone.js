import { useContext, useState } from "react"
import { BsFillSuitHeartFill } from "react-icons/bs"
// import { useLocation } from "react-router-dom"
import { MyList } from "./Context"

//  export function Icons2({author,title,lines}){
//   const [favorite2,setFavorite2]=useState(0)
//   const [list,setList]=useContext(MyList)
//   const setFavorite3=()=>{
//     // setFavorite(1)
//     let temp=[...list]
//     const items={title,author,lines}
//     temp.pop(items)
//     console.log("temp2",temp);
//     setList([...temp])
// }
//   return(
//     <div>
//     <>
//  {
//         favorite2===1?(
//           <BsFillSuitHeartFill className="m-2"  onClick={()=>setFavorite2(0)}  color="blue"/>

//         ):(
//           <BsFillSuitHeartFill className="m-2"  onClick={()=>setFavorite3()} color="red"/>
//         )
//       }
//       </>
// </div>
//   )
// }


const Icons = ({ author, title, lines }) => {
  const [favorite, setFavorite] = useState(0)
  const [list, setList] = useContext(MyList)
  const setFavorite1 = () => {
    setFavorite(1)
    let temp = [...list]
    const items = { title, author, lines }
    temp.push(items)
    console.log("temp2", temp);
    setList([...temp])
  }
  // console.log("lll", list);

  // const Deleteitem=(id)=>{
  //     let temp=[...list]
  //     const items={title,author,lines}
  //     temp.pop(items)
  //     setList([...temp])
  // }
  const setFavorite2 = () => {
    setFavorite(0)
    let temp = [...list]
    const items = { title, author, lines }
    temp.pop(items)
    console.log("temp2", temp);
    setList([...temp])
  }

  return (
    <div>
      <>
        {
          favorite === 0 ? (
            <BsFillSuitHeartFill className="m-2" onClick={() => setFavorite1()} color="black" />

          ) : (
            <BsFillSuitHeartFill className="m-2" onClick={() => setFavorite2()} color="red" />
          )
        }
      </>
    </div>
  )
}
export default Icons