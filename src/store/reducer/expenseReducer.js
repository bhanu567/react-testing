import { createSlice } from "@reduxjs/toolkit";

const initialExpenses = {
  expenses: {},
  totalExpense: 0,
  editExpense: null,
};

const expenseSlice = createSlice({
  name: "expense",
  initialState: initialExpenses,
  reducers: {
    fetchExpense(state, action) {
      state.expenses = { ...action.payload };
      let totalExpense = 0;
      Object.values(state.expenses).forEach((val) => {
        totalExpense += Number(val.money);
      });
      state.totalExpense = totalExpense;
    },

    addExpense(state, action) {
      state.expenses[action.payload.ID] = action.payload.expense;
      state.totalExpense += Number(action.payload.expense.money);
    },

    setEditExpense(state, action) {
      state.editExpense = action.payload.expenseId;
    },

    editDisplayExpense(state, action) {
      const expenseID = action.payload;
      state.totalExpense -= Number(state.expenses[expenseID].money);
      delete state.expenses[expenseID];
    },

    updateExpense(state, action) {
      state.expenses[state.editExpense] = action.payload;
      state.totalExpense += Number(action.payload.money);
      state.editExpense = null;
    },

    deleteExpense(state, action) {
      const expenseID = action.payload;
      state.totalExpense -= state.expenses[expenseID].money;
      delete state.expenses[expenseID];
    },
  },
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice.reducer;
