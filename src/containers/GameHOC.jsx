import Game from "../components/Game"
import data from "../store/dats"
import { useState } from "react"


const GameHOC = () => {
    const [state, changeState] = useState({
        coords: [0, 0],
        mistakes: data.mistakes,
        values: data.values,
        matrix: JSON.parse(JSON.stringify(data.matrix[data.level][1]))
    })
    const changeCoords = (trIndex, tdIndex) =>{
        changeState({
            ...state,
            coords: [trIndex,tdIndex]
        })
    }
 

    const changeValue =  value => {
        if (state.matrix[state.coords[0]][state.coords[1]] !== 0) {
            return
        }
        const newState = JSON.parse(JSON.stringify(state))
        if(data.matrix[data.level][0][state.coords[0]][state.coords[1]] === +value){
            newState.matrix[state.coords[0]][state.coords[1]] = +value
        }else{
            newState.mistakes++
        }
        changeState(newState)
    }

    const nextlevel = () => {
        data.level = (data.level = 1) % data.matrix.length
        // if (data.level + 1 < data.matrix.length){
        //     data.level++
        // }else{
        //     data.level = 0
        // }
        
    }

    return <Game 
    coords={state.coords}
    changeCoords={changeCoords}
    changeValue={changeValue}
    matrix={state.matrix}
    values={data.values}
    mistakes={state.mistakes} 
    totelMistakes={data.totelMistakes} 
    nextlevel={nextlevel}
    />
}

export default GameHOC
