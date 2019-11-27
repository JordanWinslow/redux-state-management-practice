export const CREATE_COURSE = "CREATE_COURSE"
export const UPDATE_TOTAL = "UPDATE_TOTAL"

export const createCourse = course => {
  return { type: CREATE_COURSE, course }
}
export const updateTotal = newTotal => {
  return { type: UPDATE_TOTAL, newTotal }
}
