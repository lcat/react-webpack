import React from 'react';

import Header from './header.js';
import Footer from './footer.js';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    var allTodos = {};
    return (
      <div>
        <Header />

        <Footer allTodos={allTodos} />
      </div>
    )
  }
}

export default TodoApp;