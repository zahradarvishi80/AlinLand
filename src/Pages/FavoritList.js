import { MyList } from "../component/Context"
import { useContext } from 'react';
import Icons2 from "../component/FavoriteIcon2"
import { Link, useNavigate } from "react-router-dom";

const FavoriteList=()=>{
    const [list,setList]=useContext(MyList)
    const navigate=useNavigate()
    
    return(
        <div>

        {list.length===0?(
          <div className="flex flex-col justify-center items-center justify-items-center">
          <p className="flex justify-center m-10 text-2xl font-bold">You haven't chosen your favorite poem yet</p>
          <img src="https://uploads-ssl.webflow.com/61e60131d76cdc84804f0cc3/61e60131d76cdcc14d4f0cfe_Illustration.png" 
         alt="topblog"
         onClick={()=>
         navigate("/")
         } 
          className="flex w-48 h-48 mb-20 justify-center items-center hover:w-52 hover:h-52 hover:border-2 hover:border-blue-100 rounded-full"
        />
        <p className="flex justify-center text-xl font-bold">choose your favorite poems</p>
          </div>
        ):(

            <div className="flex w-auto h-full flex-wrap flex-row  justify-around items-between">
                <p className="flex justify-center m-10 text-2xl font-bold">Your Favorite Poem </p>
            <div className="flex-row w-[100%] flex-wrap justify-start justify-items-start justify-self-start grid grid-cols-5 gap-4">
            
          {list.map((item,index)=>{
            return(
                <div key={index} className="flex flex-col w-[240px] h-[140px] justify-center bg-blue-50 rounded-xl m-20 flex-wrap ">
                <Link to={`/Details/${item.author}`} state={{ props: item }} >
                  <p className="text-xl font-bold m-2">{item.author.substring(0,16)} </p>
                  <p className="text-md    m-2">{item.title.substring(0,20)} </p>
                  </Link>
                  <Icons2  title={item.title} author={item.author} lines={item.lines} />

                  </div>

            )
          })}
          </div>
            </div>
        )
      }

        </div>
    )
}
export default FavoriteList