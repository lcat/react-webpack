import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from './dropdown.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  changeFn(option) {
    console.log(option);
  }

  render() {
    return (
      <div style={{margin: 20}}>
        <Dropdown 
          btnText={this.props.dropdownBtn}
          items={this.props.dropdownItems}
          onChange={this.changeFn} />
      </div>
    )
  }
}

App.defaultProps = {
  dropdownBtn: 'Browsers',
  dropdownItems: [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    {
      type: 'group', name: 'group1', items: [
        { value: 'three', label: 'Three' },
        { value: 'four', label: 'Four' }
      ]
    },
    {
      type: 'group', name: 'group2', items: [
        { value: 'five', label: 'Five' },
        { value: 'six', label: 'Six' }
      ]
    }
  ]
}

main();

function main() {
  ReactDOM.render(<App />, document.getElementById('app'));
}