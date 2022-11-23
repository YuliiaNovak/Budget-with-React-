function AddNewExpenseButton({ onClick, statefulVar = false, buttonName }) {
   return !statefulVar && <button onClick={onClick}>{buttonName}</button>;
}

export default AddNewExpenseButton;
