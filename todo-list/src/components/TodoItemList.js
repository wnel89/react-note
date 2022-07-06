import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    } // todos의 값이 바뀔 때만 리렌더링 하라

    render() {
        const { todos, onToggle, onRemove, onUpdate } = this.props;

        const todoList = todos.map(
            ({id, text, checked, editing}) => (
                <TodoItem
                id={id}
                text={text}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
                onUpdate={onUpdate}
                key={id}
                editing={editing}
                /> // TodoItem 컴포넌트를 한 이유는 map으로 배열을 출력할 때 해당하는 정보를 TodoItem 컴포넌트로 전달하여 보여주기 위함
            )
        ) // todos.map으로 만든 배열들이 todoList

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;