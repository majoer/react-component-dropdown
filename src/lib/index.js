import './index.scss';
import React, { Component } from 'react';

class DropdownComponent extends Component {

  constructor(props) {
    super(props);
    this.dropdownRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.dropdownOpen) {
      this.registerWindowClickListener();
    }
  }

  componentDidUpdate() {
    if (this.props.dropdownOpen) {
      this.registerWindowClickListener();
    } else {
      this.unregisterWindowClickListener();
    }
  }

  componentWillUnmount() {
    this.unregisterWindowClickListener();
  }

  registerWindowClickListener() {
    if (!this.listenerRegistred) {
      this.listenerRegistred = true;
      window.addEventListener('mousedown', this.onWindowClick);
    }
  }

  unregisterWindowClickListener() {
    this.listenerRegistred = false;
    window.removeEventListener('mousedown', this.onWindowClick);
  }

  shouldCloseDropdown(e) {
    if (this.dropdownRef.current && this.props.dropdownOpen) {

      const rect = this.dropdownRef.current.getBoundingClientRect();
      const x = e.clientX;
      const y = e.clientY;

      if (x === 0 && y === 0) {
        // Clicking option tag within rect causes x==y=0. Might be a bug.
        return false;
      }

      const xWithinRect = x < rect.x + rect.width && rect.x < x;
      const yWithinRect = y < rect.y + rect.height && rect.y < y;
      const clickWasWithinRect = xWithinRect && yWithinRect;

      console.log(`(${x}, ${y}) was within rect: ${clickWasWithinRect}`);
      return !clickWasWithinRect;
    }

    return false;
  }

  onWindowClick = (e) => {
    if (this.shouldCloseDropdown(e)) {
      this.props.onOutsideClick();
    }
  }

  render() {
    let dropdownHiddenAttribute = this.props.dropdownOpen ? false : true;
    const contentModifierClass = this.props.hasOwnProperty('noPadding') ? 'dropdown__content--no-padding' : 'dropdown__content--padding';

    return (
      <div className="dropdown" hidden={dropdownHiddenAttribute} ref={this.dropdownRef}>
        <div className={`dropdown__content ${contentModifierClass}`}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export { DropdownComponent };
