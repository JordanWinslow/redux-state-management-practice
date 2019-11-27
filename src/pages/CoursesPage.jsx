import React, { useState } from "react"
import { connect } from "react-redux"
import { createCourse, updateTotal } from "../redux/actions/courseActions"

const CoursesPage = ({ createCourse, courses, totalCourses, updateTotal }) => {
  const [courseTitle, setCourseTitle] = useState("")

  const changeHandler = event => {
    setCourseTitle(event.target.value)
  }

  const submitHandler = event => {
    event.preventDefault()
    const courseID = totalCourses + 1
    createCourse({ [courseID]: { title: courseTitle } })
    updateTotal(courseID) // latest courseID is === to the totalCourses
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <h2>Courses:</h2>
        <br />
        <div>
          {Object.keys(courses).map(courseID => (
            <h3 key={courseID}>{courses[courseID].title}</h3>
          ))}
        </div>
        <br />
        <h3>Add Course</h3>
        <input type="text" onChange={changeHandler} value={courseTitle} />
        <input type="submit" value="Save" />
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return { courses: state.courses, totalCourses: state.totalCourses }
}
const mapDispatchToProps = dispatch => {
  return {
    createCourse: course => dispatch(createCourse(course)),
    updateTotal: newTotal => dispatch(updateTotal(newTotal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage)
