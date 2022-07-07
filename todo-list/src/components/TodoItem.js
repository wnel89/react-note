import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.checked !== nextProps.checked || this.props.editing !== nextProps.editing;
        // checked 혹은 editing 값이 바뀌었을 때 컴포넌트를 업데이트하라
    }

    state = {
        editing: false,
        text: ''
    }

    componentDidUpdate(prevProps, prevState) {
        const { todos, onTextUpdate } = this.props;
        if (prevProps.editing === true && this.state.editing === false) {
            // editing이 true에서 false로 전환되면
            onTextUpdate(this.props.id, {
                text: this.state.text
            })
            console.log(this.props.id, this.state.editing)
        }
    }
    render() {
        const { 
            text, 
            checked, 
            id, 
            editing, 
            onToggle, 
            onRemove, 
            onEditingUpdate, 
            onTextChange 
        } = this.props;

        
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
                    {editing === true 
                    ? <input 
                        value={this.state.text}
                        name="text"
                        placeholder='할 일을 수정하세요.'
                        onChange={onTextChange}
                        onClick={(e) => { e.stopPropagation(); }}
                        /> 
                        : null}
                </div>
                {
                    checked && (<div className='check-mark'>✓</div>)
                }
                <div className='update' onClick={(e) => {
                    e.stopPropagation();
                    onEditingUpdate(id)
                    // this.forceUpdate() : 최후의 수단으로 강제 리렌더링
                }}> 
                {editing === true
                ? <button className='editButton'>완료</button>
                : <button className='editButton'>수정</button>
                }
                </div>
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