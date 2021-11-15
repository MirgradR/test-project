import { todosApi } from "../api/api"
import { sortR } from "../Common/sort"

const SET_TODOS = 'SET-TODOS'
const SET_COUNT_TODOS = 'SET-COUNT-TODOS'
const SEARCH_TODO = 'SEARCH-TODO'
const SORT_TITLE = 'SORT-TITLE'
const SORT_ID = 'SORT-ID'
const SORT_PROGRESS = 'SORT-PROGRESS'

const initialState = {
    searchValue: '',
    countTodos: 200,
    maxElements: 20,
    todos: [
        {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        },
        {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
        },
    ]
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS:
            return{
                ...state, todos: action.payload
            }
        case SET_COUNT_TODOS:
            return {
                ...state, countTodos: action.payload
            }
        case SEARCH_TODO:
            return {
                ...state, searchValue: action.payload
            }
        case SORT_ID:
            return {
                ...state, todos: state.todos.sort((a, b) => {
                    return action.payload ? a.id - b.id : b.id - a.id
                })
            }
        case SORT_TITLE:
            return {
                ...state, todos: sortR(state.todos, action.payload, 'title')
            }
        case SORT_PROGRESS:
            return {
                ...state, todos: sortR(state.todos, action.payload, 'completed')
            }
        default:
            return state
    }
}

const setTodosActionCreator = (todos, max = 20, min = 1) => {
    return {
        type: SET_TODOS,
        payload: todos.filter(el => el.id <= max && el.id >= min)
    }
}

const setCountTodos = (count) => {
    return {
        type: SET_COUNT_TODOS,
        payload: count
    }
}

export const searchTodoActionCreator = (value) => {
    return {
        type: SEARCH_TODO,
        payload: value
    }
}
export const sortId = (direction) => {
    return {
        type: SORT_ID,
        payload: direction
    }
}
export const sortTitle = (direction) => {
    return {
        type: SORT_TITLE,
        payload: direction
    }
}
export const sortProgress = (direction) => {
    return {
        type: SORT_PROGRESS,
        payload: direction
    }
}

export const getTodosThunkCreator = (max, min) => {
    return async (dispatch) => {
        const response = await todosApi.getTodos()
        dispatch(setTodosActionCreator(response, max, min))
        dispatch(setCountTodos(response.length))
    }
}
