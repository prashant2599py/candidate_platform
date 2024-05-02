import { combineReducers } from "@reduxjs/toolkit";
import jobReducer from "./JobReducer";


const reducers = combineReducers({
    job: jobReducer
});


export default reducers;