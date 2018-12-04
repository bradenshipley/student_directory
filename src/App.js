import React, { Component } from "react"
// import students from "./Students.js"
import "./App.css"
import QuestionAndAnswer from "./Components/QuestionAndAnswer"
import axios from "axios"
import Introduction from "./Components/Introduction"

class App extends Component {
  constructor() {
    super()
    this.state = {
      students: {},
      count: 0,
      edit: "false"
    }
    this.handleNext = this.handleNext.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }
  componentDidMount() {
    //setting initial values of students based on API given
    axios.get("https://dm20.now.sh/students").then(response => {
      this.setState({
        students: response.data
      })
    })
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
    //using an axios delete request to remove the current index in the API
    axios
      .delete(`https://dm20.now.sh/students/${this.state.selected}`)
      .then(response => {
        this.setState({
          students: response.data,
          selected: this.state.selected - 1
        })
      })
  }
  handleAdd(val) {
    //add empty object to the students arr
    this.setState({
      students: [...this.state.students, val],
      //set current page to the newest entry
      count: this.state.students.length
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
        {this.state.students.length > 0 ? (
          <div className="main">
            {this.state.students.length > 0 ? (
              <span className="pageCounter">
                {this.state.count + 1} of {this.state.students.length}
              </span>
            ) : (
              "No students yet"
            )}
            {this.state.students.length ? (
              <span className="student-name">
                <strong>Name: </strong>{" "}
                {this.state.students[this.state.count].name}
              </span>
            ) : (
              "No students yet"
            )}
            <br />

            <Introduction
              from={this.state.students[this.state.count].from}
              funFact={this.state.students[this.state.count].funFact}
            />

            <br />
            <strong>Would you rather...</strong>
            <br />

            <QuestionAndAnswer
              cityOrCountry={
                this.state.students[this.state.count].cityOrCountry
              }
              indoorsOrOutdoors={
                this.state.students[this.state.count].indoorsOrOutdoors
              }
              travel={this.state.students[this.state.count].travel}
              food={this.state.students[this.state.count].food}
              dogOrCat={this.state.students[this.state.count].dogOrCat}
            />
          </div>
        ) : (
          <div className="appLoading"></div>
        )}
        <div className="buttons">
          <button className="previous" onClick={this.handlePrevious}>
            Previous
          </button>
          <button className="edit">Edit </button>
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
