import React from 'react';
import TodoTextInput from './todoTextInput.js';

class Header extends React.Component {

  _onSave(text) {

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