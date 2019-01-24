import React, {Component, Fragment} from "react";

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
      <Fragment>
        <li className="hp__list-item" key={item.id} id={item.id}>
          <div className="hp__list-card">
            <img src={item.image} alt={item.name} className="list-card__image"></img>
            <h2 className="list-card__name">{item.name}</h2>
            <p className="list-card__house">{this.houseOrNot()}</p>
          </div>
        </li>
      </Fragment>
    );
  }
}

export default CharacterCard;