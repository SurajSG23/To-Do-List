import React from 'react';
import Button from "react-bootstrap/Button";
import './style.css'
export default function Todo(props) {
  return (
    <div className="containerItems">
      <h4>{props.todo.title}</h4>

      <div className="flexy">
        {/* <Button variant="warning">Edit</Button>{' '} */}
        <Button variant="danger" onClick={()=>{props.onDelete(props.todo)}}>Completed</Button>
      </div>
      <p>{props.todo.desc}</p>
    </div>
  )
}
