import React from "react";
import "../css/addTodo.css";

const AddChecklist = (props) => {
    return (
        <div class="class">
            <div class="button">
                <span class="text">Checklist</span>
                <i class='fas fa-angle-down'></i>
            </div>
            <div class="field">
                <input type="text" placeholder="Add your new item"></input>
                <span class="add-btn">Add</span>
            </div>
            <ul>
                <li>
                    <span>
                        <i class="fa fa trash">

                        </i>
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default AddChecklist;