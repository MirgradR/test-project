import axios from "axios"

export const todosApi = {
    getTodos() {
        return axios.get(`https://jsonplaceholder.typicode.com/todos`).then(data => data.data)
    }
} 

