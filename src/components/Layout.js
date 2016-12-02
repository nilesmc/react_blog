import React from "react"
import Header from "./Header";
import Intro from "./Intro";
import Post from "./Post";
import CreatePost from "./CreatePost";
import Menu from "./Menu";
import PostForm from "./PostForm";

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = { posts: this.props.pageData.posts }
    this.updatePosts = this.updatePosts.bind(this);
    this.addPosts = this.addPosts.bind(this);
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
    const postsMap = postsObjs.map((post, idx) => {
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

    return (
      <div id="outer-container" >
        <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
        <main id="page-wrap">
          <Header headerData={this.props.pageData.header_title} />
          <Intro introData={this.props.pageData.intro} />
          <CreatePost postData={this.props.pageData} addPosts={this.addPosts} />
          {postsMap}
        </main>
      </div>
    );
  }
}

Layout.propTypes = {
  pageData: React.PropTypes.object.isRequired
}

export default Layout;