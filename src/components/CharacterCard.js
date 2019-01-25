import React, {Component} from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import Gryff from '../images/gryff.png';
import Huff from '../images/huff.png';
import Slyth from '../images/slyth.png';
import Raven from '../images/raven.png';

class CharacterCard extends Component {
  houseOrNot(){
    const {item} =this.props;
    let house = (item.house !== "No house")? item.house : "No house";
    return house;
  }

  whichHouse(){
    const {item} = this.props;
    if(item.house !== ""){
      if(item.house === "Hufflepuff"){
        return(
            <img className="list__house-icon" src={Huff} alt="Hufflepuff colors"/>
        )
      } else if(item.house === "Gryffindor"){
        return(
            <img className="list__house-icon" src={Gryff} alt="Gryffindor colors"/>
        )
      } else if(item.house === "Slytherin"){
        return( 
          <img className="list__house-icon" src={Slyth} alt="Slytherin colors"/>
        )
      } else if(item.house === "Ravenclaw"){
        return(
          <img src={Raven} alt="Ravenclaw colors" className="list__house-icon"/>
        );
      }
    }  
  }
  
  render() {
    const {item} =this.props;
    return ( 
      <div className="hp__list-card">
        <div className="list-card-imagebox">
          <img src={item.image} alt={item.name} className="list__card-image"></img>
          {this.whichHouse()}
        </div>
        <div className="list__card-databox">
          <h2 className="list__card-name">{item.name}</h2>
          <p className="list__card-house">{this.houseOrNot()}</p>
          
            <Link to={`/character/${item.id}`} style={{textDecoration:"none", color:"inherit"}}>
            <div className="hp-list-link">See more</div>
            </Link> 
        </div>  
      </div>    
    );
  }
}

CharacterCard.propTypes ={
  item : PropTypes.object.isRequired, 
}

export default CharacterCard;