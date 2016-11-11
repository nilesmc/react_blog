import React from "react"
import Input from "./Inputs"

export default class LinkInput extends React.Component {
  constructor(props) {
    super(props);
    this.updateLink = this.updateLink.bind(this);
  }

  updateLink(e){
    debugger
    const data = e.target.value;
    const field = this.props.inputfield;
    this.props.updatepost(data, field);
  }

  render(){
    let link = this.props.linkdata;
    let index = this.props.index;
    return (
      <div key={index} >
        <label>Link Text</label>
        <Input inputdata={link.link_text} updatepost={this.props.updateLink(link, index)} />
        <label>Link</label>
        <Input inputdata={link.link} updatepost={this.props.updateLink(link, index)} />
      </div>
    );
  }
}
