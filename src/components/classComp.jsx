import React from "react";

class ClassComp extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      status: "Log In",
    };

    // Bind the handleClick function to the component instance
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isLoggedIn) {
      this.setState({ isLoggedIn: false, status: "Log In" });
    } else {
      this.setState({ isLoggedIn: true, status: "Log Out" });
    }
  }

  render() {
    return (
      <div>
        <h1>Class Component</h1>
        <p>
          In the example below, we create a class called ClassComp that extends
          from React.Component. The class has a constructor that initializes the
          state with a isLoggedIn property set to false. The render method
          renders a h1 element with the text "You are currently logged out". The
          button is used togle the state true/false.
        </p>
        <h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>
        <button onClick={this.handleClick}>{this.state.status}</button>
      </div>
    );
  }
}

export default ClassComp;
