import React from "react"
import Link from "./Links";
import Input from "./Inputs"
import LinkInput from "./LinkInputs"

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: this.props.postdata };
    this.updatePostObj = this.updatePostObj.bind(this);
  }

  updatePost(data, field, idx) {
    // re render this posts
    let updatedPost = this.state.post;
    switch (field) {
      case 'subject':
          updatedPost.subject = data;
          break;
      case 'text':
          updatedPost.text = data;
          break;
      case 'link':
          updatedPost.links[] = data
      }
    this.setState({ post: updatedPost });
  }

  updateLink(link) {
    // re render this posts
    this.setState({ posts: link });
  }

  updatePostObj(e) {
    e.preventDefault();
    this.props.updatePosts(this.state.post, this.props.position);
  }

  render(){
    let linksObj = this.props.postdata.links;
    const linksMap = linksObj.map((link, idx) => {
      return (
        <div key={idx}>
          <LinkInput linkdata={link} linkindex={idx} updatepost={ this.updatePost.bind(this) } />
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
          <button
            onClick={this.updatePostObj}
            className='updatePost'>
            Save Post
          </button>
        </form>
      </div>
    );
  }
}
