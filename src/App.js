import React, { Component, Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';
import './components/StyleSheets/App.scss';
import CharacterList from './components/CharacterList';
import Filter from './components/Filters';
import DetailCard from './components/DetailCard';
import {getCharactersList} from './services/CharacterService';
import Snitch from './images/snitch.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      characters : [],
      nameFilter: "",
      houseFilter: "",
      selectedCharacter: ""
    };
    this.getNameFilter = this.getNameFilter.bind(this);
    this.getHouseFilter = this.getHouseFilter.bind(this);
    this.characterSelection = this.characterSelection.bind(this);  
  }

  componentDidMount(){
    this.getSavedCharacters()
  }

  getCharacters(){
    getCharactersList()
    .then(data =>{
      const newCharacters = data.map((item, index) =>{
        if(item.house !== ""){
          console.log("im on it")
          return {...item, id: index}
        } else {
          return {...item, house: "No house", id: index}
        }
      })
      this.setState({
        characters: newCharacters
      })
      this.saveCharacters(newCharacters, 'savedCharacters')
    })
  }

  saveCharacters(data, dataName){
    localStorage.setItem(dataName, JSON.stringify(data));
  }

  getSavedCharacters(){
    if(localStorage.getItem('savedCharacters') !== null){
      const mySavedCharacters = JSON.parse(localStorage.getItem('savedCharacters'));
      this.setState({
        characters: mySavedCharacters
      })
    } else {
      this.getCharacters()
    }
  }

  getNameFilter(e){
    const query = e.currentTarget.value;
    this.setState({
      nameFilter: query
    })
  }

  filteredList(){
    const {characters, nameFilter, houseFilter} = this.state;
    const filteredCharacters = characters.filter(item => item.name.toLowerCase().includes(nameFilter.toLowerCase()) && item.house.includes(houseFilter));
    return filteredCharacters;
  }

  characterSelection(e){
    const characterID = e.currentTarget.id;
    this.setState({
      selectedCharacter : characterID
    })
  }

  getHouseFilter(e){
    const query = e.currentTarget.value;
    this.setState({
      houseFilter: query
    })
  }


  render() {
  
    return (
      <div className="app">
        <div className="hp__page">
          <header className="hp__header">
            <h2 className="hp__header-title">Harry P<span><img src={Snitch} alt="o" className="title-img"/></span>tter Characters</h2>
          </header>
          <main className="hp__main">
            <Switch>
              <Route exact path="/" render={()=>(
                <Fragment>
                  <Filter getNameFilter={this.getNameFilter} nameFilter={this.state.nameFilter} houseFilter={this.getHouseFilter}/>
                  <CharacterList characterSelection={this.characterSelection} filteredList={this.filteredList()}/>
                </Fragment>
              )}/>
              <Route path="/character/:id" render={(props) => 
                <DetailCard match={props.match} selectedCharacter={this.state.selectedCharacter} characters={this.state.characters}></DetailCard>}
              />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
