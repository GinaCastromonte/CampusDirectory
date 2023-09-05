/* Here is where you will configure the store 
  The store needs some reducer slices!
*/ 
import { configureStore } from "@reduxjs/toolkit";
import campusReducer from "./campusSlice";
import studentReducer from "./studentSlice";

const store = configureStore({
	reducer: {
		campusSlice: campusReducer,
		studentSlice: studentReducer,
	},
});

export default store;
