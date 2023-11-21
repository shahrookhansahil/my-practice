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
      <h5>{user.name}</h5>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}
