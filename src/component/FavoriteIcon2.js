import { useContext, useState } from "react"
import { BsFillSuitHeartFill } from "react-icons/bs"
import { MyList } from "./Context"

const Icons2 = ({ author, title, lines,index }) => {
  const [favorite, setFavorite] = useState(0)
  const [list, setList] = useContext(MyList)
  // const setFavorite1 = (index) => ()=>{
  //   setFavorite(1)
  //   setList((item)=>item.filter((_,i)=>i !== index))
  //   // let temp = [...list]
  //   // const items = { title, author, lines }
  //   // temp.pop(items)
  //   // console.log("temp2", temp);
  //   // setList([...temp])


  // }
  const deleteItem = (index) => () =>
  setList((items) => items.filter((_, i) => i !== index));

  console.log("lll", list);


  return (
    <div className="flex">
      <>
        {
          favorite === 0 ? (
            <BsFillSuitHeartFill className="m-2" onClick={deleteItem(index)} color="red" />
          ) : (
            <BsFillSuitHeartFill className="m-2" onClick={() => setFavorite(0)} color="black" />
          )
        }
      </>
      <p className="mt-1">Delete</p>
    </div>
  )
}
export default Icons2