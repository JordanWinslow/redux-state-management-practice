import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "localforage"
import courses from "./courseReducer"
import totalCourses from "./courseTotalReducer"

const persistConfig = {
  key: "root", // start storing from root reducer
  storage, // localforage async storage API wrapper
  whitelist: ["courses", "totalCourses"] // reducers we want to store for rehydration
}

const rootReducer = combineReducers({
  courses,
  totalCourses
})

export default persistReducer(persistConfig, rootReducer)
