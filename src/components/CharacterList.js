import React, {Component, Fragment} from "react";
import CharacterCard from './CharacterCard';

class CharacterList extends Component {
  
  render() {
    const {filteredList} = this.props;
    return (
      <Fragment>
      {filteredList.map(item =>{ 
        return(
          <li className="hp__list-item" key={item.id} id={item.id} onClick={this.props.characterSelection}>
            <CharacterCard item={item}/>
          </li>
        )
      })}
      </Fragment>
    );
  }
}

export default CharacterList;