import React from "react";
import { connect } from "react-redux";
import { deposit, withdraw } from "../../store/amount/action";

const mapStateToProps = (state) => {
  return {
    amount: state.amountReducer.amount,
  };
};

function Counter({ amount, deposit, withdraw }) {
  return (
    <div>
      <h1> {amount} </h1>
      <button onClick={() => deposit()}>Deposit $10</button>
      <button onClick={() => withdraw()}>Withdraw $10</button>
    </div>
  );
}

export default connect(mapStateToProps, { deposit, withdraw })(Counter);
