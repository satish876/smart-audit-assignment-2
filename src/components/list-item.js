import React from "react"

class ListItem extends React.Component {
    render() {
        return (
            <li>
                <input
                    type="checkbox"
                    checked={this.props.status}
                    onChange={this.props.onChange}
                />
                <span>{this.props.text}</span>
            </li>
        )
    }
}

export default ListItem