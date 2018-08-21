import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DropdownComponent } from './lib/index';
import './index.scss';

class App extends Component {

  state = {
    isDropdownOpen: false
  }

  render() {
    return (
      <div className="app">
        <button onClick={() => this.setState({ isDropdownOpen: !this.state.isDropdownOpen })}>
          Dropdown
        </button>

        <div className="app__dropdown">
          <DropdownComponent dropdownOpen={this.state.isDropdownOpen} onOutsideClick={() => this.setState({ isDropdownOpen: false })}>
            <p>Hei</p>
          </DropdownComponent>
        </div>
      </div>
    );
  }
};


ReactDOM.render(<App />, document.getElementById("index"));
