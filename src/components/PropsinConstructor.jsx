import React from "react";
class PropsinConstructor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>Props in Constructor</h1>
        <p>
          In a class constructor, you can access props passed to the component
          via this.props. This is useful when you need to use props to make
          decisions in the constructor method, as shown in the example below.
          the blue colored text is coming from the props.
        </p>
        <h2>
          I am a <b style={{ color: "blue" }}>{this.props.model}</b>!
        </h2>
      </>
    );
  }
}
export default PropsinConstructor;
