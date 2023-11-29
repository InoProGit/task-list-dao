import React, { useState } from 'react'
import './MainForm.css';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/tasks/tasksSlice';


function MainForm() {
  const [value, setValue] = useState('')

  const [alert, setAlert] = useState('')

  const dispatch = useDispatch()
  const [minLength, maxLength] = [3,23]
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAlert(e.target.value.length === maxLength ? `To many letters. Max is - ${maxLength}` : '')
    setAlert(e.target.value.length < minLength ? `Not enough letters. Min is - ${minLength}` : '')
    setValue(e.target.value)
  }

  return (
    <form className="main-form p-4" onSubmit={(e) => {
      e.preventDefault();
      if (value.length > 1) {
        dispatch(addTask({ id: Date.now(), name: value, done: false }));
        setValue('')
        setAlert('')
      } else if (value.length < 3) {
        setAlert(`Not enough letters. Min is - ${minLength}`)
      }
    }}>
      <input
        minLength={minLength}
        maxLength={maxLength}
        value={value}
        onChange={(e) => inputHandler(e)}
        type="text"
        placeholder="Write new task Name"
      />
      <button className="add-task">Add task</button>
      <div className="form-alert">{alert ? alert : ''}</div>
    </form>
  )
}

export default MainForm