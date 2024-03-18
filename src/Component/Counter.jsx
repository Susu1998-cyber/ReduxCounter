import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByFive   } from '../redux/counter/counterAction'
 

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const count2 = useSelector((state) => state.counter.count2)
    const dispatch = useDispatch()
  return (
    <div>
        Count:{count}
        <button 
        onClick={() => dispatch(increment())}
        >+</button>

          <button 
        onClick={() => dispatch(decrement())}
        >-</button>
          {/* Counter:{count2} */}
          {/* <button 
        onClick={() => dispatch(incrementby5())}
        >+</button> */}
        Countby5: {count2}
         <button onClick={() => dispatch( incrementByFive(5))}> +</button>
    </div>
  )
} 

export default Counter