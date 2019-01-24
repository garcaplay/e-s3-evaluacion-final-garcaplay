import React, {Component} from "react";
import {Link} from 'react-router-dom';

class DetailCard extends Component {
  isCharacterSelected(){
    const {characters} = this.props;
    const selectedCharacter = this.props.match.params.id;
    if(selectedCharacter === ""){
      return "No hay datos"
    }else{
      return(<div className="hp__detail-card">
      <img src={characters[selectedCharacter].image} alt={characters[selectedCharacter].name}></img>
      <h2 className="hp__detail-name">{characters[selectedCharacter].name}</h2>
      <p className="hp__detail-house">{characters[selectedCharacter].house}</p>
      <p className="hp__detail-born">{characters[selectedCharacter].yearOfBirth}</p>
      <p className="hp__detail-patronus">{characters[selectedCharacter].patronus}</p>
      <p className="hp__detail-status"></p>
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

export default DetailCard;