import React from 'react';
import TodoItem from './todoItem.js';

class MainSection extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (!Object.keys(this.props.allTodos).length) return null;
    var allTodos = this.props.allTodos;
    var todos = [];

    for (let i in allTodos) {
      todos.push(<TodoItem key={i} todo={allTodos[i]} />)
    }

    return (
      <section id="main">
        <input 
          onChange={this._onToggeleCompleteAll}
          checked={this.props.areAllComplete ? 'checked' : ''}
          type="checkbox" 
          id="toggle-all" />
        <lebel htmlFor="toggle-all">Mark all as</lebel>
      </section>
    )
  }
}

export default MainSection;