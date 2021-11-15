const TableElements = ({todos, searchValue, sortTitle}) => {
    const renderElements = () => {
        const filterTodos = todos.filter(el => { 
            return el.title.includes(searchValue)
        })
        return filterTodos.map(el => {
            return (<div key = {el.id} className = {'table__element'}>
                <div className = {'table__element-id'}>{el.id}</div>
                <div className = {'table__element-title'}>{el.title}</div>
                <div className = {'table__element-progress'}>{el.completed ? 'Completed' : 'In Process'}</div>
            </div>)
        })
    }

    return (
        <div>
            {renderElements()}
        </div>
    )
}

export default TableElements