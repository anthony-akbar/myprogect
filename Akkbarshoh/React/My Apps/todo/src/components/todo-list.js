import React, {Component} from 'react';
import TodoListItem from "./todo-list-item";


const items = [
    'Learn React.',
    'Build Awesome App.',
]

class TodoList extends Component {
    render() {
        return (
            <ul>
                <li><TodoListItem label="Drink Coffee."/></li>
                <li><TodoListItem label="Build React App." important /></li>
            </ul>
        );
    }
}

export default TodoList;