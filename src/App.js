
import { Routes, Route} from "react-router-dom";
import Details from "./Pages/Details";
import Home from "./Pages/Home";
import { ContextProvider } from "./component/Context";
import FavoriteList from "./Pages/FavoritList";
const App=()=>{


  return(
    <ContextProvider>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Details/:id" element={<Details />} />
        <Route path="Favorite" element={<FavoriteList/>} />
      </Routes>
    </ContextProvider>
  )
}
export default App