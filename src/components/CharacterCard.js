import React, {Component} from "react";
import PropTypes from 'prop-types';

class CharacterCard extends Component {
  houseOrNot(){
    const {item} =this.props;
    let house = "";
    if(item.house !== ""){
      house = item.house;
      return house;  
    } else{
      house = "Do not belong to any house";
      return house;
    }
  }
  render() {
    const {item} =this.props;
    return (
        
          <div className="hp__list-card">
            <img src={item.image} alt={item.name} className="list-card__image"></img>
            <h2 className="list-card__name">{item.name}</h2>
            <p className="list-card__house">{this.houseOrNot()}</p>
          </div>
        
    );
  }
}

CharacterCard.propTypes ={
  item : PropTypes.object.isRequired, 
}

export default CharacterCard;