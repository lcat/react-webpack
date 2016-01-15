import React from 'react';

class Footer extends React.Component {

  constructor(props) {
    super(props);

    this._onClearCompletedClick = this._onClearCompletedClick.bind(this);
  }

  _onClearCompletedClick() {

  }

  render() {
    let allTodos = this.props.allTodos;
    let len = Object.keys(allTodos).length;

    // 这里不能直接return;
    if (!len) return null;

    var completedLen = 0;

    for (var key in allTodos) {
      if (allTodos[key].complete) {
        completedLen++;
      }
    }

    let itemLeft = len - completedLen;
    let itemLeftPhrase = itemLeft === 1 ? 'item' : 'items';
    itemLeftPhrase += 'left';

    var clearCompletedButton;
    if (completedLen) {
      clearCompletedButton = 
        <button
          type="button"
          id="clear-completed"
          onClick={this._onClearCompletedClick}>
        clear completed ({completedLen})
        </button>
    }

    return (
      <footer id="footer">
        <span id="todo-count">
          <strong>{itemLeft}</strong>
          {itemLeftPhrase}
        </span>
        {clearCompletedButton}
      </footer>
    )

  }
}
Footer.propTypes = {
  allTodos: React.PropTypes.object.isRequired
}

export default Footer;