import React, { Fragment, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { expenseActions } from "../../store/reducer/expenseReducer";
import Form from "./Form";
import DisplayExpenses from "./DisplayExpenses";
import { getExpenseAction } from "../../store/actions/expenseActions";

const ExpenseTracker = () => {
  const childRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExpenseAction());
  }, [dispatch]);

  const setEditExpenseHandler = (expenseData) => {
    dispatch(expenseActions.setEditExpense({ expenseId: expenseData[0] }));
    dispatch(expenseActions.editDisplayExpense({ expenseId: expenseData[0] }));
    childRef.current.fillEditExpense(expenseData[1]);
  };

  const expenseData = useSelector((state) => state.expense.expenses);

  const downloadFileHandler = async () => {
    const expenses = Object.values(expenseData);
    const csvExpense = [
      ["Category", "Desccription", "Money"],
      ...expenses.map((expense) => [
        expense.category,
        expense.desc,
        expense.money,
      ]),
    ]
      .map((e) => e.join(","))
      .join("\n");
    const expenseBlob = new Blob([csvExpense]);
    const fileURL = window.URL.createObjectURL(expenseBlob);
    let alink = document.createElement("a");
    alink.href = fileURL;
    alink.download = "expenseData.csv";
    alink.click();
  };

  return (
    <Fragment>
      <Form ref={childRef} />
      {Object.entries(expenseData).map((entry) => (
        <DisplayExpenses
          key={entry[0]}
          data={entry}
          editExpense={setEditExpenseHandler}
        />
      ))}
      <div className="d-grid d-md-flex justify-content-md-end">
        <button
          type="button"
          className="btn btn-secondary btn-sm me-4"
          onClick={downloadFileHandler}
        >
          Download Expense
        </button>
      </div>
    </Fragment>
  );
};

export default ExpenseTracker;
