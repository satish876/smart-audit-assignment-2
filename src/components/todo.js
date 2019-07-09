import React from "react"

import Input from "../containers/input"
import List from "../containers/todo"
import Buttons from "../containers/buttons"

class Todo extends React.Component {
    render() {
        return (
            <div>
                <Input></Input>
                <List></List>
                <Buttons></Buttons>
            </div>
        )
    }
}

export default Todo
