import React from 'react';
import ReactDOM from 'react-dom';

export default class ProductCategoryRow extends React.Component {
  render() {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    )
  }
}