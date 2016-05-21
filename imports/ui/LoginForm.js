import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { withRouter } from 'react-router'

class LoginForm extends Component {
  onLoginSubmit(e) {
    e.preventDefault();
    const { username, password } = this.refs;
    Meteor.loginWithPassword(username.value, password.value, (err) => {
      if (!err) {
        const { router } = this.props;
        router.push('/');
      } else {
        console.log(err);
      }
    });
  }
  render() {
    return (
      <form id="login-form" role="form" style={{display: 'block'}}>
        <div className="form-group">
          <input ref="username" type="text" name="username" id="username" tabIndex="1" className="form-control"
                 placeholder="Username"/>
        </div>
        <div className="form-group">
          <input ref="password" type="password" name="password" id="password" tabIndex="2" className="form-control"
                 placeholder="Password"/>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <input onClick={this.onLoginSubmit.bind(this)} type="submit" name="login-submit" id="login-submit" tabIndex="4"
                     className="form-control btn btn-login" value="Log In"/>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default withRouter(LoginForm);