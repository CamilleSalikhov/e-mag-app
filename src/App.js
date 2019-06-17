import React, { Component } from 'react';
 import './App.css';
 import AllItems from './components/AllItems';
 import {items} from './items'
 

export default class App extends Component {

  state = {
    allItems: items
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        Стройматериалы
        </header>
        <AllItems items = {this.state.allItems} />
      </div>
    )
  }
}
