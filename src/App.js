
import { Routes, Route} from "react-router-dom";
import { useEffect, useState } from 'react';
import Details from "./Pages/Details";
import Home from "./Pages/Home";
import "./App.css"
const App=()=>{


  return(
    <div>
  
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Details/:id" element={<Details />} />
      </Routes>
    </div>
  )
}
export default App