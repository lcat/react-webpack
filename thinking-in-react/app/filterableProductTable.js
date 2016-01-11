import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchBar.js';
import ProductTable from './productTable.js';

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    }
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  handleUserInput(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    })
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <SearchBar 
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onUserInput={this.handleUserInput} />
        <ProductTable 
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly} />
      </div>
    )
  }
}