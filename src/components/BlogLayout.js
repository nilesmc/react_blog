import React from "react"

import Post from "./Post";
import CreatePost from "./CreatePost";
import PostForm from "./PostForm";

class BlogLayout extends React.Component {

  constructor(props) {
    super(props);
    this.state = { posts: this.props.pageData.posts }
    this.updatePosts = this.updatePosts.bind(this);
    this.addPosts = this.addPosts.bind(this);
  }

  componentWillReceiveProps(nextprops){
    this.state = { posts: nextprops.pageData.posts }
  }

  addPosts(){
    let newPost = {
      subject: 'New Entry',
      text: '',
      links: [ { link: '', link_text: '' } ]
    };
    let postsArr = this.state.posts;
    postsArr.push(newPost);
    this.setState ({
                    posts: postsArr,
                    openMenu: false
                  } );
    this.props.updateAppState(postsArr);
  }

  updatePosts(updatedPost, index) {
    let currentPosts = this.state.posts;
    currentPosts[index] = updatedPost;
    this.setState(currentPosts);
    this.props.updateAppState(currentPosts);
  }

  render(){

    let postsObjs = this.state.posts;
    let updatePosts = this.updatePosts;
    let postsMap = '';
    if (this.props.pageData.loading ) {
      postsMap = <h3> LOADING... </h3>
    } else {
      postsMap = postsObjs.map((post, idx) => {
      let postForm = '';
      if (post.editing) {
          postForm = (<PostForm
                        position={idx}
                        postData={postsObjs[idx]}
                        updatePosts={updatePosts}
                      />)
      }
      return ( <div key={idx}>
                  <Post position={idx} postData={postsObjs[idx]} updatePosts={updatePosts}/>
                  {postForm}
                </div>
              )
      });
    }
    return (

      <div className='blogLayout'>
        <CreatePost postData={this.props.pageData} addPosts={this.addPosts} />
        {postsMap}
      </div>
    );
  }
}

BlogLayout.propTypes = {
  pageData: React.PropTypes.object.isRequired
}

export default BlogLayout;