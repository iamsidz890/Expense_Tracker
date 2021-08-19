import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData ,
      id: Math.random().toString()
    }
    console.log(expenseData);
    props.onAddExpense();

  }
  return (
    <div className="new-expense">
      {/* <form></form> new component */}
      <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
      {/* passing to form  */}
    </div>
  );
};

export default NewExpense;
