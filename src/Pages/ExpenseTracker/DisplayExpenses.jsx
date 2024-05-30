import React from "react";
import { useDispatch } from "react-redux";
import expenseIcon from "../../Images/expense-icon.png";
import { deleteExpenseAction } from "../../store/actions/expenseActions";
const DisplayExpenses = (props) => {
  const dispatch = useDispatch();

  return (
    <h5 className="ms-5">
      <img
        src={expenseIcon}
        alt="Expense Icon"
        width="30"
        height="30"
        className="me-4"
      ></img>
      <b>₹ {props.data[1].money}</b> has spent on{" "}
      <b>{props.data[1].category}</b>. <i>{props.data[1].desc}.</i>
      <button
        type="button"
        className="btn btn-dark btn-sm mx-3"
        onClick={() => {
          props.editExpense(props.data);
        }}
      >
        EDIT
      </button>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={() => {
          dispatch(deleteExpenseAction(props.data[0]));
        }}
      >
        DELETE
      </button>
    </h5>
  );
};

export default DisplayExpenses;
