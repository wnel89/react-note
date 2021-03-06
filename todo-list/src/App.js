import React, { Component } from 'react';
import TodoListTemlpate from './components/TodoListTemlpate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      input: '',
      todos: [
        { id: 0, text: '리액트 소개', checked: false, editing: false },
        { id: 1, text: '리액트 소개', checked: true, editing: false },
        { id: 2, text: '리액트 소개', checked: false, editing: true }
      ]
    };
    this.handleEditingUpdate = this.handleEditingUpdate.bind(this);
  }
  id = 3

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
    console.log('handleChange is running');
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
  handleEditingUpdate = (id) => {
    console.log('handleEditingUpdate start', id);
    const {todos} = this.state;

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const nextTodos = [...todos];
    nextTodos[index] = {
      ...selected,
      editing: !selected.editing
    }

    console.log(nextTodos)
    this.setState({
      todos: [...nextTodos]
    })

  }
  handleTextChange = (e) => {
    console.log('handleTextChange is running');
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }
  handleTextUpdate = (id, data) => {
    console.log("id 확인: " + id);
    console.log("data 확인: " + data);

    const { todos } = this.state;
    console.log(todos);

    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index];
    const newTodos = [...todos];
    newTodos[index] = {
      ...selected,
      text: data
    }
    console.log(newTodos, this.state);
    this.setState({
      todos: newTodos
    })
    console.log(todos);
    

  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleEditingUpdate,
      handleTextChange,
      handleTextUpdate
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
        data={todos} 
        onToggle={handleToggle} 
        onRemove={handleRemove}
        onEditingUpdate={handleEditingUpdate}
        onTextChange={handleTextChange}
        onTextUpdate={handleTextUpdate}
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