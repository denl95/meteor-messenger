import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class RegisterForm extends Component {
  onRegisterSubmit(e) {
    e.preventDefault();
    const { username, password, email } = this.refs;
    const options = {
      username: username.value,
      password: password.value,
      email: email.value
    };
    Accounts.createUser(options, (err) => {
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
      <form id="register-form" role="form" style={{display: 'none'}}>
        <div className="form-group">
          <input ref="username" type="text" name="username" id="username" tabIndex="1" className="form-control"
                 placeholder="Username"/>
        </div>
        <div className="form-group">
          <input ref="email" type="email" name="email" id="email" tabIndex="1" className="form-control"
                 placeholder="Email Address"/>
        </div>
        <div className="form-group">
          <input ref="password" type="password" name="password" id="password" tabIndex="2" className="form-control"
                 placeholder="Password"/>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <input onClick={this.onRegisterSubmit.bind(this)} type="submit" name="register-submit" id="register-submit" tabindex="4"
                     className="form-control btn btn-register" value="Register Now"/>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default withRouter(RegisterForm);