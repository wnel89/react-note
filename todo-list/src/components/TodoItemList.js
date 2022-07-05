import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    } // todos의 값이 바뀔 때만 리렌더링 하라

    render() {
        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map(
            ({id, text, checked}) => (
                <TodoItem
                id={id}
                text={text}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
                key={id}
                />
            )
        )

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;