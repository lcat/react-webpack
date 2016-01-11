import React from 'react';
import ReactDOM from 'react-dom';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.inStockOnlyInput.checked
    )
  }
  render() {
    return (
      <form>
        <input 
          type="text" 
          placeholder="Search.." 
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange} />
        <p>
          <input 
            type="checkbox" 
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange} />
          {' '}
          only show products in stock
        </p>
      </form>
    )
  }
}