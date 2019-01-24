import React, {Component} from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

class CharacterList extends Component {
  
  render() {
    const {filteredList} = this.props;
    return (
      <div className="hp__container">
        <ul className="hp__list">
          {filteredList.map(item =>{ 
            return(
              <li className="hp__list-item" key={item.id} id={item.id} onClick={this.props.characterSelection}>
                <CharacterCard item={item}/>
                <div className="hp-list-btn">
                  <Link to={`/character/${item.id}`}>See more</Link>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

CharacterList.propTypes ={
  filteredList : PropTypes.array.isRequired, 
}

export default CharacterList;