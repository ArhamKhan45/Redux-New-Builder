import React, { useState } from "react";
import "../style/style.css";
import { useDispatch, useSelector } from "react-redux";

function home() {
  const { counter } = useSelector((state) => state.counter);
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const dispatch = useDispatch();
  const { adder } = useSelector((state) => state.adder);
  const increment = () => {
    dispatch({
      type: "increment",
    });
  };

  const decrement = () => {
    dispatch({
      type: "decrement",
    });
  };

  const reset = () => {
    dispatch({
      type: "reset",
      payload: 0,
    });
  };

  const changehandler = (e, varfunc) => {
    varfunc(() => {
      return e.target.value;
    });
  };

  const sum = () => {
    // console.log(typeof first);
    dispatch({
      type: "setAdder",
      payload: Number(first) + Number(second),
    });
  };
  const numberInputOnWheelPreventChange = (e) => {
    e.target.blur();
    e.stopPropagation();
    setTimeout(() => {
      e.target.focus();
    }, 0);
  };
  return (
    <div className="custom-home">
      <p>first: {first}</p>
      <p>Second : {second}</p>
      <button onClick={increment}>+</button>
      <label>{counter}</label>
      <button onClick={decrement}>-</button>
      <br />
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <br />
      <input
        type="Number"
        onChange={(e) => changehandler(e, setFirst)}
        value={first}
        style={{ padding: "6px 5px" }}
        onWheel={numberInputOnWheelPreventChange}
      />
      <span style={{ margin: "0 20px", fontSize: "20px" }}>+</span>

      <input
        type="Number"
        onChange={(e) => changehandler(e, setSecond)}
        value={second}
        style={{ padding: "6px 5px" }}
        onWheel={numberInputOnWheelPreventChange}
      />
      <span style={{ margin: "0 20px", fontSize: "20px" }}>=</span>
      <input
        type="text"
        disabled
        value={adder}
        style={{
          padding: "6px 5px",

          textAlign: "center",
        }}
      />
      <br />
      <br />

      <button onClick={sum}>add kro</button>
    </div>
  );
}

export default home;
