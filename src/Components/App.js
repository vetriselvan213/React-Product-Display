import React, { Component } from 'react';
import Header from './Header';
import DisplayProducts from './DisplayProducts';

class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
       status: "all",
    }
  }
  
  DisplayCategory = (value) => {
    this.setState (
      {
        status : value
      }
    );
  }

  render() {
    return (
      <div>
        <Header DisplayCategory = {this.DisplayCategory} />
        <DisplayProducts status = {this.state.status} />
      </div>
    )
  }
}

export default App;

