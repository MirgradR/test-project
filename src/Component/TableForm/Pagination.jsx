import { useEffect } from "react"

const Pagination = (props) => {

    let btns = []
    for (let i = 1; i <= props.count / props.maxEl; i++) {
        btns.push(i)
    }
    const changePage = (e) => {
        e.preventDefault()
        let max = e.target.id * props.maxEl
        let min = e.target.id * props.maxEl - props.maxEl
        props.getTodos(max, min)   
    } 
    useEffect(() => {
        return (
            window.removeEventListener('click', changePage)
        )
    }, [props.count, props.maxEl])
    
    return (
        btns.map(el => {
            return <button onClick = {changePage} id={el} key={el} className={'btn-pagination'}>{el}</button>
        })
    )
}
export default Pagination