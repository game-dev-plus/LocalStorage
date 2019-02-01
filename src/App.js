import React, { Component } from 'react';
import Item from '../src/components/Item';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      items:[1,2,3]
    }
  }
  numSort=(a,b)=>{
    if (a<b) {
      return -1;
    }
    else if (b<a) {
      return 1;
    } else {
      return 0;
    }
  }
  addNum=(ev)=>{
    ev.preventDefault();
    let _items = this.state.items.sort(this.numSort);
    let max = Math.max(..._items)+1;
    _items.push(max);
    this.setState({items:_items});
  }
  addElements=(num)=>{
    let _items = this.state.items;
    _items.push(num);
    _items =Array.from(new Set(_items)).sort(this.numSort);
    this.setState({items:_items});
  }
  componentDidMount(){
    let _items = localStorage.getItem('numbers');
    if (_items) {
      _items=JSON.parse(_items);
      _items.forEach(this.addElements);
    }
  }
  render() {
    return (
      <div className="App">
        <p>
          <button onClick={this.addNum}>Add An Item</button>
        </p>
        {
          this.state.items && this.state.items.map((item)=>(
            <Item key={item} num={item}/>
          ))
        }
      </div>
    );
  }
}

export default App;
