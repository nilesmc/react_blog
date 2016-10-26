import React from "react"

export default class Week extends React.Component {
  constructor() {
    super()
  }
  render(){
    return (
      <div className="App-header">
        <h3>{this.props.postdata.subject}</h3>
        <p>{this.props.postdata.text}</p>
        <ol>
          <li><a className='blog-post-link' href={this.props.postdata.link_1}>{this.props.postdata.link_text_1}</a></li>
          <li><a className='blog-post-link' href={this.props.postdata.link_2}>{this.props.postdata.link_text_2}</a></li>
          <li><a className='blog-post-link' href={this.props.postdata.link_3}>{this.props.postdata.link_text_3}</a></li>
        </ol>
      </div>
    );
  }
}
