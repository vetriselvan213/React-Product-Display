import React, { Component } from 'react'

export class Popup extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    hidePopup(val) {
        this.props.hidePopup(val);
    }

    EmptyArr(val) {
        this.props.EmptyArr(val)
    }

  render() {
    let htmlString = this.props.arr.map((value) => {
        return (
            <div key={value.id} className='flex'>
                <img src = {value.Product} alt='product-img' />
                <div className='ml20'>
                <h2>{value.Name}</h2>
                <h3>{value.price}</h3>
                <p>{value.Description}</p>
                </div>
            </div>
        )
    })

if(this.props.showPopup === "show"){
    return (
    <>
      <div className='popup'>
        <div className='popup-sec'>
            <p
            className='close-popup'
             onClick={() => {
                this.hidePopup("hide");
                this.EmptyArr([])
            }}>
                X
            </p>
            {htmlString}
        </div>
      </div>
    </>
    )
     } else {
        return null;
     }
  }
}



export default Popup
