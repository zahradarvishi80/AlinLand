import { useLocation } from "react-router-dom"



const Details=()=>{

const location=useLocation()
    return(
        <div>
           <p>
            {location.state.props.author}
           </p>
           <p>
            {location.state.props.title}
           </p>
           <p>
            {location.state.props.lines}
           </p>
           <p>
            {location.state.props.linecount}
           </p>
        </div>
    )
}
export default Details