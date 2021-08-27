import React from "react";
import Bucket from "./bucket";
import CurrentTodo from "./CurrentTodo";
import Rewards from "./rewards";

const Main = () => {
    return (
        <div>
            <CurrentTodo />
            <div className="wrappingBuckets">
                <Bucket priority="high" />
                <Bucket priority="medium" />
                <Bucket priority="low" />
                <Rewards />
            </div>
        </div >
    );
}

export default Main;
