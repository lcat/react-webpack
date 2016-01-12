import React from 'react';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visibile: false
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      visibile: !this.state.visibile
    })
  }

  render() {
    const displayValue = this.state.visibile ? 'block' : 'none';

    return (
      <div className="dropdown">
        <button className="btn btn-default" onClick={this.onClick}>{this.props.btnText}</button>
        <ul className="dropdown-menu" style={{display: displayValue}}>
          {
            this.props.items.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))
          }
        </ul>
      </div>
    ) 
  }
}
Dropdown.propTypes = {
  btnText: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired
}

export default Dropdown;