import { combineReducers } from "redux"
import courses from "./courseReducer"
import totalCourses from "./courseTotalReducer"

const rootReducer = combineReducers({
  courses,
  totalCourses
})

export default rootReducer
