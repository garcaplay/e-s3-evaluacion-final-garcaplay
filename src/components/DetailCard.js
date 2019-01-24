import React, {Component, Fragment} from "react";

class DetailCard extends Component {

  isCharacterAlive(){
    const {selectedCharacter, characters} = this.props;
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
    const {selectedCharacter, characters} = this.props;
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
      <Fragment>
      {this.isCharacterSelected()}
      </Fragment>
    );
  }
}

export default DetailCard;