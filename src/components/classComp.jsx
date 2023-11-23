import React from "react";

class ClassComp extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      status: "log In",
    };

    // Bind the handleClick function to the component instance
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isLoggedIn) {
      this.setState({ isLoggedIn: false, status: "log In" });
    } else {
      this.setState({ isLoggedIn: true, status: "log Out" });
    }
  }

  render() {
    return (
      <div>
        <h1>You are currently logged {this.state.isLoggedIn ? "in" : "out"}</h1>
        <button onClick={this.handleClick}>{this.state.status}</button>
      </div>
    );
  }
}

export default ClassComp;
