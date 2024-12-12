import React, { useState } from 'react'
import { decrement, increment, incrementByAmount, reset } from '../Redux/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    const dispatch = useDispatch()
    const [amount,setAmount]=useState(0)
    const {count} = useSelector(state=>state.counterReducer)
    const handleincrementByAmount=()=>{
        if(amount){
            dispatch(incrementByAmount(Number(amount)))
        }
        else{
            alert("Please Enter The Amount")
        }
    }
  return (
    <>
    <div style={{minHeight:'100vh',backgroundColor:'black'}}>
        <h1 className='text-center text-white'>COUNTER APP</h1>
        <div className='w-100 d-flex align-items-center justify-content-center'>
            <div className='border border-3 border-light rounded p-3 mt-3' style={{height:'400px',width:'700px'}}>
                <h1 className='my-5 text-white text-center' style={{fontSize:'80px'}}>{count}</h1>
                <div className='d-flex align-item-center justify-content-around mt-5'>
                    <button onClick={()=>dispatch(increment())} className='btn btn-warning'>INCREMENT</button>
                    <button onClick={()=>dispatch(reset())} className='btn btn-danger'>RESET</button>
                    <button onClick={()=>dispatch(decrement())} className='btn btn-success'>DECREMENT</button>
                </div>
                <div className='d-flex align-items-center justify-content-around mt-5'>
                    <input onChange={(e)=>setAmount(e.target.value)} className='form-control' type='text' placeholder='Incremented Counter Amount'/>
                    <button onClick={handleincrementByAmount} className='btn btn-primary ms-3'>INCREMENT BY AMOUNT</button>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Counter
