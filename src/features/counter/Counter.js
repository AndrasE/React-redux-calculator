import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addition,
  decrementation,
  multiplication,
  subtraction,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [calcAmount, setCalcAmount] = useState("0");

  return (
    <div>
      <div className={styles.row}>
        {/* <button
          
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button> */}
        <span className={styles.value}>{count}</span>
        {/* <button
          
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button> */}
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={calcAmount}
          onChange={(e) => setCalcAmount(e.target.value)}
        />
        {/* <button
          aria-label="Addition calc"
          onClick={() => dispatch(addition(Number(calcAmount) || 0))}
        >
          +
        </button> */}
        {/* <button
          aria-label="Decrement calc"
          onClick={() => dispatch(decrementation(Number(calcAmount) || 0))}
        >
          -
        </button> */}
        {/* <button
          aria-label="Multiplication calc"
          onClick={() => dispatch(multiplication(Number(calcAmount) || 0))}
        >
          *
        </button> */}
      
        <hr />
        <div class="container calc flex flex-col items-center ">
          <button >S</button>
          <button onclick="back()">AC</button>
          <button
          
          >
            %
          </button>
          <button   aria-label="Subtraction calc"
            onClick={() => dispatch(subtraction(Number(calcAmount) || 0))}>÷</button>

          <div class="row">
            <button onclick="dis('7')">7</button>
            <button onclick="dis('8')">8</button>
            <button onclick="dis('9')">9</button>
            <button aria-label="Multiplication calc"
          onClick={() => dispatch(multiplication(Number(calcAmount) || 0))}>X</button>
          </div>
          <div class="row">
            <button onclick="dis('4')">4</button>
            <button onclick="dis('5')">5</button>
            <button onclick="dis('6')">6</button>
            <button aria-label="Decrementation calc"
          onClick={() => dispatch(decrementation(Number(calcAmount) || 0))}>-</button>
          </div>
          <div class="row">
            <button onclick="dis('1')">1</button>
            <button onclick="dis('2')">2</button>
            <button onclick="dis('3')">3</button>
            <button aria-label="Addition calc"
          onClick={() => dispatch(addition(Number(calcAmount) || 0))}>+</button>
          </div>
          <div class="row">
            <button onclick="dis('0')">0</button>
        
            <button onclick="dis('.')">.</button>
            <button className={styles.doublebutton} onclick="solve()">=</button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}