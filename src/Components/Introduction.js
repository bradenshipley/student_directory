import React, { Component } from "react"

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
