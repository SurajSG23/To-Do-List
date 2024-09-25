import React from 'react';
import './style.css';
import PropTypes from 'prop-types'

export default function Header(props) {
    // let about = document.getElementsByClassName("about2")[0];
    let about2 = document.getElementsByClassName("about-todo")[0];
    let hover = () => {
        about2.style.left="0vw"
    }
    let hoverout=()=>{
        about2.style.left="-100vw"
    }

    return (
        <>
            <div className="about-todo">
                <h2 className='hide'>About This To-Do List</h2>
                <p>
                    A to-do list is a simple yet powerful tool used to organize tasks and manage time effectively.
                    It helps you keep track of what needs to be done, stay focused, and ensure that nothing important is overlooked.
                    Whether you're managing daily chores, work projects, or long-term goals, a to-do list provides structure
                    and clarity, enabling you to break down tasks into manageable steps and boosting your overall productivity.
                </p>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="about2" onMouseOver={()=>{hover()}} onMouseOut={()=>{hoverout()}} > About</a>
                    <h4 className="title">{props.title}</h4>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {props.searchBar ? <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                            : ""}
                    </div>
                </div>
            </nav>
        </>
    )
}
//To check whether the passed title is of type string only, otherwise it throws an error
Header.propTypes = {
    title: PropTypes.string
}