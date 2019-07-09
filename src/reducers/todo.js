import { combineReducers } from 'redux'

const todos = (state = [], action) => {
    if (action.type === "ADD") {
        return [...state, {
            id: action.id,
            text: action.text.trim(),
            creationDate: +new Date(),
            dueDate: +new Date(action.dueDate) || null,
            status: false
        }]

    } else if (action.type === "CHANGE_STATUS") {
        return state.map(i => {
            console.log(i.id === action.id);
            if (i.id === action.id) return {
                ...i,
                status: !i.status,
            }

            return i
        })
    }

    return state
}

const filter = (state = "ALL", action) => {
    if (action.type === "APPLY_FILTER") {
        return {
            filter: action.filter
        }
    }
    return state
}

export default combineReducers({
    todos,
    filter
})