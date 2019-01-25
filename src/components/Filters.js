import React, {Component} from "react";
import PropTypes from 'prop-types';

class Filters extends Component {
  render() {
    return (
      <div className="hp__filtersbox">
        <div className="hp__filter">
          <input type="text" className="hp__filter-input" placeholder={`I'm looking for ${this.props.nameFilter}`} onKeyUp={this.props.getNameFilter}></input>
        </div>
        <div className="hp__filter-house">
          <label htmlFor="filter-house">
          <input id="filter-house" type="radio" name="filter-house" value="Gryffindor" onChange={this.props.houseFilter}/>
          Gryffindor
          </label>
          <label htmlFor="filter-house">
          <input id="filter-house" type="radio" name="filter-house" value="Hufflepuff" onChange={this.props.houseFilter}/>
          Hufflepuff
          </label>
          <label htmlFor="filter-house">
          <input id="filter-house" type="radio" name="filter-house" value="Slytherin" onChange={this.props.houseFilter}/>
          Slytherin
          </label>
          <label htmlFor="filter-house">
          <input id="filter-house" type="radio" name="filter-house" value="Ravenclaw" onChange={this.props.houseFilter}/>
          Ravenclaw
          </label>
          <label htmlFor="filter-house">
          <input id="filter-house" type="radio" name="filter-house" value="No house" onChange={this.props.houseFilter}/>
          No house
          </label>
          <label htmlFor="filter-house">
          <input id="filter-house" type="radio" name="filter-house" value="" onChange={this.props.houseFilter}/>
          All results
          </label>
        </div>
      </div>
    );
  }
}

Filters.propTypes ={
  getNameFilter : PropTypes.func,
}

export default Filters;