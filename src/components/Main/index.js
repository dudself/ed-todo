import React from "react";
import Bucket from "./bucket";
import CurrentTodo from "./CurrentTodo";

const Main = () => {
    return (
        <div>
            Main
            <CurrentTodo />
            <hr />
            <Bucket priority="high" />
            <Bucket priority="medium" />
            <Bucket priority="low" />
        </div>
    );
}

export default Main;
