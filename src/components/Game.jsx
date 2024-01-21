import { useEffect } from "react"
import { useNavigate } from "react-router-dom"




const Game = props => {
    const navigate = useNavigate()
    useEffect(() => {
        // если хоть 1 ноль

        // проверка количиства ошибок
        if (props.mistakes >= props.totelMistakes) {
            navigate("/lose")
        }

        for (const tr of props.matrix) {
            if (tr.includes(0)){
                return
            }
        }
        props.nextlevel()
        navigate("/won")
    }, [props.mistakes, props.totelMistakes, props.matrix, navigate])
    const matrix = props.matrix.map((tr, trIndex) => {
        return (
            <tr key={trIndex} >
                {
                    tr.map((td, tdIndex) => {
                        return (
                            <td key={tdIndex}
                                onClick={() => props.changeCoords(trIndex, tdIndex)}
                                className={
                                    trIndex === props.coords[0] && tdIndex === props.coords[1]
                                        ?
                                        "cell cell-active"
                                        :
                                        "cell"
                                }>
                                {td || ""}
                            </td>
                        )
                    })
                }
            </tr>
        )
    })
    const values = props.values.map(value => {
        return (
            <li
                key={value}
                className='cell'
                onClick={event => props.changeValue(value)}>
                {value}
            </li>
        )
    })
    return (
        <div className='container d-flex min-vh-100'>
            <table className='sudoku'>
                <tbody>
                    {matrix}
                </tbody>
            </table>
            <ul className='d-flex'>
                {values}
            </ul>
            <div className='mistakes'>Ошибки: {props.mistakes} / {props.totelMistakes}</div>
        </div>
    )

}

export default Game



