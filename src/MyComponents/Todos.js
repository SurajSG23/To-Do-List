import React from 'react'
import './style.css'
import TodoItems from './TodoItems'
export default function Todos(props) {
  return (
    <div className="conatiner">
      {/* <h3 className="text-center">Todos List</h3> */}

      {props.todos.length===0?<h5 className="text-center text-danger hide">No todos to display</h5>:
        props.todos.map((todo) => {
          return <>
            <div className="conatinerTodos">
              <TodoItems todo={todo} onDelete={props.onDelete} />
            </div>
          </>
        })
      }
    </div>
  )
}