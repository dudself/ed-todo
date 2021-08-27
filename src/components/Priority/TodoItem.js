import I from "immutable";
import React, { useState } from "react";

export const todos = I.fromJS([
    { title: 'High Task', priority: 'high' },
    { title: 'High Task', priority: 'high' },
    { title: 'High Task', priority: 'high' },
    { title: 'High Task', priority: 'high' },
    { title: 'Medium Task', priority: 'medium' },
    { title: 'Medium Task', priority: 'medium' },
    { title: 'Medium Task', priority: 'medium' },
    { title: 'Medium Task', priority: 'medium' },
    { title: 'Low Task', priority: 'low' },
    { title: 'Low Task', priority: 'low' },
]);

const TodoItem = (props) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <li onClick={() => setExpanded(!expanded)}>
            {props.todo.get('title')} - {expanded ? 'Expanded' : 'Not Expanded'}
        </li>
    );
}

export default TodoItem;
