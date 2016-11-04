import React from "react"

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(e){
    const data = e.target.value;
    const field = this.props.inputfield;
    this.props.updatepost(data, field);
  }

  render(){
    return (
      <input
        type="text"
        value={this.props.inputdata}
        onChange={this.updateInput}
      />
    );
  }
}
