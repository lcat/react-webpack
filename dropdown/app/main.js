import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './dropdown.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Dropdown 
          btnText={this.props.dropdownBtn}
          items={this.props.dropdownItems} />
      </div>
    )
  }
}

App.defaultProps = {
  dropdownBtn: 'Browsers',
  dropdownItems: [
    'Firefox',
    'Chrome',
    'Safari',
    'Opera',
    'Internet Expoler'
  ]
}

main();

function main() {
  ReactDOM.render(<App />, document.getElementById('app'));
}