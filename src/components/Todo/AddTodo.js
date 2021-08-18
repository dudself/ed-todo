import React, { useState } from "react";
import { connect } from "react-redux";
import { add } from "../../actions/TodoActions";
import "../css/addTodo.css";

const AddTodo = (props) => {

    const [todo, setTodo] = useState("");
    const [level, setPriority] = useState("");


    const addFunction = () => {
        if (todo === "" && level === "") {
            alert("Hmm, this to-do is tottaly empty! Please check the input.");
        }
        else if (todo !== "" && level === "") {
            alert("You should choose a priority level! Please check the input.");
        }
        else if (todo === "" && level !== "") {
            alert("You should write something to do! Please check the input.");
        }
        else {
            props.addTodo(
                {
                    id: Math.floor(Math.random() * 1000),
                    item: todo,
                    completed: false,
                    priority: level,
                },
            );

            // props.addPriority(level);

            setTodo("");
            setPriority("");
        }
    };

    const handleChangeTodo = (event) => {
        setTodo(event.target.value);
    };

    const handleChangePriority = (event) => {
        setPriority(event.target.value);
    };


    return (
        < div className="addTodos" >
            <input
                type="text"
                onChange={(event) => handleChangeTodo(event)}
                className="todo-input"
                value={todo}
            />
            <form>
                <p>Please select the priority of task:</p>
                <div>
                    <div className="high">
                        <input type="radio"
                            id="high"
                            name="priority"
                            className="priority-input"
                            value="high"
                            onChange={(event) => handleChangePriority(event)}
                        />
                        <label htmlFor="high">High priority</label>
                    </div>
                    <div className="medium">
                        <input type="radio"
                            id="medium"
                            name="priority"
                            className="priority-input"
                            value="medium"
                            onChange={(event) => handleChangePriority(event)}
                        />
                        <label htmlFor="medium">Medium priority</label>
                    </div>
                    <div className="low">
                        <input type="radio"
                            id="low"
                            name="priority"
                            className="priority-input"
                            value="low"
                            onChange={(event) => handleChangePriority(event)}
                        />
                        <label htmlFor="low">Low priority</label>
                    </div>
                </div>

            </form>

            <button className="add-button" onClick={addFunction} >
                Add To-do
            </button>
        </div >
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state.todo

    }
};

const mapDispatchToProps = {
    addTodo: add,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);