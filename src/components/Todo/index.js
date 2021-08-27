import React, { useState } from "react";
import { connect } from "react-redux";
import { add } from "../../actions/TodoActions";

const Todo = (props) => {
    const [todo, setTodo] = useState("");
    const [checks, setChecklist] = useState("");
    const addFunction = () => {
        if (todo === "" && !checks) {
            alert("Hmm, this to-do is tottaly empty! Please check the input.");
        }
        else if (todo !== "" && checks === "") {
            alert("You should choose a priority level! Please check the input.");
        }
        else if (todo === "" && checks !== "") {
            alert("You should write something to do! Please check the input.");
        }
        else {
            props.addTodo(
                {
                    id: Math.floor(Math.random() * 1000),
                    item: todo,
                    completed: false,

                },
            );

            setTodo("");
            setChecklist("");
        }
    };
    const onGoBackClick = () => {
        props.changeMode("main");
    }
    const handleChecklist = (event) => {
        setChecklist(event.target.value);
    };
    return (
        <div>
            <form className="todo-page">
                <p className="title-add">Add To-do!</p>
                <h2 className="todo">Eat Breakfast</h2>
                <div className="checklist-add">
                    <input type="text" id="checklist" name="checklist"
                        onInput={(event) => handleChecklist(event)}
                    />

                </div>
                <button className="add-btn" onClick={addFunction}>Add</button>
                <button className="back-btn" onClick={onGoBackClick}>Back</button>
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
