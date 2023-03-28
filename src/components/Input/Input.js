import React from 'react'
import "./Input.css"

const Text = ({add,addBtn,text,status,setStatus}) => {

  const selectHandlet = (e) => {
    setStatus(e.target.value)
  }


  return (
    <form className="main">
    <input value={text} onChange={add} className="center" type="text" placeholder="please enter"/>
    <button onClick={addBtn} className="btn btn-outline-danger ms-3">ADD</button>
    <select className="select" onChange={selectHandlet}>
      <option value="all">All</option>
      <option value="complete">Complete</option>
      <option value="uncomplete">UnComplete</option>
    </select>
    </form>
  )
}

export default Text