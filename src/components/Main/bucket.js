import React from "react";
import { connect } from "react-redux"
import { openBucket } from "../../actions/appActions";

const Bucket = (props) => {
    const onPriorityClick = () => {
        props.openBucket(props.priority);
    }
    return (
        <div onClick={onPriorityClick}>
            Bucket: {props.priority},
        </div>
    );
}

const mapActionsToProps = {
    openBucket,
}


export default connect(null, mapActionsToProps)(Bucket);
