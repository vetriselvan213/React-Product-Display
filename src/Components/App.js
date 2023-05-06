import React, { Component } from 'react';
import Header from './Header';
import DisplayProducts from './DisplayProducts';

class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
       status: "all",
       showPopup : ""
    }
  }
  
  DisplayCategory = (value) => {
    this.setState (
      {
        status : value
      }
    );
  }

  AboutProduct = (val) => {
    this.setState({
      showPopup : val
  })
  }

  hidePopup = (val) => {
    this.setState({
      showPopup : val
    })
  }

  render() {
    return (
      <div>
        <Header DisplayCategory = {this.DisplayCategory} />
        <DisplayProducts status = {this.state.status} AboutProduct = {this.AboutProduct} showPopup = {this.state.showPopup} hidePopup = {this.hidePopup} />
      </div>
    )
  }
}

export default App;

