import React, { useState } from "react";
// first component
//  we don't need to import react now explicitly when using JSX , in the past we need to
//  here is html code inside js file ---- this is JSX[javascript XML]
// dev tools me sources me whole react dom code and package code , not just our code , there will be app function not same tough
// import ExpenseItem from "./components/ExpenseItems";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyexpenses = [
  { id : 1 ,title: " Spalding Basketball", amount: 1999, date: new Date(2021, 7, 18) },
  {id : 2 , title: "Ryzen7", amount: 29000, date: new Date(2021, 7, 10) },
  { id : 3 ,title: "Mouse", amount: 499, date: new Date(2021, 7, 9) },
];

function App() {
  const [expenses, setExpenses] = useState(dummyexpenses);
  const addExpenseHandler = (expense) => {
    // console.log("app.js ke andar");
    // console.log(expense);
    // setExpenses([expense , ...expenses]); not the correct way ,useState gets previous snapshot in function as parameter use that
    setExpenses((prevExpense)=>{
      return   ([expense , ...prevExpense])
    });
  };
  return (
    // in browser they get converted to react methods i.e React.createElement() , we do not see this code in browser.
    <div className="App">
      <h1>React mini project 1</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* <p>This is also in app.js</p> */}
      <Expenses items={expenses} />
      {/* if it would have js , then create paragraph append etc.... */}
    </div>
  );
}

export default App; //export our component

// the code will move from component to component to ecery components jsx code untill
// there is no jsx code left
