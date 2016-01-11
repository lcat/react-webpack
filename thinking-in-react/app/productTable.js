import React from 'react';
import ReactDOM from 'react-dom';
import ProductRow from './productRow.js';
import ProducategoryRow from './productCategoryRow.js';

export default class ProductTable extends React.Component {
  render() {
    var rows = [];
    var lastCategory = null;
    // 大小写敏感。
    this.props.products.forEach(function(product) {
      if (product.name.indexOf(this.props.filterText) < 0 || (!product.stocked && this.props.inStockOnly)) {
          return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProducategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    }.bind(this))

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}