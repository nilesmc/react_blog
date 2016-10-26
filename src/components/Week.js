import React from "react"
import Link from "./Links";

export default class Week extends React.Component {
  render(){
    let linksObj = this.props.postdata.links;
    const linksMap = linksObj.map((post, idx) => {
      return (<Link key={idx} linkdata={linksObj[idx]}/>);
    })
    return (
      <div className="App-header">
        <h3>{this.props.postdata.subject}</h3>
        <p>{this.props.postdata.text}</p>
        {linksMap}
      </div>
    );
  }
}
