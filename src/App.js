import React, { Component, Fragment } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.scss';
import CharacterList from './components/CharacterList';
import Filter from './components/Filters';
import DetailCard from './components/DetailCard';
import {getCharacters} from './services/CharacterService';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      characters : [],
      nameFilter: "",
      selectedCharacter: ""
    };
    this.getNameFilter = this.getNameFilter.bind(this);
    this.characterSelection = this.characterSelection.bind(this);
    
  }

  componentDidMount(){
    this.getSavedCharacters()
  }

  getCharacters(){
      getCharacters()
      .then(data =>{
        const newCharacters = data.map((item, index) =>{
          return {...item, id: index}
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
    if(localStorage.getItem('savedCharacters') !==null){
      const mySavedCharacters = JSON.parse(localStorage.getItem('savedCharacters'));
      this.setState({
        characters: mySavedCharacters
      })
    } else{
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
    const {characters, nameFilter} = this.state;
    return characters.filter(item => item.name.toLowerCase().includes(nameFilter.toLowerCase()))
  }

  characterSelection(e){
    let characterID = e.currentTarget.id;
    this.setState({
      selectedCharacter : characterID
    })
  }


  render() {
  
    return (
      <div className="app">
        <div className="hp__page">
        <header className="hp__header">
          <h2 className="hp__header-title">Harry Potter Characters</h2>
        </header>
        <main className="hp__main">
          <Switch>
            <Route exact path="/" render={()=>(
              <Fragment>
                <Filter getNameFilter={this.getNameFilter}/>
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
