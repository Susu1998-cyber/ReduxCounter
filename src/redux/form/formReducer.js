import { SUBMIT_FORM } from "./fromTypes"

const initialState = {
    name:"empty",
    age:0
}

 export const formReducer = (state=initialState,{type,age,name}) => {
    switch(type){

        case SUBMIT_FORM :
            return {
                ...state,
                name,
                age 
            }

        default:
            return state
    }
}