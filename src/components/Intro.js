import React from "react"

export default class Intro extends React.Component {
  render(){
    return (
      <p className="App-intro">{this.props.introdata}</p>
    );
  }
}
