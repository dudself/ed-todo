import React, { useState } from "react";
import { connect } from "react-redux";
import { add } from "../../actions/TodoActions";

const Todo = (props) => {
    const [todo, setTodo] = useState("");
    const [checks, setChecklist] = useState("");
    const addFunction = () => {
        props.addTodo(
            {
                id: Math.floor(Math.random() * 1000),
                item: todo,
                completed: false,
            },
        );

        setTodo("");
        setChecklist("");

    };
    const onReturnClick = () => {
        props.changeMode("main");
    }
    const handleChecklist = (event) => {
        setChecklist(event.target.value);
    };
    return (
        <div>
            <form className="todo-page">
                <p className="title-add">Add To-do!</p>
                <h1 className="emoji-add">&#129374;</h1>
                <h2 className="todo">Eat Breakfast</h2>
                <div className="checklist-add">
                    <textarea className="checklist-todo"
                        onInput={(event) => handleChecklist(event)}
                        cols="35" rows="20"
                    />
                </div>
                <h3 className="priority">Select priority of the task</h3>
                <div className="priority-opt">
                    <button className="high-add">High</button>
                    <button className="medium-add">Medium</button >
                    <button className="low-add">Low</button >
                </div>
                <h3 className="timer-title">How long will it last?</h3>
                <div className="timer">
                    <button className="up">▲</button >
                    <button className="time">30 min</button >
                    <button className="down"> ▼ </button >
                </div>
                <button className="add-btn" onClick={addFunction}>Add</button>
                <button className="back-btn" onClick={onReturnClick}>Back</button>
            </form>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todo

    }
};

const mapDispatchToProps = {
    addTodo: add,
};


export default connect(mapStateToProps, mapDispatchToProps)(Todo);
