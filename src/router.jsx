import { Route, Routes } from "react-router-dom"
import Won from "./components/Won"
import Lose from "./components/Lose"
import Menu from "./components/Menu"
import GameHOC from "./containers/GameHOC.jsx"

const BaseRouter = () => {
    return(
    <Routes>
        <Route path="/" element={<Menu/>} />
        <Route path="/game" element={<GameHOC/>} />
        <Route path="/lose" element={<Lose/>} />
        <Route path="/won" element={<Won/>} />
    </Routes>

    )
    
}

export default BaseRouter