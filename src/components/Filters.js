import React, {Component} from "react";

class Filters extends Component {
  render() {
    return (
      <input type="text" className="hp__filter-input" placeholder="Who are you looking for?" onKeyUp={this.props.getNameFilter}></input>
    );
  }
}

export default Filters;