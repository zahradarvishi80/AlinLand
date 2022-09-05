import { MyList } from "../component/Context"
import {  useNavigate } from "react-router-dom";
import {  useState,useContext } from 'react';
import Imgpoem from '../component/ImagesPoems';
import {IoMdArrowDropdown} from "react-icons/io";
import {MdArrowDropUp} from "react-icons/md"
// import Icons from "../component/FavoriteIcone";
import PoemsList from "../component/PoemsList";
const Home=()=>{
  const [poems,setPoems]=useState([])
  const[click,setClick]=useState(0)
  // const [list,setList]=useContext(MyList)
  const navigate=useNavigate()


  // console.log(list);
    const FetchPoems=async ()=>{
      console.log("ok");
    try{
      await fetch ('https://poetrydb.org/random/20')
      .then(response => response.json() )
      .then(data=>{
        setPoems(data)
        // console.log("data",data)
      })      
    }catch (error){
    console.log(error);
    }
  }
  const SortTitle=()=>{
    const titr=[...poems]
    titr.sort((a,b)=>{
   return a.title - b.title
    })
    setPoems(titr)
  }












  const SortAuthor=()=>{
    const auth=[...poems]
    auth.sort((a,b)=>{
      console.log(a.author);
      return a.author - b.author
    })
    setPoems(auth)
    // console.log("...",poems);
  }


  return(
    <div className="flex w-[100%] mb-10 h-full justify-center items-center flex-col ">
      <div className='flex w-[100%] h-20 shadow-xl justify-between items-between'>
      {
          click===0?(

            <div onClick={()=>setClick(1)} className='flex m-5 w-[100px] justify-center items-center rounded-lg h-10 border-2 border-black bg-white font-bold'>Sorted <IoMdArrowDropdown/> </div>
          ):(
            <div onClick={()=>setClick(0)} className='flex m-5 w-[100px] flex-col justify-center items-around rounded-lg h-28 border-2 border-black bg-white font-bold'  >
            <div className='flex flex-row justify-center items-around'> Sorted <MdArrowDropUp/></div>
             <button onClick={()=>SortTitle()} > title</button>
             <button  onClick={()=>SortAuthor()}> author</button>
              </div>
          )
        }
      <p className='flex text-2xl font-bold mt-5' >Poets Of The World</p>
      <button onClick={()=>
      navigate("/Favorite")
      } className='flex text-2xl font-bold mt-5' >Favorite List</button>
     </div>
        <Imgpoem/>
   
        <button  onClick={()=>FetchPoems()} className="text-xl mt-5 hover:text-2xl  text-grey-500 hover:border-2 hover:rounded-[20px] hover:w-[170px] hover:h-[50px] hover:border-blue-300">Fetch Poems</button>
         <img src="https://uploads-ssl.webflow.com/61e60131d76cdc84804f0cc3/61e60131d76cdcc14d4f0cfe_Illustration.png" 
        alt="topblog"
        onClick={()=>FetchPoems()} 
          className="flex w-48 h-48 mb-20 hover:w-52 hover:h-52 hover:border-2 hover:border-blue-100 rounded-full"
        />
        {
          poems.length===0?(
            null
          ):(
           <PoemsList  poems={poems} />
          )
        }

        {/* <>
        
        </> */}
    </div>
  )
      }
export default Home