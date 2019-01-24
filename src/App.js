import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      characters : [],
      nameFilter: ""
    }
    this.getNameFilter = this.getNameFilter.bind(this);
  }

  componentDidMount(){
    this.getSavedCharacters()
  }

  getCharacters(){
    const ENDPOINT = 'http://hp-api.herokuapp.com/api/characters';
    fetch(ENDPOINT)
      .then(res=>res.json())
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

  render() {
  
    return (
      <div className="app">
        <div className="hp__page">
        <header className="hp__header">
          <h2 className="hp__header-title">Harry Potter Characters</h2>
        </header>
        <main className="hp__main">
          <div className="hp__filter">
            <input type="text" className="hp__filter-input" placeholder="Who are you looking for?" onKeyUp={this.getNameFilter}></input>
          </div>
          <div className="hp__container">
            <ul className="hp__list">
              <CharacterList filteredList={this.filteredList()}/>
            </ul>
          </div>
        </main>
        </div>
      </div>
    );
  }
}

export default App;
