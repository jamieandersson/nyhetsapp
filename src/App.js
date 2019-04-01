import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nyhetslista from './components/Nyhetslista';
import data from './Fuskdata';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {articles: 
      [{urlToImage:"https://source.unsplash.com/random/200x125/?person",title:"Testnyhet 1",
      description:"Beskrivning av den första testen", },

      {urlToImage:"https://source.unsplash.com/random/200x125/?person",title:"Testnyhet 2",
      description:"Beskrivning av den andra testen" }
  
  ]};
  }
  render() {
    return (
      <Nyhetslista minaArtiklar={this.state.articles}/>
    );
  }
}

export default App;
