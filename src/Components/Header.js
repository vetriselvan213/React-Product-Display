import React, { Component } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

class Header extends Component {
  constructor(props) {
    super(props);

    this.navRef = React.createRef()

    this.state = {
        
    };
  }

  showNavbar(){
    this.navRef.current.classList.toggle("active")
  }

  DisplayCategory(value) {
    this.props.DisplayCategory(value);
  }

  render() {
    return (
    <header>
      <div className="flexgroup content">
        <h1>My $hop</h1>
        <nav ref={this.navRef} >
          <a href="/#"
            onClick={() => {
              this.DisplayCategory("all");
              this.showNavbar()
            }}
          >
            All Products
          </a>
          <a href="/#"
            onClick={() => {
              this.DisplayCategory("all,mobiles");
              this.showNavbar()
            }}
          >
            Mobile
          </a>
          <a href="/#"
            onClick={() => {
              this.DisplayCategory("all,tablets");
              this.showNavbar()
            }}
          >
            Tablet
          </a>
          <a href="/#"
            onClick={() => {
              this.DisplayCategory("all,laptops");
              this.showNavbar()
            }}
          >
            Laptop
          </a>
          <a href="/#"
            onClick={() => {
              this.DisplayCategory("all,headphones");
              this.showNavbar()
            }}
          >
            HeadPhone
          </a>
          <button className="nav-btn nav-close-btn" onClick={() => {this.showNavbar()}}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={() => {this.showNavbar()}}>
          <FaBars/>
        </button>
        </div>
    </header>
    );
  }
}

export default Header;
