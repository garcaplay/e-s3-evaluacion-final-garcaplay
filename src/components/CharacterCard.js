import React, {Component, Fragment} from "react";

class CharacterCard extends Component {
  render() {
    const {item} =this.props;
    
    return (
      <Fragment>
        {if(item.house !== ""){
          return(
          <li className="hp__list-item" key={item.id} id={item.id}>
          <div className="hp__list-card">
            <img src={item.image} alt={item.name} className="list-card__image"></img>
            <h2 className="list-card__name">{item.name}</h2>
            <p className="list-card__house">{item.house}</p>
          </div>
        </li>)  
        } else{
          return (
          <li className="hp__list-item" key={item.id} id={item.id}>
            <div className="hp__list-card">
              <img src={item.image} alt={item.name} className="list-card__image"></img>
              <h2 className="list-card__name">{item.name}</h2>
              <p className="list-card__house">Do not belong to any house</p>
            </div>
          </li>)
        } }
      </Fragment>
    );
  }
}

export default CharacterCard;