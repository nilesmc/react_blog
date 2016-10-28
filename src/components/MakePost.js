import React from "react"

export default class MakePost extends React.Component {

  constructor(props) {
    super(props);
    this.state = { postsArr: this.props.postdata.posts};
    this.addNewWeek = this.addNewWeek.bind(this);
  }

  addNewWeek(e) {
    e.preventDefault();
    this.props.addPosts(this.state.postsArr);
  }

  render(){
    return (
      <button className='newPost' onClick={this.addNewWeek}> Make A New Post</button>
    );
  }
}
