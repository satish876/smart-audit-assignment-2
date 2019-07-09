import React from 'react'
import { connect } from 'react-redux'
import TodoActions from '../actions/todo'

let Buttons = ({ dispatch }) => {

    return (
        <div>
            {/* <button onClick={TodoActions.sortTodos()}>Sort</button> */}
            <button onClick={() => TodoActions.applyFilter("ALL")}>Show all</button>
            <button onClick={() => TodoActions.applyFilter("DONE")}>Done</button>
            <button onClick={() => TodoActions.applyFilter("NOT_DONE")}>Not done</button>
        </div>
    )
}

export default connect()(Buttons)