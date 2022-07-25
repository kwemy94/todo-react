import { useEffect, useState } from "react"
import './Liste.css'

function Liste(){

    const [text, setText] = useState('');
  const [day, setDay] = useState('');
  return (
      <form className="add-form" >
          <div className="form-control">
              <label>Task</label>
              <input type="text" placeholder="add task" value={text} onChange={(e) => setText(e.target.value)} />
          </div>
          <div className="form-control">
              <label>Day & Time</label>
              <input type="text" placeholder="add day & time" value={day}  />
          </div>
          <input type="submit" className="btn btn-block" value="Save Task" />
      </form>
    )
}

export default Liste