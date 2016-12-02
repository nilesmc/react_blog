import React from "react"

class Menu extends React.Component{
  showSettings(e) {
    e.preventDefault();
    console.log('you get a cookie');
  }
  render(){
    return (
      <div>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </div>
    );
  }
};

export default Menu;