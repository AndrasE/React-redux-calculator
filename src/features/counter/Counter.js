import React, { useState } from "react";
import store from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setInitalNumber,
  addition,
  decrementation,
  multiplication,
  subtraction,
} from "./counterSlice";
import { currentUserNum, selectUserInput } from "../userInput/userInputSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const userInput = useSelector(selectUserInput);
  const dispatch = useDispatch();
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [operator, setOperator] = useState("");

  function handleOpClick(e) {
    if (!firstInput) {
      setFirstInput("0");
      setOperator(e.target.value);
    } else if (firstInput == 0 && !operator && !secondInput) {
      setFirstInput(0);
      dispatch(currentUserNum(String(0)));
      setOperator(e.target.value);
    } else if (operator && !secondInput) {
      setSecondInput("");
      setOperator(e.target.value);
    } else if (!operator) {
      dispatch(setInitalNumber(Number(firstInput)));
      setOperator(e.target.value);
    } else if (secondInput !== "" || secondInput !== 0) {
      switchOperator(e);
    }
  }

  function switchOperator(e) {
    switch (operator) {
      case "+": {
        console.log("plus");
        dispatch(addition(Number(secondInput)));
        const state = store.getState();
        setFirstInput(state.counter.value);
        setSecondInput("");
        dispatch(currentUserNum(String(state.counter.value)));
        setOperator(e.target.value);
        break;
      }
      case "-": {
        console.log("minus");
        dispatch(decrementation(Number(secondInput)));
        const state = store.getState();
        setFirstInput(state.counter.value);
        setSecondInput("");
        dispatch(currentUserNum(String(state.counter.value)));
        setOperator(e.target.value);
        break;
      }
      case "x": {
        console.log("multiply");
        dispatch(multiplication(Number(secondInput)));
        const state = store.getState();
        setFirstInput(state.counter.value);
        setSecondInput("");
        dispatch(currentUserNum(String(state.counter.value)));
        setOperator(e.target.value);
        break;
      }
      case "÷": {
        if (secondInput == 0) {
          setSecondInput("");
          setOperator(e.target.value);
          dispatch(currentUserNum(Number(firstInput)));
          console.log("zero devide!");
        } else {
          console.log("substract");
          dispatch(subtraction(Number(secondInput)));
          const state = store.getState();
          setFirstInput(state.counter.value);
          setSecondInput("");
          dispatch(currentUserNum(Number(state.counter.value)));
          setOperator(e.target.value);
        }
        break;
      }
      case "=": {
        console.log("substract");
        dispatch(subtraction(Number(secondInput)));
        const state = store.getState();
        setFirstInput(state.counter.value);
        setSecondInput("");
        dispatch(currentUserNum(String(state.counter.value)));
        setOperator(e.target.value);
        break;
      }
      default:
        break;
    }
  }

  function handleNumClick(e) {
    if (!operator) {
      setFirstInput((prevState) => prevState + e.target.value);
      dispatch(currentUserNum(String(firstInput + e.target.value)));
    } else {
      setSecondInput((prevState) => prevState + e.target.value);
      dispatch(currentUserNum(String(secondInput + e.target.value)));
    }
  }

  function handleResetClick() {
    if (firstInput) {
      setFirstInput("");
      setSecondInput("");
      setOperator("");
      dispatch(setInitalNumber(Number(0)));
      dispatch(currentUserNum(String(0)));
    }
  }

  function handleBackClick() {
    const state = store.getState();
    if (firstInput && !secondInput && !operator) {
      dispatch(currentUserNum(String(state.userInput.value.slice(0, -1))));
      setFirstInput(state.userInput.value.slice(0, -1));
    } else if (secondInput !== "") {
      dispatch(currentUserNum(String(state.userInput.value.slice(0, -1))));
      setSecondInput(state.userInput.value.slice(0, -1));
    }
  }

  function handleDecimalClick(e) {
    if (!operator && !firstInput) {
      setFirstInput(0 + e.target.value);
      dispatch(currentUserNum(String(0 + e.target.value)));
      console.log("first");
    } else if (operator && !secondInput) {
      setSecondInput(0 + e.target.value);
      dispatch(currentUserNum(String(0 + e.target.value)));
      console.log("2");
    } else if (operator !== "" && !secondInput) {
      setSecondInput(0 + ".");
      dispatch(currentUserNum(String(0 + e.target.value)));
      console.log("th");
    } else {
      setSecondInput((prevState) => [prevState + e.target.value]);
      dispatch(currentUserNum(String(secondInput + e.target.value)));
      console.log("4");
    }
  }

  function handleEqualClick() {
    console.log("equ");
  }

  return (
    <div style={{ whiteSpace: "pre-wrap" }}>
      {firstInput} {operator} {secondInput}
      <h2> {userInput || 0}</h2>
      <div className={styles.row}>
        <hr />
        <div>
          {/* 1st row */}
          <div className="row">
            <button>⇋</button>
            <button value="↤" onClick={handleBackClick}>
              ↤
            </button>
            <button value="c" onClick={handleResetClick}>
              c
            </button>
            <button
              aria-label="Subtraction calc"
              value="÷"
              onClick={handleOpClick}
            >
              ÷
            </button>
          </div>
          {/* 2nd row  */}
          <div className="row">
            <button value="7" onClick={handleNumClick}>
              7
            </button>

            <button value="8" onClick={handleNumClick}>
              8
            </button>
            <button value="9" onClick={handleNumClick}>
              9
            </button>
            <button
              aria-label="Multiplication calc"
              value="x"
              onClick={handleOpClick}
            >
              x
            </button>
          </div>
          {/* 3rd row */}
          <div className="row">
            <button value="4" onClick={handleNumClick}>
              4
            </button>
            <button value="5" onClick={handleNumClick}>
              5
            </button>
            <button value="6" onClick={handleNumClick}>
              6
            </button>
            <button
              aria-label="Decrementation calc"
              value="-"
              onClick={handleOpClick}
            >
              -
            </button>
          </div>
          {/* 4th row */}
          <div className="row">
            <button value="1" onClick={handleNumClick}>
              1
            </button>
            <button value="2" onClick={handleNumClick}>
              2
            </button>
            <button value="3" onClick={handleNumClick}>
              3
            </button>
            <button
              aria-label="Addition calc"
              value="+"
              onClick={handleOpClick}
            >
              +
            </button>
          </div>
          {/* last row */}
          <div className="row">
            <button value="0" onClick={handleNumClick}>
              0
            </button>
            <button value={"."} onClick={handleDecimalClick}>
              .
            </button>
            <button
              className={styles.doublebutton}
              value="="
              onClick={handleEqualClick}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
