# React Dropdown

## Install
`npm i -S https://github.com/majoer/react.component.dropdown.git`

## How to use 
```
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
```
