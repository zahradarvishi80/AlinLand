
import { Link } from "react-router-dom";

import { useEffect, useState } from 'react';
import "../App.css"
// import Favorite from "../component/PoemsFavorite";
// import Icons from "../component/favoriteIcone";
import Icons from "../component/FavoriteIcone";
const Home=()=>{
  const [poems,setPoems]=useState([])
  // const[list,setList]=useState([''])
//  const sortTitle=()=>{
//   [...poems].sort((a,b)=>{
//     console.log(a.title)
//     console.log(b.title)
//     return( 
//       a.title - b.title
//       )

//   })
//  }
  const FetchPoems=async ()=>{

    try{
      await fetch ('https://poetrydb.org/random/20')
      .then(response => response.json() )
      .then(data=>{
        setPoems(data)
        console.log(data)
      })      
    }catch (error){
    console.log(error);
    }
  }

//   const addtofav=(id)=>{
//     const data=poems.find(item=> item.author===id)
// setList({
//   list:[{...data}]
// })

//   }
// console.log(list);
  return(
    <div>
  


  <button onClick={()=>FetchPoems()} >Fetch Poems</button>
  <button  >Sort by name</button>  
  <button>Sort by title </button>

  <div className='container'>
  {poems.map((item,index)=>{
          return(
         
            <div className='main' key={index}  >
              <Link to={`/Details/${item.author}`} state={{ props: item }} >
              <p>author:{item.author}</p>
              <p>title:{item.title} </p>
              </Link>
             {/* <button onClick={()=>addtofav(item.author)} >add to favarite</button> */}
              <Icons title={item.title} author={item.author} lines={item.lines}  />
              </div>
          
          )
        })
      
    }

    <div></div>
    </div>

    {/* <Icons    author={author} title={title} lines={lines}/> */}
   {/* <Favorite list={list} */}
   
   {/* //> */}

   {/* {list.map((item,index)=>{
    return(
      <div key={index}>
        <p>
          {item.title}
        </p>
        </div>
    )
   })} */}

    </div>
  )
}
export default Home