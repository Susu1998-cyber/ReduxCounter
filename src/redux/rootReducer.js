import { combineReducers } from "redux";
import { formReducer } from "./form/formReducer";
import { counterReducer } from "./counter/counterReducer";
 

 export const rootReducer = combineReducers({

    form:formReducer,
    counter:counterReducer
})