
import Icons from "./FavoriteIcone"
import { Link } from "react-router-dom";
const PoemsList=({poems})=>{
    return(
<div className="flex w-auto flex-wrap flex-row   justify-between items-between">
<div className="flex-row w-[100%] flex-wrap justify-between justify-items-center justify-self-auto grid grid-cols-5 gap-4">
{poems.map((item,index)=>{
    return(
        <div key={index} className="flex flex-col -mt-16 w-[240px] h-[120px] bg-blue-50 rounded-xl m-20 flex-wrap ">
          <Link to={`/Details/${item.author}`} state={{ props: item }} >
            <p className="text-xl font-bold m-2">{item.author.substring(0,16)} </p>
            <p className="text-md    m-2">{item.title.substring(0,20)} </p>
            </Link>
            <Icons  title={item.title} author={item.author} lines={item.lines} />

            </div>
    )
})

}

</div>
</div>
    )
}
export default PoemsList


