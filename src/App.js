import React, { Component } from 'react';
import './App.css';

class App extends Component {
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
