import React, { Component } from "react";
import "./index.css";
import Validate from "../../Components/FormValidation/index";
import { Auth } from "aws-amplify";
import FormErrors from "../../Components/Form Errors/FormErrors";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: {
      cognito: null,
      blankfield: false
    }
  };

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false
      }
    });
  };

  handleSubmit = async event => {
    event.preventDefault();

    // Form validation
    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }

    // AWS Cognito integration here
    try {
      const user = await Auth.signIn(this.state.username, this.state.password);
      console.log(user);
      // setAuthStatus(true);
      // this.Auth.setUser(user);
      this.props.history.push("/home");
    } catch (error) {
      let err = null;
      !error.message ? (err = { message: error }) : (err = error);
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: err
        }
      });
    }
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  };

  render() {
    return (
      <>
        <nav className="login-nav">
          <h2 className="nav-link logo"> Book Shelfie </h2>
          <h6 className="logo-description">
            Browse books and save your favotires one to read later
          </h6>
          <ul class="nav justify-content-end">
            <li className="nav-item">
              {" "}
              <a className="nav-link register-link" href="/register">
                Register
              </a>
            </li>
            <li className="nav-item">
              {" "}
              <a className="nav-link login-link" href="/login">
                Login
              </a>
            </li>
          </ul>
        </nav>
        <section className="section auth">
          <div className=" login-container  container-fluid">
            <FormErrors formerrors={this.state.errors} />

            <form className="col-6 login-form" onSubmit={this.handleSubmit}>
              <h4>Log in</h4>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  id="username"
                  aria-describedby="usernameHelp"
                  placeholder="Enter username or email"
                  value={this.state.username}
                  onChange={this.onInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onInputChange}
                />
              </div>
              {/* <div className="field">
                <p className="control">
                  <a href="/forgotpassword">Forgot password?</a>
                </p>
              </div> */}
              <div className="field">
                <p className="control">
                  <button className="button btn button-login">Login</button>
                </p>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}
export default Login;
