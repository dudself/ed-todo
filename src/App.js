import './App.css';
import { connect } from "react-redux"
import Header from "./components/Header"
import Main from "./components/Main"
import Todo from "./components/Todo"
import "./css/addTodo.css";
import { changeMode } from "./actions/appActions";
import { getAppMode } from "./selectors/appSelectors";
import Priority from './components/Priority';

function App(props) {
    console.log(props.mode);
    const onClickAdd = () => {
        props.changeMode("add");
    }
    return (
        <div className="App">
            <Header />
            {props.mode === "main" && (
                <>
                    <Main />
                    <button onClick={onClickAdd}>Add</button>
                </>
            )}

            {props.mode === "add" && <Todo changeMode={props.changeMode} />}
            {props.mode === "priority" && <Priority changeMode={props.changeMode} />}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        mode: getAppMode(state),
    };
}

const mapActionsToProps = {
    changeMode,
}

export default connect(mapStateToProps, mapActionsToProps)(App);
