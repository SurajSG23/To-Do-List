import React from 'react'
import './style.css';
import Button from "react-bootstrap/Button";
import { useState } from "react";

export default function Addtodos(props) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e) => {
        if (!title || !desc)
            alert("Title or Description cannot be empty")
        else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="addTodos">
            <form>
                <h6 className="hide">Add Todo details:</h6>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title:</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control exampleInputTitle" id="exampleInputTitle" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control exampleInputDesc" id="exampleInputDesc" />
                </div>
                <Button variant="success" onClick={() => { submit() }} className="add">Add</Button>
            </form>
        </div>
    )
}
