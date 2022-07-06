import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked;
    }

    render() {
        const { text, checked, id, onToggle, onRemove, onUpdate, editing } = this.props;
        console.log(id);
        
        return (
            <div className='todo-item' onClick={() => onToggle(id)}>
                <div className='remove' onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id)
                }}>×</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                    {/* 수정상태에 따라 input 노출 여부 결정 */}
                    {/* {editing === true ? <input value={text} /> : null} */}
                    <input value={text} />
                </div>
                {
                checked && (<div className='check-mark'>✓</div>)
            }
                <div className='update' onClick={(e) => {
                    onUpdate(id)
                }}>🖊</div>
            </div>
        );
    }
}

export default TodoItem;


// const a = 'its work';
// console.log('word : ' + a);     // word : its work
// console.log(`word : ${a}`);     // word : its work
// // if (a && b == 'b')
// `todo-text ${checked && 'checked'}`
// // if checked == true => todo-text checked
// // if checked != true => todo-text 