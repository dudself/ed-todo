import React from "react";
import { connect } from "react-redux";
import { getActiveBucket } from "../../selectors/appSelectors";

const Priority = (props) => {
    const onGoBackClick = () => {
        props.changeMode("main");
    }
    return (
        <div>
            Priority: {props.activeBucket},
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
