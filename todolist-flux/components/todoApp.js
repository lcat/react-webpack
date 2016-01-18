import React from 'react';
import TodoStore from '../stores/todoStore.js';
import Header from './header.js';
import Footer from './footer.js';
import MainSection from './mainSection.js'

function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete()
  }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = getTodoState();

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getTodoState());
  }

  render() {
    var allTodos = {};
    return (
      <div>
        <Header />
        <MainSection 
          allTodos={this.state.allTodos}
          areAllComplete={this.state.areAllComplete} />
        <Footer allTodos={this.state.allTodos} />
      </div>
    )
  }
}

export default TodoApp;