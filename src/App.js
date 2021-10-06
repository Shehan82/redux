import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions/index";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  console.log(counter);
  return (
    <div className="App">
      Counter {counter}
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default App;
