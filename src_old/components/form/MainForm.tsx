import React, { useRef, useState } from 'react'
import './MainForm.css';

interface Props {
  addTask: (taskName: string) => void
}

function MainForm({addTask}: Props) {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null);
  
  return (
    <form className="main-form" onSubmit={(e) => {
      e.preventDefault();
      console.log(value);
      addTask(value);
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