import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class listado extends Component {
  render() {
    return (
      <div className="listado">
        { this.props.children }
      </div>
    )
  }
}

ReactDOM.render(<listado/>, document.getElementById('app'));
