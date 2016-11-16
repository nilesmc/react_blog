import React from "react"

export default class LinkInput extends React.Component {
  constructor(props) {
    super(props);
    this.updateLink = this.updateLink.bind(this);
  }

  updateLink(e){
    e.preventDefault();
    let data = e.target.value;
    let field = e.target.dataset.linkpart;
    let idx = this.props.linkIdx;
    this.props.updatePost(data, field, idx);
  }

  render(){
    let link = this.props.linkData;
    let index = this.props.index;
    return (
      <div key={index} >
        <label>Link Text</label>
        <input
          type="text"
          data-linkpart={'link_text'}
          value={link.link_text}
          onChange={this.updateLink.bind(this)}
        />
        <label>Link</label>
        <input
          type='text'
          data-linkpart={'link'}
          value={link.link}
          onChange={this.updateLink.bind(this)}
        />
      </div>
    );
  }
}
