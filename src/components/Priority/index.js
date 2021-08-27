import React from "react";
import { connect } from "react-redux";
import { getActiveBucket } from "../../selectors/appSelectors";
import { todos } from "../Main/bucket";
import TodoItem from "./TodoItem";

const Priority = (props) => {
    const onReturnClick = () => {
        props.changeMode("main");
    }
    return (
        <div className="bucket-box">

            Priority: {props.activeBucket}
            <div classname="filter">
                <input type="radio" id="all" name="all" value="all-filter" />
                <label for="all">All</label>
                <input type="radio" id="completed" name="completed" value="completed-filter" />
                <label for="completed">Completed</label>
                <input type="radio" id="active" name="active" value="active-filter" />
                <label for="active">Active</label><br></br>
            </div>
            <div className="todo-list">
                {todos
                    .filter(todo => todo.get('priority') === props.activeBucket)
                    .map(todo => <TodoItem todo={todo} />)
                }
            </div>
            <button onClick={onReturnClick}>Back</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        activeBucket: getActiveBucket(state),
    }
}
export default connect(mapStateToProps)(Priority);
