import React from 'react'

class Login extends React.Component {

  constructor(props) {
    super(props);
  }

  updateLogin(e){
    debugger
    const data = e.target.value;
    const field = this.props.inputField;
    this.props.updatePost(data, field);
  }

  updatePassword(e){
    debugger
    const data = e.target.value;
    const field = this.props.inputField;
    this.props.updatePost(data, field);
  }

  updateUserName(e){
    debugger
    const data = e.target.value;
    const field = this.props.inputField;
    this.props.updatePost(data, field);
  }

  render(){
    return (
      <div className="Login">
        <form>
          <label>Username</label>
          <input
            type="text"
            onChange={this.updateUsername}
            value={'username'}
            />
          <br></br>
          <label>Password</label>
          <input
            type="password"
            onChange={this.updatePassword}
            value={'password'}
          />
          <br></br>
          <button
            onClick={this.updateLogin}
            className='updatePost'>
            Login
          </button>

        </form>
      </div>
    );
  }
}

Login.propTypes = {
  // pageData: React.PropTypes.object.isRequired
}

export default Login;