import React from "react"
import RBN from 'react-burger-nav'

class Menu extends React.Component{

  render(){
    return (
      <RBN>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="login" className="menu-item" href="/login">Login</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </RBN>
    );
  }
};

export default Menu;
