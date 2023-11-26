import React, { useRef, useState } from 'react'
import './MainForm.css';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/tasks/tasksSlice';


function MainForm() {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null);


  const [alert, setAlert] = useState('')

  const dispatch = useDispatch()
  const maxLength = 10
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlert(e.target.value.length === maxLength ? `To many letters. Max is - ${maxLength}` : '')
    setValue(e.target.value)
  }

  return (
    <form className="main-form" onSubmit={(e) => {

      e.preventDefault();
      console.log(value);
      dispatch(addTask({ id: Date.now(), name: value, done: false }));
      inputRef.current?.blur(); // the opposite of focus
    }}>
      <div>{alert ? alert : ''}</div>
      <input
        ref={inputRef}
        maxLength={maxLength}
        onChange={(e) => inputHandler(e)}
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