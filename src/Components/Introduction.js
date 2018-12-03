import React, { Component } from "react"
//checking to see if the value of the prop is !null and if it is, giving "no answer" as the value.
const Introduction = props => (
  <span className="introduction">
    <span className="from">
      {" "}
      <strong>From: </strong>
      {props.from === null ? "no answer" : props.from}
    </span>
    <span className="funFact">
      {" "}
      <strong>Fun fact:</strong>
      {props.funFact === null ? "no answer" : props.funFact}
    </span>
  </span>
)

export default Introduction
