import React, { Component } from 'react';
import Products from './Products';

class DisplayProducts extends Component {

    constructor(props) {
      super(props);
    
      this.state = {
         cards: Products
      }
    }
    

  render() {
    let card = this.state.cards.map((values) => {
        if (values.Category.includes(this.props.status)) {
            return (
               <div key= {values.id} className='cards'>
                  <img src = {values.Product} alt='product-img' />
                  <h2>{values.Name}</h2>
               </div> 
            )
        }else{
          return null;
        }
    })
    return (
      <div className='flex-jcsb content'>
      <div className='whole-cards'>
        <div className='flex-wrap mt10'>{card}</div>
      </div>
      </div>
    )
  }
}

export default DisplayProducts
