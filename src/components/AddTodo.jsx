import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoActions } from '../store/reducers/todoSlice'
import TodoItem from './TodoItem'

function AddTodo() { 
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const addTodoHandler = () => {
        
     if(value.trim().length >0){
          dispatch(
            todoActions.addTodo({
              value,
              id: Math.random().toString(),
              isChecked: false,
            })
          );
     }
    }
  return (
    <div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={addTodoHandler}>add Todo</button>
        <TodoItem/>
    </div>
  )
}

export default AddTodo