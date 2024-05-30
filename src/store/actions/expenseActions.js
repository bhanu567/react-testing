import { expenseActions } from "../reducer/expenseReducer";

const Api =
  "https://user-authentication-b60ce-default-rtdb.asia-southeast1.firebasedatabase.app/expenses";

const jsonEnd = ".json";

export const getExpenseAction = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(Api + jsonEnd);
      const responseJSON = await response.json();
      dispatch(expenseActions.fetchExpense(responseJSON));
    } catch (error) {
      alert(error.message);
    }
  };
};
export const addExpenseAction = (newExpense) => {
  return async (dispatch) => {
    try {
      const response = await fetch(Api + jsonEnd, {
        method: "POST",
        body: JSON.stringify(newExpense),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseJSON = await response.json();
      dispatch(
        expenseActions.addExpense({
          ID: responseJSON.name,
          expense: newExpense,
        })
      );
    } catch (error) {
      alert(error.message);
    }
  };
};

export const editExpenseAction = (updatedExpense, expenseID) => {
  return async (dispatch) => {
    try {
      await fetch(Api + "/" + expenseID + jsonEnd, {
        method: "PUT",
        body: JSON.stringify(updatedExpense),
        headers: {
          "Content-Type": "application/json",
        },
      });
      dispatch(expenseActions.updateExpense(updatedExpense));
    } catch (error) {
      alert(error.message);
    }
  };
};

export const deleteExpenseAction = (expenseID) => {
  return async (dispatch) => {
    try {
      await fetch(Api + "/" + expenseID + jsonEnd, {
        method: "DELETE",
      });
      alert("Expense Deleted Successfully!!!");
      dispatch(expenseActions.deleteExpense(expenseID));
    } catch (error) {
      alert(error.message);
    }
  };
};
