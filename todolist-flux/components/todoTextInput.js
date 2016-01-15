import React from 'react';

let ReactPropTypes = React.PropTypes;
let ENTER_KEY_CODE = 13;

class TodoTextInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || ''
    }

    this._save = this._save.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
  }

  _save() {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    })
  }

  _onChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  _onKeyDown(e) {
    // 回车保存
    if (e.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  }

  render() {
    return (
      <input 
        className={this.props.className}
        id={this.props.id}
        placeholder={this.props.placeholder}
        onBlur={this._save}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
        value={this.state.value}
        autoFocus={true}
        type="text" />
    )
  }
}

TodoTextInput.propTypes = {
  className: ReactPropTypes.string,
  id: ReactPropTypes.string,
  placeholder: ReactPropTypes.string,
  onSave: ReactPropTypes.func.isRequired,
  value: ReactPropTypes.string
}

export default TodoTextInput;