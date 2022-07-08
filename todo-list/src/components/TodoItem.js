import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            currentText: this.props.text
        }

        this.handleChange = this.handleChange.bind(this);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return this.props.checked !== nextProps.checked || this.props.editing !== nextProps.editing;
    //     // checked 혹은 editing 값이 바뀌었을 때 컴포넌트를 업데이트하라
    // }

    

    handleChange = (e) => {
        this.setState({
            currentText: e.target.value,
        });
        // console.log('handleChange is running');
    };
      
    handleToggleChange = () => {
    const { editing, currentText } = this.state;
    const { id, onTextUpdate } = this.props;

    // false -> true
    if (!editing) {
        this.setState({
            editing: true,
        });
    } else {
        onTextUpdate( id, currentText );
        this.setState({
            editing: false,
        });
    }
    // ture -> false
    };
    
    render() {
        const { text, id, checked, onToggle, onRemove, onEditingUpdate } = this.props;
        // const { editing, text, id, checked } = this.state;
        const { editing, currentText } = this.state;
        console.log(currentText + ' 렌더링 확인용');
        
        return (
            <div className='todo-item' onClick={() => onToggle(id)}>
                <div className='remove' onClick={(e) => {
                    e.stopPropagation();
                    onRemove(id)
                }}>×</div>
                {/* // 제거 버튼 위치 */}
                <div className={`todo-text ${checked && 'checked'}`}>
                    {/* editng 상태에 따라 input이 보일지 text가 보일지 결정 */}
                    {editing === true 
                        ? (<input
                        type="text"
                        name="text"
                        onChange={this.handleChange}
                        value={currentText}
                        onClick={(e) => { e.stopPropagation(); }}
                        ></input>) 
                        : (<div>{text}</div>)
                    }
                </div>
                { checked && (<div className='check-mark'>✓</div>) }
                {/* // checked 상태에 따라 체크 표시 여부 */}
                <div className='update' onClick={(e) => {
                    e.stopPropagation();
                    // onEditingUpdate(id);
                    // this.forceUpdate() : 최후의 수단으로 강제 리렌더링
                }}> 
                    <button className='editButton' onClick={this.handleToggleChange}>
                        {editing ? '완료' : '수정' }
                    </button>
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