import Img from "../Json/Imgpoems"

const Imgpoem=()=>{
    return(
        <div className="flex w-[100%] h-[250px] mt-10 flex-row justify-center items-between justify-around">
            {
                Img.map((i,index)=>{
                    return(
                        <div key={i.id} >
                        <img key={index} src={i.img} className="flex w-52 h-52 shadow-xl mt-5 hover:w-56  hover:h-56 hover:border-2 hover:border-blue-100 rounded-full"/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Imgpoem