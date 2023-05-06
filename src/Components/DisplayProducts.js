import React, { Component } from 'react';
import Products from './Products';
import Popup from './Popup';

class DisplayProducts extends Component {

    constructor(props) {
      super(props);
    
      this.state = {
         cards: Products,
         arr: []
      }
    }

    AboutProduct(val){
      this.props.AboutProduct(val)
    }

    AddProduct(obj){
      let a = this.state.arr.slice();
      a.push(obj);
      this.setState({
        arr : a,
      })
    }

    EmptyArr = (val) => {
      this.setState({
        arr : val
      })
    }
    

  render() {
    let card = this.state.cards.map((values) => {
        if (values.Category.includes(this.props.status)) {
            return (
               <div key= {values.id} className='cards' onClick={() => {this.AboutProduct("show");this.AddProduct(values)}} >
                  <img src = {values.Product} alt='product-img' />
                  <h2>{values.Name}</h2>
               </div> 
            )
        }else{
          return null;
        }
    })
    return (
      <>
      <div className='flex-jcsb content'>
      <div className='whole-cards'>
        <div className='flex-wrap mt10'>{card}</div>
      </div>
      </div>
      <Popup showPopup = {this.props.showPopup} hidePopup = {this.props.hidePopup} arr= {this.state.arr} EmptyArr = {this.EmptyArr} />
      </>
    )
  }
}

export default DisplayProducts
