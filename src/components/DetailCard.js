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
    if(selectedCharacter === ""){
      return "No hay datos"
    }else{
      return(<div className="hp__detail-card">
      <img src={characters[selectedCharacter].image} alt={characters[selectedCharacter].name}></img>
      <h2 className="hp__detail-name">Name: {characters[selectedCharacter].name}</h2>
      <p className="hp__detail-house">House: {characters[selectedCharacter].house}</p>
      <p className="hp__detail-born">Born: {characters[selectedCharacter].yearOfBirth}</p>
      <p className="hp__detail-patronus">Patronus: {characters[selectedCharacter].patronus}</p>
      <p className="hp__detail-status">State: {this.isCharacterAlive()}</p>
    </div>)
    }
  }
  
  render() {
    return (
      
      <div className="hp__detail">
        {this.isCharacterSelected()}
        <div className="hp-detail-btn">
          <Link to="/">Go back</Link>
        </div>
      </div>
      
    );
  }
}

DetailCard.propTypes ={
  selectedCharacter : PropTypes.string.isRequired,
  characters: PropTypes.array.isRequired
}

export default DetailCard;