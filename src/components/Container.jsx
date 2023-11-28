import React from "react";
import Header from "./Header";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  delHeader = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>Container can be delete by clicking on button</h1>
        <p>
          In the example below, we create a class called Container that extends
          from React.Component. The class has a constructor that initializes the
          state with a show property set to true. The render method renders a
          Header component which is wrapped in a conditional that displays the
          Header only if the show property is true. The button is used to toggle
          the show state.
        </p>
        {this.state.show && <Header />}
        <button type="button" onClick={this.delHeader}>
          Delete Header
        </button>
      </div>
    );
  }
}

export default Container;
