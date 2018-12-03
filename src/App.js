import React, { Component } from "react"
import students from "./Students.js"
import "./App.css"
import QuestionAndAnswer from "./Components/QuestionAndAnswer"

import Introduction from "./Components/Introduction"

class App extends Component {
  constructor() {
    super()
    this.state = {
      students: students,
      count: 0
    }
    this.handleNext = this.handleNext.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }
  handleNext() {
    //check the count against the length of the array, and kick back an alert if the count is already maxed out
    this.state.count < this.state.students.length - 1
      ? this.setState({ count: this.state.count + 1 })
      : alert("This is the final entry")
  }
  handlePrevious() {
    //check count against itself and alert if count cant go any lower
    this.state.count >= 1
      ? this.setState({ count: this.state.count - 1 })
      : alert("This is the first entry")
  }
  handleDelete() {
    //create an arr copy and splice the current index off, setState to new arr
    let arr = [...this.state.students]
    arr.splice(this.state.count, 1)
    this.state.students.length > 1
      ? this.setState({
          students: arr
        })
      : alert("This is the only student")
  }
  handleAdd(val) {
    //add empty object to the students arr
    this.setState({
      students: [...this.state.students, val]
    })
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          {/* navigate to the first index in the students arr by changing state back to 0*/}
          <button className="home" onClick={e => this.setState({ count: 0 })}>
            {" "}
            Home{" "}
          </button>
          <button className="directory">Directory</button>
        </div>
        <br />
        <div className="main">
          <span className="pageCounter">
            {this.state.count + 1} of {this.state.students.length}
          </span>

          <span className="student-name">
            <strong>Name: </strong> {this.state.students[this.state.count].name}
          </span>
          <br />
          <Introduction
            from={this.state.students[this.state.count].from}
            funFact={this.state.students[this.state.count].funFact}
          />

          <br />
          <strong>Would you rather...</strong>
          <br />
          <QuestionAndAnswer
            cityOrCountry={this.state.students[this.state.count].cityOrCountry}
            indoorsOrOutdoors={
              this.state.students[this.state.count].indoorsOrOutdoors
            }
            travel={this.state.students[this.state.count].travel}
            food={this.state.students[this.state.count].food}
            dogOrCat={this.state.students[this.state.count].dogOrCat}
          />
        </div>
        <div className="buttons">
          <button className="previous" onClick={this.handlePrevious}>
            Previous
          </button>
          <button className="delete" onClick={this.handleDelete}>
            Delete
          </button>
          <button className="add" onClick={this.handleAdd}>
            Add
          </button>
          <button className="next" onClick={this.handleNext}>
            Next
          </button>
        </div>
      </div>
    )
  }
}

export default App
