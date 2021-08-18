import { useState } from "react";
import "./ExpenseForm.css";
// ================================================event===============================================================
const ExpenseForm = () => {
  //   const [enteredTitle, setEnteredTitle] = useState(" ");

  //   const [enteredAmount , setEnteredAmount ] = useState('');

  //   const [enteredDate , setEnteredDate] = useState('');
  // one state passed instead of 3 , by passing obj in use state

  const [userInput, setUserInput] = useState({
    enteredTitle: " ",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    setUserInput({
      enteredTitle: event.target.value, //if using this alone then this means to dump the other 2 states
      ...userInput,
    });
    // event object comes by default
    // console.log(event.target.value);
  };

  //   can call useState more than once
  const amountChangedHandler = (event) => {
    // setEnteredAmount(event.target.value);
    setUserInput({
      enteredAmount: event.target.value, //if using this alone then this means to dump the other 2 states
      ...userInput,
    });
  };

  const dateChangedHandler = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput({
      enteredDate: event.target.value, //if using this alone then this means to dump the other 2 states
      ...userInput,
    });
  };

  // ================================================event===============================================================
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2020-01-01" max="2021-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
