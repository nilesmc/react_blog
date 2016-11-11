import React from "react"
import Input from "./Inputs"
import LinkInput from "./LinkInputs"

export default class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: this.props.postData };
    this.updatePostObj = this.updatePostObj.bind(this);
    this.addLink = this.addLink.bind(this);
  }

  updatePost(data, field, idx) {
    let updatedPost = this.state.post;
    switch (field) {
      case 'subject':
          updatedPost.subject = data;
          break;
      case 'text':
          updatedPost.text = data;
          break;
      case 'link':
          if (idx !== undefined) {
            updatedPost.links[idx].link = data
          }
          break;
      case 'link_text':
          if (idx !== undefined) {
            updatedPost.links[idx].link_text = data
          }
          break;
      default:
        break;
      }
    this.setState({ post: updatedPost });
  }

  addLink(e){
    e.preventDefault();
    let current = this.state.post;
    let newLink = { link_text: '', link: ''};
    current.links.push(newLink);
    this.setState({ posts: current });
  }

  updatePostObj(e) {
    e.preventDefault();
    let post = this.state.post;
    post.editing = false;
    this.props.updatePosts(post, this.props.position);
    this.setState(post);
  }

  render(){
    let linksObj = this.props.postData.links;
    const linksMap = linksObj.map((link, idx) => {
      return (
        <div key={idx}>
          <LinkInput linkdata={link} linkidx={idx} updatepost={ this.updatePost.bind(this) } />
        </div>
      );
    })
    return (
      <div className={`App-section ${ this.state.post.editing ? '' : 'hidden'} `} >
        <h3>Edit Post</h3>
        <form>
          <label>Subject</label>
          <Input inputdata={this.props.postData.subject} inputfield='subject' updatepost={this.updatePost.bind(this)}/>
          <br></br>
          <label>Summary Text</label>
          <Input inputdata={this.props.postData.text} inputfield='text' updatepost={this.updatePost.bind(this)}/>
          <br></br>
          <div>
            { linksMap }
          </div>
          <button
            onClick={this.addLink}
            className='updatePost'>
            Add Link
          </button>
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
