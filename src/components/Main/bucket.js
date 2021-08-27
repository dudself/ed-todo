import React from "react";
import I from "immutable";
import { connect } from "react-redux"
import { openBucket } from "../../actions/appActions";

export const todos = I.fromJS([
    { title: 'High Task', priority: 'high', id: '0' },
    { title: 'High Task', priority: 'high', id: '1' },
    { title: 'High Task', priority: 'high', id: '2' },
    { title: 'High Task', priority: 'high', id: '3' },
    { title: 'Medium Task', priority: 'medium', id: '4' },
    { title: 'Medium Task', priority: 'medium', id: '5' },
    { title: 'Medium Task', priority: 'medium', id: '6' },
    { title: 'Medium Task', priority: 'medium', id: '7' },
    { title: 'Low Task', priority: 'low', id: '8' },
    { title: 'Low Task', priority: 'low', id: '9' },
]);

const Bucket = (props) => {
    const onPriorityClick = () => {
        props.openBucket(props.priority);
    }
    return (
        <div className={`buckets ${props.priority}`} onClick={onPriorityClick}>
            <div className={props.priority}> Bucket: {props.priority} </div>
            <ul>
                {todos
                    .filter(todo => todo.get('priority') === props.priority)
                    .slice(0, 3)
                    .map(todo => <li key={todo.get('id')}>{todo.get('title')}</li>)
                }
            </ul>
        </div>
    );
}

const mapActionsToProps = {
    openBucket,
}


export default connect(null, mapActionsToProps)(Bucket);
