import React, {Component} from "react";
import PropTypes from 'prop-types';

class Filters extends Component {
  render() {
    return (
      <div className="hp__filter">
        <input type="text" className="hp__filter-input" placeholder="Who are you looking for?" onKeyUp={this.props.getNameFilter}></input>
      </div>
    );
  }
}

Filters.propTypes ={
  getNameFilter : PropTypes.func,
}

export default Filters;