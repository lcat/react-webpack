import React from 'react';
import ReactDOM from 'react-dom';

export default class ProductRow extends React.Component {
  render() {
    var name = this.props.product.stocked ? this.props.product.name : <span style={{color: 'red'}}>{this.props.product.name}</span>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    )
  }
}