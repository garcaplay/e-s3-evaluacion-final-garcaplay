import React, {Component} from "react";
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import ErrorPage from './ErrorPage';

class CharacterList extends Component {

  filterExist(){
    const {filteredList} = this.props;
    if(filteredList.length < 1){
      return (
        <ErrorPage/>)
    } else{
      return(
        filteredList.map(item =>{ 
          return(
            <li className="hp__list-item" key={item.id} id={item.id} onClick={this.props.characterSelection}>
              <CharacterCard item={item}/>
            </li>
          )
        })
      )
    }
  }
  
  render() {
    
    return (
      <div className="hp__container">
        <ul className="hp__list">
          {this.filterExist()}
        </ul>
      </div>
    );
  }
}

CharacterList.propTypes ={
  filteredList : PropTypes.array.isRequired, 
}

export default CharacterList;