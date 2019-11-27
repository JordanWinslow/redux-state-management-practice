import { UPDATE_TOTAL } from "../actions/courseActions"

const courseTotalReducer = (state = 1, action) => {
  switch (action.type) {
    case UPDATE_TOTAL:
      return action.newTotal

    default:
      return state
  }
}

export default courseTotalReducer
