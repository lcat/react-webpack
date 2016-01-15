import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from '../components/todoApp.js';

import '../css/css.css'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <TodoApp />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));