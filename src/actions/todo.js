let newId = 0;

const addItem = (task, dueDate) => {
    console.log(task);
    return {
        type: "ADD",
        text: task.trim(),
        // dueDate,
        id: newId++
    }
}

const changeStatus = (id) => {
    return {
        type: "CHANGE_STATUS",
        id
    }
}

const applyFilter = (filter) => {
    return {
        type: "APPLY_FILTER",
        filter
    }
}

export default {
    changeStatus,
    applyFilter,
    addItem
}