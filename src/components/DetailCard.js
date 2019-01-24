import React, {Component} from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class DetailCard extends Component {

  isCharacterAlive(){
    const {characters} = this.props;
    const selectedCharacter = this.props.match.params.id;
    let aliveOrDead = "";
    if(characters[selectedCharacter].alive === true){
      aliveOrDead = "ALIVE"
      return aliveOrDead;
    } else {
      aliveOrDead = "DEAD"
      return aliveOrDead;
    }
  }

  isCharacterSelected(){
    const {characters} = this.props;
    const selectedCharacter = this.props.match.params.id;
    if(characters.length < 1){
      return "No hay datos"
    }else{
      return(<div className="hp__detail-card">
      <div className="detail__card-imagebox">
        <img src={characters[selectedCharacter].image} alt={characters[selectedCharacter].name} className="detail__card-image"></img>
      </div>
      <div className="detail__card-databox">
        <h2 className="detail__card-name">Name: {characters[selectedCharacter].name}</h2>
        <p className="detail__card-house">House: {characters[selectedCharacter].house}</p>
        <p className="detail__card-born">Born: {characters[selectedCharacter].yearOfBirth}</p>
        <p className="detail__card-patronus">Patronus: {characters[selectedCharacter].patronus}</p>
        <p className="detail__card-status">State: {this.isCharacterAlive()}</p>
        <div className="hp-detail-link">
          <Link to="/" style={{textDecoration:"none", color:"inherit"}}>Go back</Link>
        </div>
      </div>
      
      </div>)
    }
  }
  
  render() {
    return (
      
      <div className="hp__detail">
        {this.isCharacterSelected()}
      </div>
      
    );
  }
}

DetailCard.propTypes ={
  selectedCharacter : PropTypes.string.isRequired,
  characters: PropTypes.array.isRequired
}

export default DetailCard;