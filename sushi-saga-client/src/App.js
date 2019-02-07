import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushis: [],
    startIndex: 0,
    bank: 106
    // eatenSushis: []
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushis => this.setState({
      allSushis: sushis
    }))
  }

  updateSushis = (id, price) => {
    if(this.state.bank-price >= 0 ){
      this.setState({
        allSushis: this.state.allSushis.map(sushi => 
         {
           if(sushi.id === id){
            return {...sushi, eaten: true}
          }
          else{
            return sushi
          }
        }
        ),
        bank: this.state.bank-price
      })
    }
    else{
      alert("Not Till Wash Dishes")
    }
    
  }


  moreSushis = () => {
    this.setState({
      startIndex: this.state.startIndex+4
    })
  }

  grabSushis = () => {
    return this.state.allSushis.slice(this.state.startIndex, this.state.startIndex+4)
  }

  render() {
    let eatenSushi = this.state.allSushis.filter(sushi =>  sushi.eaten === true)

    // let eatenSushi = this.state.allSushis.filter(sushi =>  sushi.eaten) //another way
    //   console.log(eatenSushi)
    return (
      <div className="app">
        <SushiContainer sushis={this.grabSushis()}  moreSushis={this.moreSushis} eatSushi={this.updateSushis}/>
        <Table sushiPlate={eatenSushi} bank={this.state.bank}/>
      </div>
    );
  }
}

export default App;