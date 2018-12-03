import React, { Component } from "react"

const QuestionAndAnswer = props => (
  <span className="questionAndAnswer">
    <span className="cityOrCountry">
      <strong>...live in the city or country?</strong>{" "}
      {props.cityOrCountry === null ? "no answer" : props.cityOrCountry}
    </span>
    <span className="indoorsOrOutdoors">
      <strong>...be indoors or outdoors?</strong>{" "}
      {props.indoorsOrOutdoors === null ? "no answer" : props.indoorsOrOutdoors}
    </span>
    {
      <span className="travel">
        <strong>...travel every day or never leave home?</strong>{" "}
        {props.travel === null ? "no answer" : props.travel}
      </span>
    }
    <span className="topsOrSubway">
      <strong>..eat at Top's or Subway?</strong>{" "}
      {props.food === null ? "no answer" : props.food}
    </span>
    <span className="dogOrCat">
      <strong>...have a dog or a cat?</strong>{" "}
      {props.dogOrCat === null ? "no answer" : props.dogOrCat}
    </span>
  </span>
)

export default QuestionAndAnswer
