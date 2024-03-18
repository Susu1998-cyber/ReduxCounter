 import { SUBMIT_FORM } from "./fromTypes"

 export const submitform = ({name,age}) => {
    return {
        type:SUBMIT_FORM,
        name,
        age
    }
}