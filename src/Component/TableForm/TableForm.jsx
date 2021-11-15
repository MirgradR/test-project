import Pagination from './Pagination'
import './TableForm.css'

const TableForm = (props) => {
    
    const searchTodo = (e) => {
        props.searchTodo(e.target.value)
    }

    return (
        <form className={'search-form'}>
            <input onChange = {searchTodo} className={'search-form__input'} value = {props.searchValue} name={'search'} />
            <div>
                <Pagination getTodos = {props.getTodos} count = {props.count} maxEl = {props.maxEl}/>
            </div>
        </form>
    )
}
export default TableForm
