import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames'

import '../css/css.css';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibile: false,
      selected: props.value || {
        label: props.placeholder || '请选择',
        value: ''
      }
    }

    this.onBtnClick = this.onBtnClick.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  componentWillReceiveProps(newProps) {

  }

  componentDidMount() {
    // 绑定事件
    document.addEventListener('click', this.handleDocumentClick, false);
  }

  componentWillUnmount() {
    // 移除事件
    document.removeEventListener('click', this.handleDocumentClick, false);
  }

  /**
   * 按钮点击
   */
  onBtnClick() {
    this.setState({
      visibile: !this.state.visibile
    })
  }
  // document 点击，点击空白区域关闭下拉
  handleDocumentClick(event) {
    if (!this.state.visibile) return;
    if (!ReactDOM.findDOMNode(this).contains(event.target)) {
      this.setState({
        visibile: false
      });
    }
  }

  setValue(option) {
    this.setState({
      selected: option
    })
    this.state.visibile = false;
    this.props.onChange && this.props.onChange(option);
  }

  renderOption(option) {
    let optionClass = classNames({
      'ui-dropdown-option': true,
      'is-selected': option === this.state.selected
    });

    return <div key={option.value} className={optionClass} onMouseDown={this.setValue.bind(this, option)} onClick={this.setValue.bind(this, option)}>{option.label}</div>
  }

  parseMenu() {
    let opts = this.props.items.map((item) => {
      if (item.type === 'group') {
        let groupTilte = (<div className="ui-dropdown-group-title">{item.name}</div>);
        let groupOpts = item.items.map((list) => this.renderOption(list));

        return (
          <div className="group" key={item.name}>
            {groupTilte}
            {groupOpts}
          </div>
        )
      }
      else {
        return this.renderOption(item);
      }
    })

    return opts;
  }

  render() {
    const { controlClassName, menuClassName } = this.props;
    const displayValue = this.state.visibile ? 'block' : 'none';
    let dropdownClass = classNames({
      'ui-dropdown': true,
      'ui-dropdown-open': this.state.visibile
    });
    let menu = this.state.visibile ? <div className={menuClassName}>{this.parseMenu()}</div> : null;

    return (
      <span className={dropdownClass}>
        <span className="ui-dropdown-selection" onClick={this.onBtnClick}>{this.state.selected.label}</span>
        <span className="ui-dropdown-arrow"></span>
        {menu}
      </span>
    ) 
  }
}
Dropdown.propTypes = {
  btnText: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired
}
Dropdown.defaultProps = {
  menuClassName: 'ui-dropdown-menu'
}

export default Dropdown;