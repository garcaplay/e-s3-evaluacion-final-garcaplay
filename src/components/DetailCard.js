import React, {Component, Fragment} from "react";

class DetailCard extends Component {
  isCharacterSelected(){
    const {selectedCharacter, characters} = this.props;
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
      <Fragment>
      {this.isCharacterSelected()}
      </Fragment>
    );
  }
}

export default DetailCard;