import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      characters : ''
    }
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

  render() {

    return (
      <div className="app">
        <div className="hp__page">
        <header className="hp__header">
          <h2 className="hp__header-title">Harry Potter Characters</h2>
        </header>
        <main className="hp__main">
          <div className="hp__filter">
            <input type="text" className="hp__filter-input" placeholder="Who are you looking for?"></input>
          </div>
          <div className="hp__container">
            <ul className="hp__list">
              <li className="hp__list-item">
                <div className="hp__list-card">
                  <img src="" alt="" className="list-card__image"></img>
                  <h2 className="list-card__name"></h2>
                  <p className="list-card__house"></p>
                </div>
              </li>
            </ul>
          </div>
        </main>
        </div>
      </div>
    );
  }
}

export default App;
