import React from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  setCounter
} from "./actions/counterActions";

export default function App() {
  const counter = useSelector((state) => state.counter);
  console.log("renderizou");
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>
        <button onClick={() => dispatch(incrementCounter())}>INCREMENT</button>
      </p>

      <p>
        <button onClick={() => dispatch(decrementCounter())}>DECREMENT</button>
      </p>

      <p>
        <button onClick={() => dispatch(setCounter(5))}>Set to 5!</button>
      </p>
      {counter.count}
    </div>
  );
}
