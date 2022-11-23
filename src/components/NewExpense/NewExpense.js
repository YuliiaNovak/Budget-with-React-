import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import AddNewExpenseButton from "./AddNewExpenseButton";
import "./NewExpense.css";

function NewExpense(props) {
   const [openForm, setOpenForm] = useState(false);

   const openFormHandler = () => {
      console.log("here");
      setOpenForm(!openForm);
   };

   const submitExpenseData = (enteredExpenseData) => {
      const expenseData = {
         ...enteredExpenseData,
         id: Math.random().toString(),
      };
      props.onAddExpense(expenseData);
   };

   return (
      <div className="new-expense">
         <AddNewExpenseButton
            onClick={openFormHandler}
            statefulVar={openForm}
            buttonName="Add New Expense"
         />
         {openForm && (
            <ExpenseForm
               onSubmitExpenseData={submitExpenseData}
               onClick={openFormHandler}
            />
         )}
      </div>
   );
}

export default NewExpense;
