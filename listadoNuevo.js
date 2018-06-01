import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class listadoNuevo extends Component {
  render() {
    return (
      <div className="listadonuevo">
        { this.props.children }
      </div>
    )
  }
}

ReactDOM.render(<listadoNuevo/>, document.getElementById('app'));
