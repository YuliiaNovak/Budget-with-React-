import { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

function Expenses(props) {
   const [filteredYear, onFilteredYear] = useState("2022");

   const filterChangeHandler = (selectedYear) => {
      onFilteredYear(selectedYear);
   };

   const filteredExpenses = props.expenses.filter(
      (expense) => expense.date.getFullYear() === Number(filteredYear)
   );

   return (
      <Card className="expenses">
         <ExpensesFilter
            expenses={props}
            onChangeFilter={filterChangeHandler}
         />
         <ExpensesChart expenses={filteredExpenses} />
         <ExpensesList
            filteredExpenses={filteredExpenses}
            filteredYear={filteredYear}
         />
      </Card>
   );
}

export default Expenses;
