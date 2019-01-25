import React, {Component} from "react";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import ErrorPage from './ErrorPage';
import Gryff from '../images/gryff.png';
import Huff from '../images/huff.png';
import Slyth from '../images/slyth.png';
import Raven from '../images/raven.png';
import NoPatronus from '../images/learncorn.png';
import NoHouse from '../images/nohouse.png';
import Dead from '../images/dead.png'

class DetailCard extends Component {

  isCharacterAlive(){
    const {characters} = this.props;
    const selectedCharacter = this.props.match.params.id;
    if(characters[selectedCharacter].alive === true){
      return(
        <div className="card__container status__container-alive">
        <p className="detail__card-status">State: ALIVE </p>
        </div>
      );       
    } else {
      return(
        <div className="card__container status__container-dead">
        <p className="detail__card-status">State: DEAD </p> 
        <img className="detail__card-icon status-dead" src={Dead} alt="Deathly Hollows"/>
        </div>
      ); 
    }
  }

  patronusOrNot(){
    const {characters} = this.props;
    const selectedCharacter = this.props.match.params.id;
    if(characters[selectedCharacter].patronus !== ""){
      return(
        <div className="card__container patronus__container-yes">
        <p className="detail__card-patronus">Patronus: {characters[selectedCharacter].patronus}</p>
        </div>
      )
    } else {
      return(
        <div className="card__container patronus__container-nop">
        <p className="detail__card-patronus">Patronus: Nope </p>
        <img className="detail__card-icon patronus-nop" src={NoPatronus} alt="Studying unicorn"/>
        </div>
      )
    }
  }

  whichHouse(){
    const {characters} = this.props;
    const selectedCharacter = this.props.match.params.id;
    if(characters[selectedCharacter].house === ""){
      return(
        <div className="card__container house__container-nop">
        <p className="detail__card-house">House: Nope</p>
        <img className="detail__card-icon house-nop" src={NoHouse} alt="Sorting hat"/>
        </div>
      )
    } else if(characters[selectedCharacter].house === "Hufflepuff"){
      return(
        <div className="card__container house__container-huff">
          <p className="detail__card-house">House: {characters[selectedCharacter].house}</p>
          <img className="detail__card-icon house-huff" src={Huff} alt="Hufflepuff colors"/>
        </div>
      )
    } else if(characters[selectedCharacter].house === "Gryffindor"){
      return(
        <div className="card__container house__container-gryff">
          <p className="detail__card-house">House: {characters[selectedCharacter].house}</p>
          <img className="detail__card-icon house-gryff" src={Gryff} alt="Gryffindor colors"/>
        </div>
      )
    } else if(characters[selectedCharacter].house === "Slytherin"){
      return(
        <div className="card__container house__container-slyth">
          <p className="detail__card-house">House: {characters[selectedCharacter].house}</p>
          <img className="detail__card-icon house-slyth" src={Slyth} alt="Slytherin colors"/>
        </div>
      )
    } else if(characters[selectedCharacter].house === "Ravenclaw"){
      return(
        <div className="card__container house__container-raven">
          <p className="detail__card-house">House: {characters[selectedCharacter].house}</p>
          <img className="detail__card-icon house-raven" src={Raven} alt="Ravenclaw colors"/>
        </div>
      );
    } else {
      return(
        <p className="detail__card-house">House: {characters[selectedCharacter].house}</p>
      )
    }
  }

  yearOfBirth(){
    const {characters} = this.props;
    const selectedCharacter = this.props.match.params.id;
    if(characters[selectedCharacter].yearOfBirth !== ""){
      return(<p className="detail__card-born">Born: {characters[selectedCharacter].yearOfBirth}</p>)
    } else {
      return(<p className="detail__card-born">Born: Unknown</p>)
    }
  }

  isCharacterSelected(){
    const {characters} = this.props;
    const selectedCharacter = this.props.match.params.id;
    if(characters.length < 1){
      return (<ErrorPage/>);
    } else {
      return(
        <div className="hp__detail-card">
          <div className="detail__card-imagebox">
            <img src={characters[selectedCharacter].image} alt={characters[selectedCharacter].name} className="detail__card-image"></img>
          </div>
          <div className="detail__card-databox">
            <h2 className="detail__card-name">{characters[selectedCharacter].name}</h2>
            {this.whichHouse()}
            {this.yearOfBirth()}
            {this.patronusOrNot()}
            {this.isCharacterAlive()}
              <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
              <div className="hp-detail-link">Go back</div>
              </Link>
          </div>
        </div>
      )
    }
  }
  
  render() {
    if(this.props.characters.length < 1 || this.props.match.params.id > this.props.characters.length){
      return (
        <div className="hp__detail">
          <ErrorPage/>
          <Link to="/" style={{textDecoration:"none", color:"white"}}>
            <div className="hp-detail-link">Go back</div>
          </Link>
      </div>);
    }else {
      return (
        <div className="hp__detail">
          {this.isCharacterSelected()}
        </div>
      );
      }
  }
}

DetailCard.propTypes ={
  selectedCharacter : PropTypes.string.isRequired,
  characters: PropTypes.array.isRequired
}

export default DetailCard;