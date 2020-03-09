import React, { Component } from "react";
import FormErrors from "../../Components/Form Errors/FormErrors";
import Validate from "../../Components/FormValidation/index";
import { Auth } from "aws-amplify";
import "./index.css";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    errors: {
      cognito: null,
      blankfield: false,
      passwordmatch: false
    }
  };

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false
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
    const { username, email, password } = this.state;
    try {
      const signUpResponse = await Auth.signUp({
        username,
        password,
        attributes: {
          email: email
        }
      });
      this.props.history.push("/home");
      console.log(signUpResponse);
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
          <div className=" container-fluid register-container">
            <FormErrors formerrors={this.state.errors} />

            <form className="col-6 register-form" onSubmit={this.handleSubmit}>
              <h4>Register</h4>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  id="username"
                  aria-describedby="userNameHelp"
                  placeholder="Enter username"
                  value={this.state.username}
                  onChange={this.onInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control "
                  type="email"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control "
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onInputChange}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control "
                  type="password"
                  id="confirmpassword"
                  placeholder="Confirm password"
                  value={this.state.confirmpassword}
                  onChange={this.onInputChange}
                />
              </div>

              <div className="field">
                <p className="control">
                  <button className=" btn button register-button">
                    Register
                  </button>
                </p>
              </div>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default Register;
