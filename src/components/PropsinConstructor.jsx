import React from "react";
class PropsinConstructor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h2>
        I am a <b style={{ color: "blue" }}>{this.props.model}</b>!
      </h2>
    );
  }
}
export default PropsinConstructor;
