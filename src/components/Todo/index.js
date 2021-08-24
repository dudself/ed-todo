import React from "react";

const Todo = (props) => {
    const onGoBackClick = () => {
        props.changeMode("main");
    }
    return (
        <div className="todo-page">
            <h1 className="emoji-add">&#129374;</h1>
            <div className="title-add">Add To-do!</div>
            <div className="todo">Eat Breakfast</div>
            <div className="checklist-add">
                <ul>
                    <li>Make Food</li>
                    <li>Make a tea</li>
                    <li>Enjoy your breakfast</li>
                    <li>Clean up</li>
                </ul>
            </div>
            <h3 className="priority">Select priority of the task</h3>
            <div className="priority-opt">
                <button className="high-add">High</button>
                <button className="medium-add">Medium</button >
                <button className="low-add">Low</button >
            </div>
            <h3 className="timer-title">How long will it last?</h3>
            <div className="timer">
                <button className="up"> + </button >
                <button className="time">30 min</button >
                <button className="down"> - </button >
            </div>


            <button className="add-btn" onClick={onGoBackClick}>Back</button>
        </div>
    );
}

export default Todo;
