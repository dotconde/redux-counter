import React, { useRef } from "react";
import { connect } from "react-redux";
import { deposit, withdraw } from "../../store/amount/action";

function Counter({ deposit, withdraw }) {
  const amountRef = useRef(null);
  return (
    <div>
      <h1 ref={amountRef}> Value... </h1>
      <button onClick={() => deposit()}>Deposit $10</button>
      <button onClick={() => withdraw()}>Withdraw $10</button>
    </div>
  );
}

export default connect(null, { deposit, withdraw })(Counter);
