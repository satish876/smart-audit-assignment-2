import React from 'react'
import { connect } from 'react-redux'
import TodoActions from '../actions/todo'

let Todo = ({ dispatch }) => {
    let input = ""

    const handleAddItem = (ev) => {
        ev.preventDefault()
        if (!input.value.trim()) return

        dispatch(TodoActions.addItem(input.value))
        input.value = ""
    }

    return (
        <form onSubmit={handleAddItem}>
            <input ref={node => input = node} />
            <button type="submit">Add item</button>
        </form>
    )
}

export default connect()(Todo)