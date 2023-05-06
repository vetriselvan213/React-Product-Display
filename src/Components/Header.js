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
    <header className="flexgroup">
        <h1>My $hop</h1>
        <nav ref={this.navRef} >
          <a href="/#"
            onClick={() => {
              this.DisplayCategory("all");
            }}
          >
            All Products
          </a>
          <a href="/#"
            onClick={() => {
              this.DisplayCategory("all,mobiles");
            }}
          >
            Mobile
          </a>
          <a href="/#"
            onClick={() => {
              this.DisplayCategory("all,tablets");
            }}
          >
            Tablet
          </a>
          <a href="/#"
            onClick={() => {
              this.DisplayCategory("all,laptops");
            }}
          >
            Laptop
          </a>
          <a href="/#"
            onClick={() => {
              this.DisplayCategory("all,headphones");
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
    </header>
    );
  }
}

export default Header;
