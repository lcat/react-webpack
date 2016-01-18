import React from 'react';
import TodoActions from '../actions/todoAction.js'
import TodoTetxInput from './todoTextInput.js';
import classNames from 'classnames';

class TodoItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    }

    this._onSave = this._onSave.bind(this);
    this._onToggleComplete = this._onToggleComplete.bind(this);
    this._onDoubleClick = this._onDoubleClick.bind(this);
    this._onDestroyClick = this._onDestroyClick.bind(this);
  }

  _onSave(text) {
    TodoActions.updateText(this.props.todo.id, text);
    this.setState({
      isEditing: false
    })
  }

  _onToggleComplete() {
    TodoActions.toggleComplete(this.props.todo);
  }

  _onDoubleClick() {
    this.setState({
      isEditing: true
    })
  }

  _onDestroyClick() {
    TodoActions.destroy(this.props.todo.id);
  }

  render() {
    let todo = this.props.todo;
    let input;
    if (this.state.isEditing) {
      input = 
        <TodoTetxInput
          className="edit"
          onSave={this._onSave}
          value={todo.text} />
    }

    return (
      <li className={classNames({
        'completed': todo.complete,
        'editing': this.state.isEditing
      })}
      key={todo.id}>
        <div className="view">
          <input 
            type="checkbox" 
            className="toggle"
            checked={todo.complete}
            onChange={this._onToggleComplete} />
          <label onDoubleClick={this._onDoubleClick}>
            {todo.text}
          </label>
          <button className="destroy" onClick={this._onDestroyClick}></button>
        </div>
        {input}
      </li>
    )
  }
}

TodoItem.propTypes = {
  todo: React.PropTypes.object.isRequired
}

export default TodoItem;