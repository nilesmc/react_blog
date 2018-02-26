import React from "react"

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(e){
    const data = e.target.value;
    const field = this.props.inputField;
    this.props.updatePost(data, field);
  }

  render(){
    return this.props.inputField !== 'text' ? (
      <input
        type="text"
        value={this.props.inputData}
        onChange={this.updateInput}
      />
    ) : (
      <textarea
        value={this.props.inputData}
        onChange={this.updateInput}
      />
    )



    // let input;
    // if (this.props.inputField !== 'text') {
    //   input = (
    //    <input
    //     type="text"
    //     value={this.props.inputData}
    //     onChange={this.updateInput}
    //     />
    //   );
    // } else {
    //   input = (
    //     <textarea
    //       value={this.props.inputData}
    //       onChange={this.updateInput}
    //     />
    //   );
    // }
    // return input;
  }
}

Input.propTypes = {
  inputField: React.PropTypes.string.isRequired,
  inputData: React.PropTypes.string,
  updatePosts: React.PropTypes.func
}

export default Input