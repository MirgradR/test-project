import { connect } from "react-redux"
import { getTodosThunkCreator, searchTodoActionCreator, sortId, sortProgress, sortTitle } from "../redux/todoReducer"
import Table from "./Table/Table"
import TableForm from "./TableForm/TableForm"

const ListTodos = (props) => {
    
    return (
        <> 
            <TableForm getTodos = {props.getTodos} searchTodo = {props.searchTodo} searchValue = {props.todos.searchValue} count = {props.todos.countTodos} maxEl = {props.todos.maxElements}/>
            <Table todos={props.todos.todos} getTodos = {props.getTodos} searchValue = {props.todos.searchValue} sortId = {props.sortId} sortTitle = {props.sortTitle} sortProgress = {props.sortProgress}/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const ListTodosContainer = connect(mapStateToProps, {getTodos: getTodosThunkCreator, searchTodo: searchTodoActionCreator, sortTitle: sortTitle, sortId: sortId, sortProgress: sortProgress}) (ListTodos)

export default ListTodosContainer