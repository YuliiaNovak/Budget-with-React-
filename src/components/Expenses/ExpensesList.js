import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {
   const expenseItems = props.filteredExpenses.map((filteredExpense) => (
      <ExpenseItem
         className="expenses-list"
         key={filteredExpense.id}
         filteredYear={props.filteredYear}
         title={filteredExpense.title}
         amount={filteredExpense.amount}
         date={filteredExpense.date}
      />
   ));

   return props.filteredExpenses.length ? (
      expenseItems
   ) : (
      <p className="expenses-list__fallback">No expenses found.</p>
   );
}

export default ExpensesList;
