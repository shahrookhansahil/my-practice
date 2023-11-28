import React from "react";
import "./myStyle.css";
// import sahil from "../../src/components/sahil.png";

const user = {
  name: "Sahil Mazari",
  imageUrl: require("../../src/components/sahil.png"),
  imageSize: 99,
};

export default function Profile() {
  return (
    <>
      <h1>About Me</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <h2>{user.name}</h2>
      <p>
        Results-driven programming instructor experienced in teaching C++, Java,
        Python, C#, HTML, CSS, and JavaScript. Proven success in delivering
        engaging lessons and fostering collaborative learning environments.
        Passionate about staying current with industry trends and dedicated to
        providing up-to-date programming education.
      </p>
    </>
  );
}
