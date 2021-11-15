import TableElements from "./TableElement/TableElement"
import './Table.css'
import { useEffect, useState } from "react"

const Table = (props) => {
    const [sortId, setSortId] = useState(false)
    const [sortTitle, setSortTitle] = useState(false)
    const [sortProgress, setSortProgress] = useState(false)

    const sortIdClick = (e) => {
        e.preventDefault()
        setSortId(!sortId)
        props.sortId(sortId)
    }
    const sortTitleClick = (e) => {
        e.preventDefault()
        setSortTitle(!sortTitle)
        props.sortTitle(sortTitle)
        setSortId(true)
    }
    const sortProgressClick = (e) => {
        e.preventDefault()
        setSortProgress(!sortProgress)
        props.sortProgress(sortProgress)
        setSortId(true)
    }
    useEffect(() => {
        props.getTodos()
    }, [props.todo])

    return (
        <div className={'table'}>
            <div className={'table__element table-head'}>
                <div onClick = {sortIdClick} className={'table__head-id'}>ID</div>
                <div onClick = {sortTitleClick} className={'table__head-title'}>TITLE</div>
                <div onClick = {sortProgressClick} className={'table__head-progress'}>PROGRESS</div>
            </div>
            <TableElements todos={props.todos} searchValue = {props.searchValue}/>
        </div>
    )
}

export default Table