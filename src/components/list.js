import React from "react"

import ListItem from "./list-item.js"

class List extends React.Component {

    render() {
        console.log(this.props.todos);
        return (
            <ul>
                {
                    this.props.todos.map(i => (
                        <ListItem
                        key={i.id}
                        id={i.id}
                        status={i.status}
                        text={i.text}
                        onChange={() => this.props.changeStatus(i.id)} />
                    ))
                }
            </ul>
        )
    }
}

export default List