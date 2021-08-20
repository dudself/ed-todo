import React from "react";
import Bucket from "./bucket";
import CurrentTodo from "./CurrentTodo";
import Rewards from "./rewards";

const Main = () => {
    return (
        <div>
            <CurrentTodo />
            <div className="wrappingBuckets">
                <div className="high"><Bucket priority="high" /></div>
                <div className="med"><Bucket priority="medium" /></div>
                <div className="low"><Bucket priority="low" /></div>
                <div className="rewards"><Rewards /></div>
            </div>
        </div >
    );
}

export default Main;
