import React from "react"
import Link from "./Links";
import Input from "./Inputs"

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: this.props.postdata };
  }

  updatePost(data, field) {
    // re render this posts
    let updatedPost = this.state.post;
    switch (field) {
      case 'subject':
          updatedPost.subject = data;
          break;
      case 'text':
          updatedPost.text = data;
          break;
      }
    debugger
    this.setState({ post: updatedPost });
  }

  updateLink(link) {
    // re render this posts
    this.setState({ posts: link });
  }


  render(){
    var postObj = this.props.postdata;
    let linksObj = postObj.links;
    const linksMap = linksObj.map((link, idx) => {
      return (
        <div key={idx}>
          <label>Link Text</label>
          <Input inputdata={link.link_text} updatePostObj={this.updateLink} />
          <label>Link</label>
          <Input inputdata={link.link} updatePostObj={this.updateLink} />
        </div>
      );
    })
    return (
      <div className="App-section">
        <h3>Edit Post</h3>
        <form>
          <label>Subject</label>
          <Input inputdata={this.props.postdata.subject} inputfield='subject' updatepost={this.updatePost.bind(this)}/>
          <br></br>
          <label>Summary Text</label>
          <Input inputdata={this.props.postdata.text} inputfield='text' updatepost={this.updatePost.bind(this)}/>
          <br></br>
          <div>
            { linksMap }
          </div>
        </form>
      </div>
    );
  }
}
