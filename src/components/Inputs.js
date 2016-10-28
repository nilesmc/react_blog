import React from "react"

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputData: this.props.inputdata};
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput (){
    debugger
    this.props.updatePost(this.state.postsArr);
  }

  render(){
    return (
      <input
        type="text"
        placeholder="edit me"
        value={this.state.inputdata}
        onChange={this.updateInput}
      />
    );
  }
}
