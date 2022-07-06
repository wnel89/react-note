import React, { Component } from 'react';
import TodoListTemlpate from './components/TodoListTemlpate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 3

  state = {
    input: '',
    todos: [
      { id: 0, text: '리액트 소개', checked: false, editing: false },
      { id: 1, text: '리액트 소개', checked: true, editing: false },
      { id: 2, text: '리액트 소개', checked: false, editing: true }
    ]
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    })
  }
  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }
  handleToggle = (id) => {
    const{ todos } = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    // 파라미터로 받은 id를 가지고 몇번째 아이템인지 찾기
    const selected = todos[index]; // 선택한 객체
    const nextTodos = [...todos]; // 배열을 복사

    nextTodos[index] = {

      ...selected,
      checked: !selected.checked
    }
    this.setState({
      todos: nextTodos
    })
  }
  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }
  handleUpdate = (id, data) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(
        todos => id === todos.id
        ? { ...todos, ...data }
        : todos
      )
    })
  }
  handleEditingUpdate = (id, data) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(
        todos => id === todos.id
        ? { ...todos, ...data }
        : todos
      )
    })
  }
  
  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleUpdate
    } = this;

    return (
      <TodoListTemlpate form={(
        <Form
        value={input}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={handleCreate}
        />
      )}>
        <TodoItemList 
        todos={todos} 
        onToggle={handleToggle} 
        onRemove={handleRemove}
        onUpdate={handleUpdate}
        />
      </TodoListTemlpate>
    );
  }
}

export default App;

// TODO 기존 항목 수정
// 1. 연필 클릭
// 2. 기존 텍스트 위치에 input 태그로 변경
// 3. 생성된 input 태그에 기존 value값 넣기
// 4. input 수정(변경된 값을 변수로 갖고 있어야 함)
// 5. 수정한 후 기존 연필 위치에 완료 이미지 추가
// 6. 수정완료시 4번에서 생성된 변수를 부모로 emit
// 7. 부모에서 기존 value값을 갖고 있던 this.state({input})을 변경
// this.setState({
//  todos: [{},{},{~~~~~, text: e.target.value}]
// })