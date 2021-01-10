import React, { useRef } from "react";

function Counter() {
  const amountRef = useRef(null);
  return (
    <div>
      <h1 ref={amountRef}> Value... </h1>
      <button>Deposit $10</button>
      <button>Withdraw $10</button>
    </div>
  );
}

export default Counter;
