

const Favorite=({list})=>{
const DeleteItem=()=>{

}

    return(
        <>
        {list.map((i)=>{
            return(
                <div>
                    <p> {i.title} </p>
                    <p>{i.author} </p>
                    <button onClick={()=>DeleteItem(i.author)} ></button>
                </div>
            )
        })
        }        </>
    )
}
export default Favorite