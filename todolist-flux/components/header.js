import React from 'react';
import TodoAction from '../actions/todoAction.js';
import TodoTextInput from './todoTextInput.js';

class Header extends React.Component {

  _onSave(text) {
    TodoAction.create(text);
  }

  render() {
    return (
      <header id="header">
        <h1>todos</h1>
        <TodoTextInput
          id="new-todo"
          placeholder="what needs to be done?"
          onSave={this._onSave} />
      </header>
    )
  }
}

export default Header;