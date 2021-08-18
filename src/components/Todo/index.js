import React from "react";

const Todo = (props) => {
    const onGoBackClick = () => {
        props.changeMode("main");
    }
    return (
        <div>
            Todo
            <button onClick={onGoBackClick}>Back</button>
        </div>
    );
}

export default Todo;
