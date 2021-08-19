import { useState } from "react";
import "./ExpenseForm.css";
// ================================================event===============================================================
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(" ");

  const [enteredAmount, setEnteredAmount] = useState("");

  const [enteredDate, setEnteredDate] = useState("");
  // one state passed instead of 3 , by passing obj in use state

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: " ",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
 
  const titleChangedHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   enteredTitle: event.target.value, //if using this alone then this means to dump the other 2 states
    //   ...userInput,
    // });
    // event object comes by default
    // console.log(event.target.value);
  };

  //   can call useState more than once
  const amountChangedHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   enteredAmount: event.target.value, //if using this alone then this means to dump the other 2 states
    //   ...userInput,
    // });
  };

  const dateChangedHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   enteredDate: event.target.value, //if using this alone then this means to dump the other 2 states
    //   ...userInput,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // to stop the page from reloading
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // to set the fields again empty after submission
    props.onSaveExpenseData(expenseData);
    setEnteredDate("");
    setEnteredTitle("");
    setEnteredAmount("");

    console.log(expenseData);
  };

  // ================================================event===============================================================
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangedHandler}
          />
          {/* this is two way binding , means we are not just listening to changes but also updating */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangedHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2021-12-31"
            value={enteredDate}
            onChange={dateChangedHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add</button>
        {/* when a button with submit as type is pressed then the whole form listens to a submit event and the page will reload by default*/}
      </div>
    </form>
  );
};

export default ExpenseForm;

// pass data from child to parent , i.e from this expense form to new expense then to app.js , as we can't skip intermediate components
// we cannot pass data between sibling components , as data can only be passed between parent and child , for that case , pass 
// to parent first and then to the other child ------------------ LIFTING THE STATE UP