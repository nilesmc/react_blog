import React from "react"
import logo from '../logo.svg';

const Header = ({headerData}) => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h2>{headerData}</h2>
  </div>
);

Header.propTypes = {
  headerData: React.PropTypes.string.isRequired
}

export default Header