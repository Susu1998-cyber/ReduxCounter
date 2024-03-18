 import { DECREMENT, INCREMENT,   INCREMENT_BY_5 } from "./counterType"

export  const increment = () => {
return{
        type:INCREMENT 
        
    }
  
 }
 export const decrement = () => {
    return{
        type:DECREMENT
    }
 }
//  export const incrementby5 = () => {
//     return{
//         type:INCREMENTBY5
//     }
//  }
 export const incrementByFive = (value) => {
    return{
        type:INCREMENT_BY_5,
        payload:value
    }
 }
   