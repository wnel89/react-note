import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.data !== nextProps.data;
    // } // data 값이 바뀔 때만 리렌더링 하라

    render() {
        const { data, onToggle, onRemove, onEditingUpdate, onTextChange, onTextUpdate } = this.props;

        const todoList = data.map(
            ({id, text, checked, editing}) => (
                <TodoItem
                data={data}
                id={id}
                text={text}
                checked={checked}
                editing={editing}
                onToggle={onToggle}
                onRemove={onRemove}
                onEditingUpdate={onEditingUpdate}
                onTextChange={onTextChange}
                onTextUpdate={onTextUpdate}
                key={id}
                /> // TodoItem 컴포넌트를 한 이유는 map으로 배열을 출력할 때 해당하는 정보를 TodoItem 컴포넌트로 전달하여 보여주기 위함
            )
        ) // data.map으로 만든 배열들이 todoList

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;