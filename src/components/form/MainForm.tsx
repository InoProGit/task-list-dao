import React, { useRef, useState } from 'react'
import './MainForm.css';
// import { ITask } from '../types/task.interface';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/tasks/tasksSlice';


function MainForm() {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null);
  
  const dispatch = useDispatch()
  
  return (
    <form className="main-form" onSubmit={(e) => {
      e.preventDefault();
      console.log(value);
      dispatch(addTask({id: Date.now(), name: value, done: false }));
      inputRef.current?.blur(); // the opposite of focus
          }}>
      <input 
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)} 
        type="text" 
        placeholder="Write new task Name"
        />
        <button className="add-task" 
        // onClick={addTask('')}
        >Add task</button>
      <div className="currentState">{value}</div>
    </form>
  )
}

export default MainForm