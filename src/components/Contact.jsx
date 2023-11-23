import React from "react";

export default function Contact(props) {
  return (
    <div>
      <h1> {props.name}</h1>
      <h3>email: {props.email}</h3>
      <h3>phone: {props.phone}</h3>
    </div>
  );
}
