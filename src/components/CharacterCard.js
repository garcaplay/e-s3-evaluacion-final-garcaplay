import React, {Component} from "react";
import {Link} from 'react-router-dom';
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
            <div className="list-card-imagebox">
              <img src={item.image} alt={item.name} className="list__card-image"></img>
            </div>
            <div className="list__card-databox">
              <h2 className="list__card-name">{item.name}</h2>
              <p className="list__card-house">{this.houseOrNot()}</p>
              <div className="hp-list-link">
                  <Link to={`/character/${item.id}`} style={{textDecoration:"none", color:"inherit"}}>See more</Link>
                </div>
            </div>
            
          </div>
        
    );
  }
}

CharacterCard.propTypes ={
  item : PropTypes.object.isRequired, 
}

export default CharacterCard;