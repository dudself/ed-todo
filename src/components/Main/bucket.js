import React from "react";
import I from "immutable";
import { connect } from "react-redux"
import { openBucket } from "../../actions/appActions";

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

const Bucket = (props) => {
    const onPriorityClick = () => {
        props.openBucket(props.priority);
    }
    return (
        <div className="buckets" onClick={onPriorityClick}>
            <div className={props.priority}> Bucket: {props.priority} </div>
            <ul>
                {todos
                    .filter(todo => todo.get('priority') === props.priority)
                    .slice(0, 3)
                    .map(todo => <li>{todo.get('title')}</li>)
                }
            </ul>
        </div>
    );
}

const mapActionsToProps = {
    openBucket,
}


export default connect(null, mapActionsToProps)(Bucket);
