import { connect } from 'react-redux'
import Actions from '../actions/todo'
import TodoList from '../components/list'

const getTodoItems = (todos, filter) => {
    switch (filter) {
        case "DONE":
            return todos.filter(t => t.status)

        case "NOT_DONE":
            return todos.filter(t => !t.status)

        case "ALL":
        default:
            return todos
    }
}

const mapStateToProps = (state) => ({
    todos: getTodoItems(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => ({
    changeStatus: (id) => dispatch(Actions.changeStatus(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
