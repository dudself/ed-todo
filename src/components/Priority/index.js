import React from "react";
import { connect } from "react-redux";
import { getActiveBucket } from "../../selectors/appSelectors";

const Priority = (props) => {
    const onGoBackClick = () => {
        props.changeMode("main");
    }
    return (
        <div className="bucket-box">

            Priority: {props.activeBucket}
            <div className="filter">
                <div className="all-filter">High</div>
                <div className="completed-filter">Medium</div>
                <div className="active-filter">Low</div>
            </div>
            <div className="todo-list">
                Eat Breakfast
            </div>
            <button onClick={onGoBackClick}>Back</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        activeBucket: getActiveBucket(state),
    }
}
export default connect(mapStateToProps)(Priority);
