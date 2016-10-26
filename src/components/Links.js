import React from "react"

export default class Link extends React.Component {
  render(){
    return (
      <a className='blog-post-link' href={this.props.linkdata.link}>{this.props.linkdata.link_text}</a>
    );
  }
}
