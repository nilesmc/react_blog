import React from "react"
import Header from "./Header";
import Intro from "./Intro";
import Menu from "./Menu";

import '../App.css';

class NewLayout extends React.Component {

  render(){
    const { pageData, children, updateAppState } = this.props

    const childrenWithProps = React.Children.map(
      children,
      child => React.cloneElement(child, {
        pageData: pageData,
        updateAppState: updateAppState
      })
    );

    return (
      <div className="App">
        <div id="outer-container" >
          <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
          <main id="page-wrap">
            <Header headerData={'This is my React Blog'} />
            <Intro introData={'Documenting My ReactJS Journey'} />
            {pageData.loading ? (
              <h3> LOADING... </h3>
            ) : (
              <div>{childrenWithProps}</div>
            )}
          </main>
        </div>
      </div>
    );
  }
}

NewLayout.propTypes = {
  pageData: React.PropTypes.object.isRequired,
  updateAppState: React.PropTypes.func.isRequired
}

export default NewLayout;